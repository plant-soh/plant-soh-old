import { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Benefits from '../../components/Landing/Benefits';
import Introduction from '../../components/Landing/Introduction';

import { BENEFITS } from '../../containers/Landing/constants';
import { useScreenSize } from '../../hooks/useScreenSize';

const Landing: FC = () => {
  const { isMobile } = useScreenSize();

  return (
    <div>
      <Header color="white" />
      <div
        className={`${
          isMobile ? 'md:px-20' : 'px-0'
        } flex bg-black justify-center`}
      >
        <Introduction />
      </div>
      <div className={`${isMobile ? 'md:px-20' : 'px-134'} bg-white`}>
        <Benefits benefits={BENEFITS} />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
