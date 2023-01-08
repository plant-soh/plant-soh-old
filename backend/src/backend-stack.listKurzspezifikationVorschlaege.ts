// import AppsyncClient from 'appsync-client';

import AppsyncClient from 'appsync-client';
import * as lambda from 'aws-lambda';
import { AppSyncIdentityCognito } from 'aws-lambda';
import { firstBy } from 'thenby';
import {
  GetAnlagenUserDocument,
  ListKurzspezifikationVorschlaegeInput,
  ReferenzStueliByKurzspezifikationDocument,
} from '../../stueli/src/lib/api';

const { APPSYNC_URL } = process.env;

const client = new AppsyncClient({ apiUrl: APPSYNC_URL });

export async function handler(
  event: lambda.AppSyncResolverEvent<{
    input: ListKurzspezifikationVorschlaegeInput;
  }>,
): Promise<string[] | null | undefined> {
  console.debug(`event: ${JSON.stringify(event)}`);

  const { anlageId = '' } = event.arguments.input;

  console.log('Checking permission');
  if ((event.identity as any).defaultAuthStrategy) {
    console.log('Invoked with cognito user identity');
    const { email } = (event.identity as AppSyncIdentityCognito).claims;

    // check if user is allowed to query anlage
    const { getAnlagenUser } = await client.request({
      query: GetAnlagenUserDocument,
      variables: {
        userEmail: email,
        anlageId,
      },
    });

    console.log(`getAnlagenUser=${JSON.stringify(getAnlagenUser)}`);

    if (!getAnlagenUser) {
      throw new Error('User not allowed');
    }
  } else if ((event.identity as any).accountId) {
    console.log('Invoked with iam identity');
  } else {
    throw new Error('Not allowed AppSync identity!');
  }

  var allowedQueries = 30;

  const unsortedCountMap = new Map<string, number>();
  var nextToken: string | undefined;

  while (allowedQueries > 0) {
    console.log(`allowedQueries=${allowedQueries}`);

    const { referenzStueliByKurzspezifikation } = await client.request({
      query: ReferenzStueliByKurzspezifikationDocument,
      variables: {
        anlageId,
        nextToken,
      },
    });

    nextToken = referenzStueliByKurzspezifikation?.nextToken ?? undefined;
    console.log(`nextToken=${nextToken}`);

    console.log(
      `referenzStueliByKurzspezifikation.length=${JSON.stringify(
        referenzStueliByKurzspezifikation?.items?.length,
      )}`,
    );

    referenzStueliByKurzspezifikation?.items?.map((stueck) => {
      const kurzspezifikation = stueck?.kurzspezifikation ?? '';
      const stueckCount = unsortedCountMap.get(kurzspezifikation) ?? 1;
      unsortedCountMap.set(kurzspezifikation, stueckCount + 1);
    });

    if (!nextToken) break;

    allowedQueries -= 1;
  }

  // sort with count kurzspezifikation desc
  // const sortedCountMap = [...unsortedCountMap.entries()].sort((a, b) => {
  //   return b[1] - a[1];
  // });

  // sort with count kurzspezifikation desc then by kurzspezifikation name
  const sortedCountMap = [...unsortedCountMap.entries()].sort(
    firstBy<[string, number]>((a, b) => b[1] - a[1]).thenBy((a, b) =>
      a[0].localeCompare(b[0]),
    ),
  );

  return sortedCountMap.map((stueck) => stueck[0]);
}
