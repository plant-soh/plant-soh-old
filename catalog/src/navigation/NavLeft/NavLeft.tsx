import { ReactComponent as UphealthLogo } from '../../assets/UpHealth_logo_white.svg';
// import NavLeftLink from './Link';

const NavLeft = ({ className }: { className: string }) => {
  // const { signOut } = useAuth();

  return (
    <nav
      data-testid="nav-left"
      className={'flex flex-col bg-bblue-200 text-left ' + className}
      role="navigation"
      id="navigation"
    >
      {/* <NavLeftLink name={'home'} to="/" icon="IoHomeOutline">
        Home
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
        noTransition={true}
      >
        Log Out
      </NavLeftLink> */}
      <div>
        <UphealthLogo className="h-6 mx-auto py-1" />
        <p className="text-bblue-450 text-center text-min pb-4">
          Powered by UpHealth
          <br />© UpHealth {new Date().getFullYear()}.<br />
          All Rights Reserved.
        </p>
      </div>
    </nav>
  );
};

export default NavLeft;
