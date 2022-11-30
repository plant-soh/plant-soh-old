import { Auth } from '@aws-amplify/auth';
import { ICredentials } from '@aws-amplify/core';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Provider } from '@aws-sdk/types';
// import { Amplify } from 'aws-amplify';
import React, { ReactNode, useContext, useEffect, useState } from 'react';

import SignInSignUp from '../components/SignInSignUp';
import { AccountType } from '../constants';
import { API } from '../lib/fetcher';

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
