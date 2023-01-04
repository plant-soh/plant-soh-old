// import AppsyncClient from 'appsync-client';

import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
import {
  Anlage,
  DeleteAnlageDocument,
  DeleteAnlageInput,
  DeleteAnlagenUserDocument,
} from '../../stueli/src/lib/api';

const { APPSYNC_URL } = process.env;

const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

export async function handler(
  event: lambda.AppSyncResolverEvent<{ input: DeleteAnlageInput }>,
): Promise<Anlage | null | undefined> {
  console.debug(`event: ${JSON.stringify(event)}`);

  const { anlageId } = event.arguments.input;

  const { deleteAnlage } = await client.request({
    query: DeleteAnlageDocument,
    variables: {
      input: {
        anlageId: anlageId,
      },
    },
  });

  console.log(`deleteAnlage=${JSON.stringify(deleteAnlage)}`);

  if (!deleteAnlage) {
    throw new Error('Anlage not found');
  }

  // delete Anlagen Users if exist
  if (deleteAnlage.anlagenUsers?.items) {
    await Promise.all(
      deleteAnlage.anlagenUsers.items?.map(async (anlagenUser) => {
        const { deleteAnlagenUser } = await client.request({
          query: DeleteAnlagenUserDocument,
          variables: {
            input: {
              anlageId: anlagenUser?.anlageId ?? '',
              userEmail: anlagenUser?.userEmail ?? '',
            },
          },
        });
        console.log(`deleteAnlagenUser=${JSON.stringify(deleteAnlagenUser)}`);
      }),
    );
  }

  return deleteAnlage;
}
