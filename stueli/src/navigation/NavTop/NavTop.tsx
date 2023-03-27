import { ReactComponent as PlantSohLogo } from '../../assets/logo_black.svg';
import { useAuth } from '../../providers/AuthProvider';
import './NavTop.scss';
import Profile from './Profile';

const NavTop = ({ className }: { className: string }) => {
  const { user, role } = useAuth();

  return (
    <header
      data-testid="nav-top"
      className={`flex-row nav-top__container ${className}`}
      role="banner"
    >
      <div className="flex w-48">
        <PlantSohLogo aria-label="PlantSoh Agent" className="h-full pl-2" />
      </div>
      <div className="flex flex-grow"></div>
      <Profile name={`${user.attributes?.email ?? 'No Email'}`} role={role} />
    </header>
  );
};

export default NavTop;
