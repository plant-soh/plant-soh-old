import * as appsync from '@aws-cdk/aws-appsync-alpha';
import * as core from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
// import * as lambdajs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { AppSyncTransformer } from 'cdk-appsync-transformer';
import * as constructs from 'constructs';
import { StaticWebsite } from './constructs/static-website';

export interface CatalogStackProps extends core.StackProps {
  stage: string;

  userPoolId?: string;

  domainName: string;
}

export class CatalogStack extends core.Stack {
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CatalogStackProps,
  ) {
    super(scope, id, props);

    let userPool;
    if (!props.userPoolId) {
      userPool = new cognito.UserPool(this, `${props.stage}CatalogUserPool`, {
        removalPolicy: core.RemovalPolicy.RETAIN,
        signInCaseSensitive: false,
        passwordPolicy: {
          minLength: 8,
          requireLowercase: true,
          requireUppercase: true,
          requireDigits: true,
          requireSymbols: true,
        },
        selfSignUpEnabled: true,
        autoVerify: {
          email: true,
        },
        standardAttributes: {
          familyName: {
            mutable: true,
            required: true,
          },
          givenName: {
            mutable: true,
            required: true,
          },
          email: {
            mutable: true,
            required: true,
          },
          phoneNumber: {
            mutable: true,
            required: true,
          },
        },
        signInAliases: {
          username: true,
        },
      });
    } else {
      userPool = cognito.UserPool.fromUserPoolId(
        this,
        `${props.stage}CatalogUserPool`,
        props.userPoolId,
      );
    }

    new core.CfnOutput(this, 'UserPoolId', {
      value: userPool.userPoolId,
    });

    const userPoolWebClient = new cognito.UserPoolClient(
      this,
      'userPoolWebClient',
      {
        userPool: userPool,
        generateSecret: false,
        preventUserExistenceErrors: true,
        oAuth: {
          flows: {
            authorizationCodeGrant: false,
            implicitCodeGrant: true,
          },
        },
      },
    );

    new core.CfnOutput(this, 'UserPoolWebClientId', {
      value: userPoolWebClient.userPoolClientId,
    });

    const identityPool = new cognito.CfnIdentityPool(
      this,
      'CatalogIdentityPool',
      {
        cognitoIdentityProviders: [
          {
            clientId: userPoolWebClient.userPoolClientId,
            providerName: `cognito-idp.${this.region}.amazonaws.com/${userPool.userPoolId}`,
          },
        ],
        allowUnauthenticatedIdentities: true,
      },
    );

    new core.CfnOutput(this, 'identityPoolId', {
      value: identityPool.ref,
    });

    const unauthenticatedRole = new iam.Role(this, 'unauthenticatedRole', {
      description: 'Unauthenticated role for users',
      assumedBy: new iam.FederatedPrincipal(
        'cognito-identity.amazonaws.com',
        {
          // eslint-disable-next-line quote-props
          StringEquals: {
            'cognito-identity.amazonaws.com:aud': identityPool.ref,
          },
          'ForAnyValue:StringLike': {
            'cognito-identity.amazonaws.com:amr': 'unauthenticated',
          },
        },
        'sts:AssumeRoleWithWebIdentity',
      ),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
      ],
    });

    // const unAuthPrincipal = new iam.WebIdentityPrincipal(
    //   'cognito-identity.amazonaws.com',
    // ).withConditions({
    //   // eslint-disable-next-line quote-props
    //   StringEquals: {
    //     'cognito-identity.amazonaws.com:aud': `${identityPool.ref}`,
    //   },
    //   'ForAnyValue:StringLike': {
    //     'cognito-identity.amazonaws.com:amr': 'unauthenticated',
    //   },
    // });

    // const unauthRole = new iam.Role(this, 'demo-identity-unauth-role', {
    //   assumedBy: unAuthPrincipal,
    // });

    const authenticatedRole = new iam.Role(this, 'authenticatedRole', {
      description: 'Default role for authenticated users',
      assumedBy: new iam.FederatedPrincipal(
        'cognito-identity.amazonaws.com',
        {
          // eslint-disable-next-line quote-props
          StringEquals: {
            'cognito-identity.amazonaws.com:aud': identityPool.ref,
          },
          'ForAnyValue:StringLike': {
            'cognito-identity.amazonaws.com:amr': 'authenticated',
          },
        },
        'sts:AssumeRoleWithWebIdentity',
      ),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
      ],
    });

    new core.CfnOutput(this, 'AuthenticatedRoleArn', {
      value: authenticatedRole.roleArn,
    });

    new cognito.CfnIdentityPoolRoleAttachment(this, 'identityRole', {
      identityPoolId: identityPool.ref,
      roles: {
        unauthenticated: unauthenticatedRole.roleArn,
        authenticated: authenticatedRole.roleArn,
      },
      roleMappings: {
        mapping: {
          type: 'Token',
          ambiguousRoleResolution: 'AuthenticatedRole',
          identityProvider: `cognito-idp.${
            core.Stack.of(this).region
          }.amazonaws.com/${userPool.userPoolId}:${
            userPoolWebClient.userPoolClientId
          }`,
        },
      },
    });

    const appSyncTransformer = new AppSyncTransformer(this, 'senjun-graphql', {
      schemaPath: 'src/schema.graphql',
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.USER_POOL,
          userPoolConfig: {
            userPool: userPool,
            defaultAction: appsync.UserPoolDefaultAction.ALLOW,
          },
        },
        additionalAuthorizationModes: [
          {
            authorizationType: appsync.AuthorizationType.IAM,
          },
          // {
          //   authorizationType: appsync.AuthorizationType.API_KEY,
          //   apiKeyConfig: {
          //     expires: cdk.Expiration.after(cdk.Duration.days(365)),
          //   },
          // },
        ],
      },
    });

    const graphqlUrl = new ssm.StringParameter(this, 'GraphqlUrl', {
      parameterName: 'GraphqlUrl',
      stringValue: appSyncTransformer.appsyncAPI.graphqlUrl,
    });
    // const publicRole = new iam.Role(this, 'public-role', {
    //   assumedBy: new iam.WebIdentityPrincipal(
    //     'cognito-identity.amazonaws.com',
    //   ).withConditions({
    //     // eslint-disable-next-line quote-props
    //     StringEquals: {
    //       'cognito-identity.amazonaws.com:aud': `${identityPool.ref}`,
    //     },
    //     'ForAnyValue:StringLike': {
    //       'cognito-identity.amazonaws.com:amr': 'unauthenticated',
    //     },
    //   }),
    // });
    // publicRole;
    // appSyncTransformer.grantPublic(publicRole);

    // const nestedStack = new core.NestedStack(this, 'appsync-nested-stack');
    // const app = new appsync.GraphqlApi(nestedStack, 'api', { name: 'blub' });

    const catalogWebsite = new StaticWebsite(this, 'CatalogWebsite', {
      build: '../catalog/build',
      // recordName: 'catalog',
      // domainName: props.domainName,
      runtimeOptions: {
        jsonPayload: {
          stage: props.stage,
          region: core.Stack.of(this).region,
          identityPoolId: identityPool.ref,
          userPoolId: userPool.userPoolId,
          userPoolWebClientId: userPoolWebClient.userPoolClientId,
          appSyncGraphqlEndpoint: graphqlUrl.stringValue,
        },
      },
    });

    new core.CfnOutput(this, 'BucketWebsiteUrl', {
      value: catalogWebsite.bucketWebsiteUrl,
    });

    // new core.CfnOutput(this, 'CustomDomainWebsiteUrl', {
    //   value: Catalog.recordDomainName,
    // });

    new core.CfnOutput(this, 'WebsiteCloudfrontDomainName', {
      value: catalogWebsite.distributionDomainName,
    });

    // Add allowed queries to the unauthorized identity pool role
    authenticatedRole.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['appsync:GraphQL'],
        resources: [
          // Queries
          `arn:aws:appsync:${this.region}:${this.account}:apis/${appSyncTransformer.appsyncAPI.apiId}/types/*`,
        ],
      }),
    );

    unauthenticatedRole.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['appsync:GraphQL'],
        resources: [
          // Queries
          `arn:aws:appsync:${this.region}:${this.account}:apis/${appSyncTransformer.appsyncAPI.apiId}/types/*`,
        ],
      }),
    );
  }
}
