/* istanbul ignore file */
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../containers/ErrorBoundary';
import { Role } from '../lib/api';
import ErrorPage from '../screens/ErrorScreen';

import { useAuth } from '../providers/AuthProvider';

const Home = lazy(() => import('../screens/Home'));
const Projekte = lazy(() => import('../screens/Projekte'));
const ProjektStueckliste = lazy(() => import('../screens/ProjektStueckliste'));
const Kunde = lazy(() => import('../screens/Kunden'));
const KundeUser = lazy(() => import('../screens/KundeUser'));
const ReferenzStueckliste = lazy(
  () => import('../screens/ReferenzStueckliste'),
);
const NavigationLayout = lazy(() => import('../navigation/NavigationLayout'));

const withSuspense = (Component: any) => {
  return (
    <Suspense fallback={<div></div>}>
      <Component />
    </Suspense>
  );
};

const MainRouter = () => {
  const { role } = useAuth();
  return (
    <BrowserRouter>
      <ErrorBoundary showScreen>
        <Routes>
          <Route path="/" element={withSuspense(NavigationLayout)}>
            <Route index element={withSuspense(Home)} />
            <Route path="kunden" element={withSuspense(Kunde)} />
            <Route
              path="kunden/:id"
              element={withSuspense(ReferenzStueckliste)}
            />
            <Route path="projekte" element={withSuspense(Projekte)} />

            <Route
              path="projekte/:projektId"
              element={withSuspense(ProjektStueckliste)}
            />
            <Route
              path="projekte/:projektId/record/:recordId"
              element={withSuspense(ProjektStueckliste)}
            />
            {role === Role.Admin && (
              <Route path="/kundeuser" element={withSuspense(KundeUser)} />
            )}
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default MainRouter;
