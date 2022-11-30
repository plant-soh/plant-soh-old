import cs from 'classnames';
import { useEffect, useState } from 'react';
import { ReactComponent as MarttiLogo } from '../../assets/martti_logo_white.svg';
// import './NavTop.scss';
import Profile from './Profile';

const NavTop = ({ className }: { className: string }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');

  const { profile } = {
    profile: { firstName: 'Martin', lastName: 'Mueller', role: 'Hero' },
  };

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName || '');
      setLastName(profile.lastName || '');
      setRole(profile.role || '');
    }
  }, [profile]);

  return (
    <header
      data-testid="nav-top"
      className={cs('flex-row nav-top__container', className)}
      role="banner"
    >
      <div className="flex w-48">
        <MarttiLogo aria-label="Martti Agent" className="h-full p-3 pb-0" />
      </div>
      <div className="flex flex-grow"></div>
      <div className="pr-5 flex my-auto flex-col items-start">
        <label htmlFor="queue-status" className="sr-only">
          Queue Status.
        </label>
      </div>
      <Profile name={`${firstName} ${lastName}`} role={role} />
    </header>
  );
};

export default NavTop;
