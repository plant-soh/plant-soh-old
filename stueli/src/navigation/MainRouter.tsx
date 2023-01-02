/* istanbul ignore file */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../screens/Home';
import Kunde from '../screens/Kunde';
import KundeUser from '../screens/KundeUser';
import NavigationLayout from './NavigationLayout';

const MainRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<Home />} />
          <Route path="/kunde" element={<Kunde />} />
          <Route path="/kundeuser" index element={<KundeUser />} />
        </Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
