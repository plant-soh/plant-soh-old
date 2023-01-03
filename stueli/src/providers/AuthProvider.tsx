import { Auth } from '@aws-amplify/auth';
import { ICredentials } from '@aws-amplify/core';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Provider } from '@aws-sdk/types';
// import { Amplify } from 'aws-amplify';
import React, { ReactNode, useContext, useEffect, useState } from 'react';

import SignInSignUp from '../components/SignInSignUp';
// import { AccountType } from '../constants';
import { Role } from '../lib/api';
import { API } from '../lib/fetcher';

interface AuthValue {
  // accountType: AccountType;
  role: Role;
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
    authToken: string;
  }>();

  const [role, setRole] = useState<string | undefined>();

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
          authToken: (await Auth.currentSession()).getIdToken().getJwtToken(),
        });
        setRole(
          (await Auth.currentSession()).getIdToken().payload[
            'cognito:groups'
          ][0],
        );
      })();
    } else if (route === 'signOut') {
      setCredentials(undefined);
      setRole(undefined);
    }
  }, [route]);

  if (route === 'authenticated' && credentials && role) {
    API.updateIsSignedIn(true);
    API.updateAuthToken(credentials.authToken);
    const value: AuthValue = {
      // accountType: user.attributes?.['custom:accountType'] as AccountType,
      role: Role[role as keyof typeof Role],
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
