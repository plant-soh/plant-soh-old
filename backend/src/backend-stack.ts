import * as appsync from '@aws-cdk/aws-appsync-alpha';
import * as core from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
// import * as lambdajs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { AppSyncTransformer } from 'cdk-appsync-transformer';
import * as constructs from 'constructs';
import { StaticWebsite } from './constructs/static-website';

export interface BackendStackProps extends core.StackProps {
  stage: string;

  userPoolId?: string;

  domainName: string;
}

export class BackendStack extends core.Stack {
  constructor(
    scope: constructs.Construct,
    id: string,
    props: BackendStackProps,
  ) {
    super(scope, id, props);

    new StaticWebsite(this, 'LandingPage', {
      build: '../landingpage/build',
      // domainName: props.domainName,
      // recordName: '',
      // alternativeRecordName: 'www',
    });

    let userPool;
    if (!props.userPoolId) {
      userPool = new cognito.UserPool(this, `${props.stage}CatalogUserPool`, {
        removalPolicy: core.RemovalPolicy.DESTROY,
        signInAliases: { username: false, email: true, phone: false },
        selfSignUpEnabled: true,
        customAttributes: {
          // Supported types: DOCTOR, PATIENT
          accountType: new cognito.StringAttribute({ mutable: true }),
        },
        passwordPolicy: {
          minLength: 6,
          requireDigits: true,
          requireLowercase: true,
          requireUppercase: true,
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

    const graphqlUrl = new ssm.StringParameter(this, 'PlantSohGraphqlUrl', {
      // parameterName: 'PlantSohGraphqlUrl',
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

    new StaticWebsite(this, 'Catalog', {
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
