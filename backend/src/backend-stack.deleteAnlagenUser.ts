// import AppsyncClient from 'appsync-client';

import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
import {
  AnlagenUser,
  DeleteAnlagenUserDocument,
  DeleteAnlagenUserInput,
  GetAnlagenUserDocument,
} from '../../stueli/src/lib/api';

const { APPSYNC_URL } = process.env;

const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

export async function handler(
  event: lambda.AppSyncResolverEvent<{ input: DeleteAnlagenUserInput }>,
): Promise<AnlagenUser | null | undefined> {
  console.debug(`event: ${JSON.stringify(event)}`);

  const { anlageId, userEmail } = event.arguments.input;

  const { deleteAnlagenUser } = await client.request({
    query: DeleteAnlagenUserDocument,
    variables: {
      input: {
        anlageId: anlageId,
        userEmail: userEmail,
      },
    },
  });

  console.log(`deleteAnlagenUser=${JSON.stringify(deleteAnlagenUser)}`);

  // const { updateAnlage } = await client.request({
  //   query: UpdateAnlageDocument,
  //   variables: {
  //     input: {
  //       id: anlageId,
  //       // deduplicate
  //       users: [
  //         ...(deleteAnlagenUser?.anlage.users ?? []).filter(
  //           (email) => email !== userEmail,
  //         ),
  //       ],
  //     },
  //   },
  // });

  // console.log(`updateAnlage=${JSON.stringify(updateAnlage)}`);

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
