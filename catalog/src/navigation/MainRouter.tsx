/* istanbul ignore file */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../screens/Home';
import NavigationLayout from './NavigationLayout';

const MainRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
