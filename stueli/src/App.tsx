// import {
import { Amplify } from 'aws-amplify';
import './App.css';

// import ReactGA from 'react-ga';
import { Authenticator } from '@aws-amplify/ui-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import MainRouter from './navigation/MainRouter';
import AuthProvider from './providers/AuthProvider';
import ModalProvider from './providers/ModalProvider';
import RuntimeProvider from './providers/RuntimeProvider';
import { SuggestionProvider } from './providers/SuggestionProvider';

const queryClient = new QueryClient();

/**
 * Return the routes for the application.
 * @returns {JSX.Element} App component
 */
function App() {
  const [runtimeContext, setRuntimeContext] = useState<any>(undefined);
  const [isAmplifyConfigured, setIsAmplifyConfigured] = useState(false);

  useEffect(() => {
    // console.debug('feth runtime');
    fetch('/runtime-config.json')
      .then((response) => {
        return response.json();
      })
      .then((runtimeCtx) => {
        // console.log(`cleanRuntimeContext=${JSON.stringify(runtimeCtx)}`);
        if (
          runtimeCtx.stage &&
          runtimeCtx.region &&
          runtimeCtx.identityPoolId &&
          runtimeCtx.userPoolId &&
          runtimeCtx.userPoolWebClientId &&
          runtimeCtx.appSyncGraphqlEndpoint
        ) {
          console.debug('setRuntimeContext');
          setRuntimeContext(runtimeCtx);
        } else {
          console.warn('runtime-config.json misses property');
        }
      })
      .catch(() => {
        console.log('No runtime-config.json detected');
        setRuntimeContext({});
      });
  }, []);

  useEffect(() => {
    if (!runtimeContext) return;
    // console.info('AuthProvider');
    // console.info(`runtimeContext=${JSON.stringify(runtimeContext)}`);

    const {
      region,
      userPoolId,
      userPoolWebClientId,
      identityPoolId,
      appSyncGraphqlEndpoint,
    } = runtimeContext;

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

    setIsAmplifyConfigured(true);
  }, [runtimeContext]);

  if (!runtimeContext || !isAmplifyConfigured) return <div>Loading...</div>;

  // console.info('Amplify configured');
  return (
    // <ApolloProvider client={client}>
    <QueryClientProvider client={queryClient}>
      <Authenticator.Provider>
        <RuntimeProvider runtimeContext={runtimeContext}>
          <AuthProvider>
            <ModalProvider>
              <SuggestionProvider>
                <MainRouter />
              </SuggestionProvider>
            </ModalProvider>
          </AuthProvider>{' '}
        </RuntimeProvider>
      </Authenticator.Provider>
    </QueryClientProvider>
  );
}

export default App;
