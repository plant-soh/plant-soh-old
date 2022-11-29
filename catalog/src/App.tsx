// import {
// import { Amplify } from 'aws-amplify';
import './App.css';

// import ReactGA from 'react-ga';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TeamCard from './components/team_card/TeamCard';

// import { ProtectedRoute } from './ProtectedRoute';
// import config from './shared/config';

// Amplify.configure(config);

const queryClient = new QueryClient();

// ReactGA.initialize(config.gaTrackingId);

// const httpLink = createHttpLink({
//   uri: config.aws_hasura_graphqlEndpoint,
// });

// const authLink = setContext(async (_, { headers }) => {
//   const token = (await Auth.currentSession()).getIdToken().getJwtToken();
//   if (!token) {
//     return headers;
//   }
//   return {
//     headers: {
//       ...headers,
//       Authorization: `Bearer ${token}`,
//     },
//   };
// });

/**
 * https://v4.mui.com/styles/advanced/#injectfirst
 *
 * We need to have the jss-insertion-point in order to have the styles have higher priority than the material ui styles.
 * Since we are still using styled-components, and Material-UI,
 * when we do styled(MaterialComponent), the MaterialComponent styles take precedence without this.
 *
 * <StylesProvider injectFirst>
 */

/**
 * Return the routes for the application.
 * @returns {JSX.Element} App component
 */
function App() {
  return (
    // <ApolloProvider client={client}>
    <QueryClientProvider client={queryClient}>
      <TeamCard />
    </QueryClientProvider>
  );
}

export default App;
