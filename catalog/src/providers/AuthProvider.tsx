import { Auth } from '@aws-amplify/auth';
import { ICredentials } from '@aws-amplify/core';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Provider } from '@aws-sdk/types';
import { Amplify } from 'aws-amplify';
import React, { ReactNode, useContext, useEffect, useState } from 'react';

import SignInSignUp from '../components/SignInSignUp';
import { AccountType } from '../constants';
import { API } from '../lib/fetcher';
import { useRuntime } from './RuntimeProvider';

interface AuthValue {
  accountType: AccountType;
  credentials: ICredentials;
  getIdToken: Provider<string>;
  signOut: (data?: Record<string | number | symbol, any>) => void;
  user: ReturnType<typeof useAuthenticator>['user'];
}

const AuthContext = React.createContext<AuthValue | undefined>(undefined);

export function useAuth(): AuthValue {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return value;
}

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { route, user, signOut } = useAuthenticator((context) => [
    context.route,
  ]);
  const [credentials, setCredentials] = useState<{
    credentials: ICredentials;
    getIdToken: Provider<string>;
  }>();

  const runtimeContext = useRuntime();

  const {
    region,
    userPoolId,
    userPoolWebClientId,
    identityPoolId,
    appSyncGraphqlEndpoint,
  } = runtimeContext;

  useEffect(() => {
    console.debug('AuthProvider');
    console.debug(`runtimeContext=${JSON.stringify(runtimeContext)}`);

    Amplify.configure({
      aws_project_region: region,
      aws_cognito_identity_pool_id: identityPoolId,
      aws_cognito_region: region,
      aws_user_pools_id: userPoolId,
      aws_user_pools_web_client_id: userPoolWebClientId,
      aws_appsync_graphqlEndpoint: appSyncGraphqlEndpoint,
      aws_appsync_region: region,
      aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
      Auth: {
        identityPoolId: identityPoolId,
        region: region,
        identityPoolRegion: region,
        userPoolId: userPoolId,
        userPoolWebClientId: userPoolWebClientId,
      },
    });
  }, [runtimeContext]);

  useEffect(() => {
    console.debug('AuthProvider authenticated');
    if (route === 'authenticated') {
      void (async () => {
        setCredentials({
          credentials: Auth.essentialCredentials(
            await Auth.currentCredentials(),
          ),
          getIdToken: async (): Promise<string> => {
            return (await Auth.currentSession()).getIdToken().getJwtToken();
          },
        });
      })();
    } else if (route === 'signOut') {
      setCredentials(undefined);
    }
  }, [route]);

  if (route === 'authenticated' && credentials) {
    API.updateIsSignedIn(true);
    const value: AuthValue = {
      accountType: user.attributes?.['custom:accountType'] as AccountType,
      credentials: credentials.credentials,
      getIdToken: credentials.getIdToken,
      signOut,
      user,
    };
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  } else {
    API.updateIsSignedIn(false);
    return <SignInSignUp />;
  }
}
