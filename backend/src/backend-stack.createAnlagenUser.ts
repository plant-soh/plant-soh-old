// import AppsyncClient from 'appsync-client';

import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
import {
  AnlagenUser,
  CreateAnlagenUserDocument,
  CreateAnlagenUserInput,
  GetAnlageDocument,
  GetAnlagenUserDocument,
  GetUserDocument,
  UpdateAnlageDocument,
} from '../../stueli/src/lib/api';

const { APPSYNC_URL } = process.env;
const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

export async function handler(
  event: lambda.AppSyncResolverEvent<{ input: CreateAnlagenUserInput }>,
): Promise<AnlagenUser | null | undefined> {
  console.debug(`event: ${JSON.stringify(event)}`);

  const { anlageId, userEmail } = event.arguments.input;

  const { getAnlage } = await client.request({
    query: GetAnlageDocument,
    variables: {
      id: anlageId,
    },
  });

  if (!getAnlage) {
    throw new Error('could not find anlage with id ' + anlageId);
  }

  console.log(`getAnlage=${JSON.stringify(getAnlage)}`);

  const { getUser } = await client.request({
    query: GetUserDocument,
    variables: {
      email: userEmail,
    },
  });

  if (!getUser) {
    throw new Error('could not find user with email ' + userEmail);
  }

  console.log(`getUser=${JSON.stringify(getUser)}`);

  const { createAnlagenUser } = await client.request({
    query: CreateAnlagenUserDocument,
    variables: {
      input: {
        anlageId: anlageId,
        userEmail: userEmail,
      },
    },
  });

  console.log(`createAnlagenUser=${JSON.stringify(createAnlagenUser)}`);

  const { updateAnlage } = await client.request({
    query: UpdateAnlageDocument,
    variables: {
      input: {
        id: anlageId,
        // deduplicate
        // users: Array.from(new Set([...(getAnlage.users ?? []), userEmail])),
      },
    },
  });

  console.log(`updateAnlage=${JSON.stringify(updateAnlage)}`);

  // getAnlage.

  // const { updateProjekt } = await client.request({
  //   query: UpdateProjektDocument,
  //   variables: {
  //     input: {
  //       anlageId: anlageId,
  //       // deduplicate
  //       users: Array.from(new Set([...(getAnlage.users ?? []), userEmail])),
  //     },
  //   },
  // });

  console.log(`updateAnlage=${JSON.stringify(updateAnlage)}`);

  const getAnlagenUserUpdated = await client.request({
    query: GetAnlagenUserDocument,
    variables: {
      anlageId: anlageId,
      userEmail: userEmail,
    },
  });

  console.log(
    `getAnlagenUser=${JSON.stringify(getAnlagenUserUpdated.getAnlagenUser)}`,
  );

  return getAnlagenUserUpdated.getAnlagenUser;
}
