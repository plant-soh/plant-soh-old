import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
import {
  CreateUserDocument,
  GetUserDocument,
  Role,
} from './../../stueli/src/lib/api';

const { APPSYNC_URL } = process.env;

const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

/**
 * https://www.npmjs.com/package/appsync-client
 * Example lambda even here: file://./../test/preTokenGenerationTriggerEvent.json
 * @param event
 */
export async function handler(event: lambda.PreTokenGenerationTriggerEvent) {
  console.debug(`event: ${JSON.stringify(event)}`);

  const { getUser } = await client.request({
    query: GetUserDocument,
    variables: {
      email: event.request.userAttributes.email,
    },
  });

  console.debug(`getUser=${JSON.stringify(getUser ?? {})}`);

  if (!getUser) {
    console.log('User does not exist in table so will create one');
    const { createUser } = await client.request({
      query: CreateUserDocument,
      variables: {
        input: {
          email: event.request.userAttributes.email,
          role: Role.Anlagenbetreiber,
        },
      },
    });

    console.debug(`createUser=${JSON.stringify(createUser)}`);
  }

  event.response.claimsOverrideDetails = {
    claimsToAddOrOverride: {
      ...(getUser?.currentAnlageId
        ? { currentAnlageId: getUser.currentAnlageId }
        : {}),
      ...(getUser?.currentProjektId
        ? { currentProjektId: getUser.currentProjektId }
        : {}),
    },
    groupOverrideDetails: {
      groupsToOverride: [getUser?.role ?? Role.Anlagenbauer],
    },
  };

  console.debug(
    `event.response.claimsOverrideDetails=${JSON.stringify(
      event.response.claimsOverrideDetails,
    )}`,
  );

  return event;
}
