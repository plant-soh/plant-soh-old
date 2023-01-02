import { ReactComponent as MarttiLogo } from '../../assets/martti_logo_white.svg';
import { useAuth } from '../../providers/AuthProvider';
import './NavTop.scss';
import Profile from './Profile';

const NavTop = ({ className }: { className: string }) => {
  const { accountType, user } = useAuth();

  return (
    <header
      data-testid="nav-top"
      className={`flex-row nav-top__container ${className}`}
      role="banner"
    >
      <div className="flex w-48">
        <MarttiLogo aria-label="Martti Agent" className="h-full p-3 pb-0" />
      </div>
      <div className="flex flex-grow"></div>
      <Profile
        name={`${user.attributes?.name ?? 'No Name'}`}
        role={accountType}
      />
    </header>
  );
};

export default NavTop;
