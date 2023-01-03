/* istanbul ignore file */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Role } from '../lib/api';
import { useAuth } from '../providers/AuthProvider';

import Home from '../screens/Home';
import Kunde from '../screens/Kunde';
import KundeUser from '../screens/KundeUser';
import NavigationLayout from './NavigationLayout';

const MainRouter = () => {
  const { role } = useAuth();
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<Home />} />
          <Route path="/kunde" element={<Kunde />} />
          {role === Role.Admin && (
            <Route path="/kundeuser" index element={<KundeUser />} />
          )}
        </Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
