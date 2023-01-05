// import AppsyncClient from 'appsync-client';

// import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
// import { Anlage } from '../../stueli/src/lib/api';

// const { APPSYNC_URL } = process.env;

// const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

export async function handler(event: lambda.AppSyncAuthorizerEvent) {
  console.debug(`event: ${JSON.stringify(event)}`);

  return {
    // required
    isAuthorized: true, // if "false" then an UnauthorizedException is raised, access is denied
    resolverContext: { banana: 'very yellow' }, // JSON object visible as $ctx.identity.resolverContext in VTL resolver templates

    // optional
    // deniedFields: ['TypeName.FieldName'], // Forces the fields to "null" when returned to the client
    // ttlOverride: 10, // The number of seconds that the response should be cached for. Overrides default specified in "amplify update api"
  };
}
