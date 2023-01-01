// import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
// import { CreateUserDocument, GetUserDocument } from '../../stueli/src/lib/api';

// const { APPSYNC_URL } = process.env;

// const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

/**
 * https://www.npmjs.com/package/appsync-client
 * Example lambda even here: file://./../test/preTokenGenerationTriggerEvent.json
 * @param event
 */
export async function handler(event: lambda.PreTokenGenerationTriggerEvent) {
  console.debug(`event: ${JSON.stringify(event)}`);

  // const getUserData = await client.request({
  //   query: GetUserDocument,
  //   variables: {
  //     email: event.request.userAttributes.email,
  //   },
  // });

  // console.debug(`getUserData=${JSON.stringify(getUserData ?? {})}`);

  // const user = getUserData.getUser;

  // if (!user) {
  //   console.log('User does not exist in table so will create one');
  //   const createUserData = await client.request({
  //     query: CreateUserDocument,
  //     variables: {
  //       input: {
  //         email: event.request.userAttributes.email,
  //         phoneNumber: event.request.userAttributes.phone_number,
  //       },
  //     },
  //   });

  //   console.debug(`createUserData=${JSON.stringify(createUserData)}`);
  //   return;
  // }

  return event;
}
