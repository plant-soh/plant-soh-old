import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
import * as AWS from 'aws-sdk';
import {
  ListReferenzStuelisDocument,
  ProjektStueli,
  UpdateProjektStueliDocument,
} from '../../stueli/src/lib/api';

const { APPSYNC_URL } = process.env;
const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

export async function handler(
  event: lambda.DynamoDBStreamEvent,
  context: lambda.Context,
) {
  console.debug(`event: ${JSON.stringify(event)}`);
  console.debug(`context: ${JSON.stringify(context)}`);
  const accountId = context.invokedFunctionArn.split(':')[4];
  console.debug(`accountId: ${accountId}`);

  await Promise.all(
    event.Records.map(async (record) => {
      let newImage: ProjektStueli | undefined = undefined;
      if (record.dynamodb?.NewImage) {
        newImage = AWS.DynamoDB.Converter.unmarshall(
          record.dynamodb.NewImage,
        ) as ProjektStueli;
      } else {
        console.log('no NewImage existing');
        return;
      }

      let allowedQueries = 30;

      let nextToken: string | undefined;

      let bmkFound = false;

      // check Referenz Stueli
      while (allowedQueries > 0) {
        console.log(`allowedQueries=${allowedQueries}`);

        const { listReferenzStuelis } = await client.request({
          query: ListReferenzStuelisDocument,
          variables: {
            nextToken: nextToken,
          },
        });

        nextToken = listReferenzStuelis?.nextToken ?? undefined;
        console.log(`nextToken=${nextToken}`);

        console.log(
          `listReferenzStuelis.length=${JSON.stringify(
            listReferenzStuelis?.items?.length,
          )}`,
        );

        for (const stueck of listReferenzStuelis?.items ?? []) {
          if (stueck?.bmk?.toLowerCase() === newImage?.bmk?.toLowerCase()) {
            bmkFound = true;
            break;
          }
        }

        if (!nextToken) break;

        allowedQueries -= 1;
      }

      // check Projekt Stueli
      // allowedQueries = 30;
      // let nextToken2: string | undefined;
      // while (allowedQueries > 0) {
      //   console.log(`allowedQueries=${allowedQueries}`);

      //   const { projektStueliByKurzspezifikation } = await client.request({
      //     query: ProjektStueliByKurzspezifikationDocument,
      //     variables: {
      //       projektId: newImage?.projektId,
      //       nextToken: nextToken2,
      //     },
      //   });

      //   nextToken2 = projektStueliByKurzspezifikation?.nextToken ?? undefined;
      //   console.log(`nextToken2=${nextToken2}`);

      //   console.log(
      //     `listProjektStuelis.length=${JSON.stringify(
      //       projektStueliByKurzspezifikation?.items?.length,
      //     )}`,
      //   );

      //   for (const stueck of projektStueliByKurzspezifikation?.items ?? []) {
      //     if (stueck?.bmk?.toLowerCase() === newImage?.bmk?.toLowerCase()) {
      //       bmkFound = true;
      //       break;
      //     }
      //   }

      //   if (!nextToken) break;

      //   allowedQueries -= 1;
      // }

      console.log(`bmkFound=${bmkFound}`);

      if (bmkFound) {
        const { updateProjektStueli } = await client.request({
          query: UpdateProjektStueliDocument,
          variables: {
            input: {
              id: newImage?.id ?? '',
              bmkDouble: true,
            },
          },
        });

        console.log(`updateProjektStueli=${updateProjektStueli}`);
      }
    }),
  );
}
