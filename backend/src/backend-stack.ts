import * as appsync from '@aws-cdk/aws-appsync-alpha';
import * as core from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
// import * as ddb from 'aws-cdk-lib/aws-dynamodb';
import * as lambdajs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { AppSyncTransformer } from 'cdk-appsync-transformer';
import * as constructs from 'constructs';
import { StaticWebsite } from './constructs/static-website';

export interface BackendStackProps extends core.StackProps {
  stage: string;

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

    // if (!props.userPoolId) {
    const userPool = new cognito.UserPool(
      this,
      `${props.stage}StueliUserPool`,
      {
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
      },
    );

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

    const api = new AppSyncTransformer(this, 'plant-soh-graphql', {
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
        ],
      },
    });

    Object.entries(api.tableMap).forEach((table) => {
      // const cfnTable = table[1].node.defaultChild as ddb.CfnTable;
      table[1].applyRemovalPolicy(core.RemovalPolicy.DESTROY);
      // var tableName = table[0];
      // switch (table[0]) {
      //   case 'DeviceTokenTable':
      //     tableName = 'DeviceTokenTableNew';
      //     break;
      //   case 'TelemetryTable':
      //     tableName = 'TelemetryTableNew';
      //     break;
      // }
      // cfnTable.tableName = tableName;
    });

    const graphqlUrl = new ssm.StringParameter(this, 'PlantSohGraphqlUrl', {
      // parameterName: 'PlantSohGraphqlUrl',
      stringValue: api.appsyncAPI.graphqlUrl,
    });

    const appSyncCustomDomainUrl =
      'https://x4hydovt5ncqtfdy6owen6mmga.appsync-api.eu-central-1.amazonaws.com/graphql';

    new core.CfnOutput(this, 'AppSyncCustomDomainUrl', {
      value: appSyncCustomDomainUrl,
    });

    /**
     * Creates user in table if not exist.
     * Assigns the correct user user organization role.
     */
    const preTokenGenerationLambda = new lambdajs.NodejsFunction(
      this,
      'preTokenGenerationLambda',
      {
        environment: {
          APPSYNC_URL: appSyncCustomDomainUrl,
        },
      },
    );

    userPool.addTrigger(
      cognito.UserPoolOperation.PRE_TOKEN_GENERATION,
      preTokenGenerationLambda,
    );

    // const createAnlagenUser = new lambdajs.NodejsFunction(
    //   this,
    //   'createAnlagenUser',
    //   {
    //     functionName: 'createAnlagenUser',
    //     timeout: core.Duration.seconds(30),
    //     environment: {
    //       APPSYNC_URL: appSyncCustomDomainUrl,
    //     },
    //   },
    // );

    // api.addLambdaDataSourceAndResolvers(
    //   'createAnlagenUser',
    //   'createAnlagenUser',
    //   createAnlagenUser,
    // );

    // const deleteAnlagenUser = new lambdajs.NodejsFunction(
    //   this,
    //   'deleteAnlagenUser',
    //   {
    //     functionName: 'deleteAnlagenUser',
    //     timeout: core.Duration.seconds(30),
    //     environment: {
    //       APPSYNC_URL: appSyncCustomDomainUrl,
    //     },
    //   },
    // );

    // api.addLambdaDataSourceAndResolvers(
    //   'deleteAnlagenUser',
    //   'deleteAnlagenUser',
    //   deleteAnlagenUser,
    // );

    // const deleteAnlage = new lambdajs.NodejsFunction(this, 'deleteAnlage', {
    //   functionName: 'deleteAnlage',
    //   timeout: core.Duration.seconds(30),
    //   environment: {
    //     APPSYNC_URL: appSyncCustomDomainUrl,
    //   },
    // });

    // api.addLambdaDataSourceAndResolvers(
    //   'deleteAnlage',
    //   'deleteAnlage',
    //   deleteAnlage,
    // );

    const setCurrentAnlageId = new lambdajs.NodejsFunction(
      this,
      'setCurrentAnlageId',
      {
        functionName: 'setCurrentAnlageId',
        timeout: core.Duration.seconds(30),
        environment: {
          APPSYNC_URL: appSyncCustomDomainUrl,
        },
      },
    );

    api.addLambdaDataSourceAndResolvers(
      'setCurrentAnlageId',
      'setCurrentAnlageId',
      setCurrentAnlageId,
    );

    const setCurrentProjektId = new lambdajs.NodejsFunction(
      this,
      'setCurrentProjektId',
      {
        functionName: 'setCurrentProjektId',
        timeout: core.Duration.seconds(30),
        environment: {
          APPSYNC_URL: appSyncCustomDomainUrl,
        },
      },
    );

    api.addLambdaDataSourceAndResolvers(
      'setCurrentProjektId',
      'setCurrentProjektId',
      setCurrentProjektId,
    );

    const listKurzspezifikationVorschlaege = new lambdajs.NodejsFunction(
      this,
      'listKurzspezifikationVorschlaege',
      {
        functionName: 'listKurzspezifikationVorschlaege',
        timeout: core.Duration.seconds(30),
        environment: {
          APPSYNC_URL: appSyncCustomDomainUrl,
        },
      },
    );

    api.addLambdaDataSourceAndResolvers(
      'listKurzspezifikationVorschlaege',
      'listKurzspezifikationVorschlaege',
      listKurzspezifikationVorschlaege,
    );

    // add AppSync access to all lambda which need it
    [
      preTokenGenerationLambda,
      setCurrentAnlageId,
      setCurrentProjektId,
      listKurzspezifikationVorschlaege,
    ].map((lambda) => {
      lambda.addToRolePolicy(
        new iam.PolicyStatement({
          actions: ['appsync:*'],
          resources: ['*'],
        }),
      );
    });

    new StaticWebsite(this, 'Stueli', {
      build: '../stueli/build',
      // recordName: 'stueli',
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
          `arn:aws:appsync:${this.region}:${this.account}:apis/${api.appsyncAPI.apiId}/types/*`,
        ],
      }),
    );

    unauthenticatedRole.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['appsync:GraphQL'],
        resources: [
          // Queries
          `arn:aws:appsync:${this.region}:${this.account}:apis/${api.appsyncAPI.apiId}/types/*`,
        ],
      }),
    );
  }
}
