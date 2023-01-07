import { Auth } from '@aws-amplify/auth';
// import { ICredentials } from '@aws-amplify/core';
import { useAuthenticator } from '@aws-amplify/ui-react';
// import { Provider } from '@aws-sdk/types';
import { CognitoUser } from 'amazon-cognito-identity-js';
// import { Amplify } from 'aws-amplify';
import React, { ReactNode, useContext, useEffect, useState } from 'react';

import SignInSignUp from '../components/SignInSignUp';
// import { AccountType } from '../constants';
import { Role } from '../lib/api';
import { API } from '../lib/fetcher';

interface AuthValue {
  // accountType: AccountType;
  role: Role;
  // credentials: ICredentials;
  // getIdToken: Provider<string>;
  signOut: (data?: Record<string | number | symbol, any>) => void;
  user: ReturnType<typeof useAuthenticator>['user'];
  currentAnlageId: string | undefined;
  refreshSession: () => Promise<void>;
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
  // const [credentials, setCredentials] = useState<{
  //   credentials: ICredentials;
  // getIdToken: Provider<string>;
  // authToken: string;
  // }>();

  const [role, setRole] = useState<string | undefined>();
  const [currentAnlageId, setCurrentAnlageId] = useState<string | undefined>();

  const refreshSession = async () => {
    console.log('Refreshing session');
    const cognitoUser = (await Auth.currentAuthenticatedUser()) as CognitoUser;
    const currentSession = cognitoUser.getSignInUserSession();

    if (!currentSession) return;
    const refreshToken = currentSession.getRefreshToken();
    return new Promise<void>((resolve) => {
      cognitoUser.refreshSession(refreshToken, async (_err, session) => {
        API.updateAuthToken(
          (await Auth.currentSession()).getIdToken().getJwtToken(),
        );
        resolve(session.getIdToken().getJwtToken());
      });
    });

    // cognitoUser.refreshSession(refreshToken, async (_err, _session) => {
    //   console.log('session refreshed!');
    //   API.updateAuthToken(
    //     (await Auth.currentSession()).getIdToken().getJwtToken(),
    //   );
    //   if (callback) callback();
    // });
  };

  useEffect(() => {
    console.debug('AuthProvider authenticated');
    if (route === 'authenticated') {
      void (async () => {
        const idToken = (await Auth.currentSession()).getIdToken();
        const payload = idToken.payload;
        const jwtToken = idToken.getJwtToken();
        console.log(payload);
        // setCredentials({
        //   credentials: Auth.essentialCredentials(
        //     await Auth.currentCredentials(),
        //   ),
        // getIdToken: async (): Promise<string> => {
        //   return (await Auth.currentSession()).getIdToken().getJwtToken();
        // },
        // authToken: (await Auth.currentSession()).getIdToken().getJwtToken(),
        // });
        setRole(payload['cognito:groups'][0]);
        setCurrentAnlageId(payload.currentAnlageId);
        API.updateIsSignedIn(true);
        API.updateAuthToken(jwtToken);
      })();
    } else if (route === 'signOut') {
      // setCredentials(undefined);
      setRole(undefined);
      setCurrentAnlageId(undefined);
      API.updateIsSignedIn(false);
      API.updateAuthToken('');
    }
  }, [route]);

  if (route === 'authenticated' && role) {
    const value: AuthValue = {
      // accountType: user.attributes?.['custom:accountType'] as AccountType,
      role: Role[role as keyof typeof Role],
      currentAnlageId: currentAnlageId,
      // credentials: credentials.credentials,
      // getIdToken: credentials.getIdToken,
      signOut,
      user,
      refreshSession,
    };
    console.log(
      `AuthValue=${JSON.stringify({
        role: value.role,
        currentAnlageId: value.currentAnlageId,
      })}`,
    );
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  } else {
    API.updateIsSignedIn(false);
    return <SignInSignUp />;
  }
}
