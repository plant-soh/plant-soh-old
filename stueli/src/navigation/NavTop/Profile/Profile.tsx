import classNames from 'classnames';
// import avatar from '../../../assets/avatar.svg';
// import { usePresence} from "contexts/Presence"
// import { config } from "utils/configService"

const Profile = ({ name, role }: { name: string; role: string }) => {
  // const Presence = usePresence();
  // const presenceColors = {
  //   available: 'ring-green-500',
  //   'acd assigned': 'ring-red-500',
  //   'reload required': 'ring-red-500',
  // };
  // const presenceColor =
  //   presenceColors[Presence.name?.toLowerCase()] || 'ring-morange-500';
  return (
    <div className="px-4 my-auto">
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="flex-shrink-0">
          <span className="relative block">
            <div
              data-testid="ring"
              className={classNames([
                'absolute h-[56px] w-[56px] rounded-full z-20 ring-4',
              ])}
            ></div>
            <img
              alt="User Profile picture"
              src={`https://i.pravatar.cc/40?u=${name}`}
              className={classNames(
                'mx-auto rounded-full h-[56px] w-[56px] z-10',
              )}
              aria-labelledby="profile-username profile-role profile-picture"
            />
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span
            className="text-lg font-medium text-white"
            id="profile-username"
          >
            {name}
          </span>
          <span
            className="text-xs text-white lowercase first-letter:capitalize"
            id="profile-role"
          >
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
