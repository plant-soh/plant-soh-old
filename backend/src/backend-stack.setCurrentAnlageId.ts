// import AppsyncClient from 'appsync-client';

import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
import { AppSyncIdentityCognito } from 'aws-lambda';
import {
  GetAnlagenUserDocument,
  SetCurrentAnlageIdInput,
  UpdateUserDocument,
  User,
} from '../../stueli/src/lib/api';

const { APPSYNC_URL } = process.env;

const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

export async function handler(
  event: lambda.AppSyncResolverEvent<{ input: SetCurrentAnlageIdInput }>,
): Promise<User | null | undefined> {
  console.debug(`event: ${JSON.stringify(event)}`);

  const { anlageId } = event.arguments.input;

  console.log('Checking permission');
  if (!event.identity) {
    throw Error('No identity');
  }
  if (!(event.identity as any).defaultAuthStrategy) {
    throw new Error('Only Cognito identity allowed!');
  }

  const { email } = (event.identity as AppSyncIdentityCognito).claims;

  const { getAnlagenUser } = await client.request({
    query: GetAnlagenUserDocument,
    variables: {
      userEmail: email,
      anlageId,
    },
  });

  console.log(`getAnlagenUser=${JSON.stringify(getAnlagenUser)}`);

  // user isn't associated to anlage
  if (!getAnlagenUser) {
    return;
  }

  const { updateUser } = await client.request({
    query: UpdateUserDocument,
    variables: {
      input: {
        email,
        currentAnlageId: anlageId,
      },
    },
  });

  console.log(`updateUser=${JSON.stringify(updateUser)}`);

  return updateUser;
}
