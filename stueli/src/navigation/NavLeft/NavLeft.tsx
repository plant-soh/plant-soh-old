import { ReactComponent as UphealthLogo } from '../../assets/UpHealth_logo_white.svg';
import { useAuth } from '../../providers/AuthProvider';
import NavLeftLink from './Link';

const NavLeft = ({ className }: { className: string }) => {
  const { signOut } = useAuth();

  return (
    <nav
      data-testid="nav-left"
      className={'flex flex-col bg-bblue-200 text-left ' + className}
      role="navigation"
      id="navigation"
    >
      <NavLeftLink name={'home'} to="/" icon="IoHomeOutline">
        Home
      </NavLeftLink>

      <NavLeftLink name={'home'} to="/kunde" icon="IoHomeOutline">
        Kunde
      </NavLeftLink>

      <NavLeftLink name={'settings'} to="/settings" icon="IoSettingsOutline">
        Settings
      </NavLeftLink>
      <div className="flex-grow"></div>
      <NavLeftLink
        name={'logout'}
        to="/signIn"
        onClick={() => {
          signOut();
        }}
        icon="IoLogOutOutline"
        // noTransition={true}
      >
        Log Out
      </NavLeftLink>
      <div>
        <UphealthLogo className="h-6 py-1 mx-auto" />
        <p className="pb-4 text-center text-bblue-450 text-min">
          Powered by UpHealth
          <br />© UpHealth {new Date().getFullYear()}.<br />
          All Rights Reserved.
        </p>
      </div>
    </nav>
  );
};

export default NavLeft;
