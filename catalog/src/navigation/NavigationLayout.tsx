import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import Container from '../components/Container/Container';
import NavLeft from './NavLeft';
import NavTop from './NavTop';

const NavigationLayout = () => {
  return (
    <div>
      <div
        className={classNames(
          'min-h-screen',
          'max-w-screen',
          'flex',
          'flex-col',
        )}
      >
        <NavTop data-testid="nav-top" className="flex h-[80px] max-w-screen" />
        <div className="w-full flex flex-grow flex-row">
          <NavLeft
            data-testid={'nav-left'}
            className="w-[108px] md:min-w-[108px]"
          />
          <main
            data-testid="body-pane"
            className="flex flex-col flex-grow bg-bblue-50 min-h-[680px]"
            role="main"
            id="main"
          >
            <Container
              name="content-container"
              className="w-full h-0 flex-grow"
            >
              <Outlet />
            </Container>
            <div
              className="
                flex
                text-tiny text-bblue-350 font-semibold uppercase
                justify-start pb-4 pl-6
              "
            >
              v444 | plant-soh {new Date().getFullYear()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
