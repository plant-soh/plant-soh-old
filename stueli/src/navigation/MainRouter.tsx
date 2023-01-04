/* istanbul ignore file */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Role } from '../lib/api';
import { useAuth } from '../providers/AuthProvider';

import Home from '../screens/Home';
import Kunde from '../screens/Kunde';
import KundeUser from '../screens/KundeUser';
import ReferenzStueli from '../screens/ReferenzStueckliste';
import NavigationLayout from './NavigationLayout';

const MainRouter = () => {
  const { role } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<Home />} />
          <Route path="kunde" element={<Kunde />} />
          <Route path="kunde/:id" element={<ReferenzStueli />} />
          {role === Role.Admin && (
            <Route path="/kundeuser" element={<KundeUser />} />
          )}
        </Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
