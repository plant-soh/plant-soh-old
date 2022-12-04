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
    <div className="block">
      <Header color="white" />
      <div
        className={`${
          isMobile ? 'pt-26' : 'pt-32'
        } flex flex-row bg-black justify-center`}
      >
        <Introduction />
      </div>
      <div className={`${isMobile ? 'pt-2' : 'pt-4'} bg-white`}>
        <Benefits benefits={BENEFITS} />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
