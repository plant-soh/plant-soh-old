import cs from 'classnames';
import { ReactNode } from 'react';
import { Link as BaseLink } from 'react-router-dom';

const Link = ({
  name,
  to,
  onClick,
  className,
  children,
  ...rest
}: {
  name: string;
  to: string;
  onClick?: any;
  className?: string;
  children?: ReactNode;
}) => {
  const parsedLink = to.startsWith('/') ? to : `/${to}`;
  return (
    <BaseLink
      {...rest}
      to={parsedLink}
      data-testid={`link-${name}`}
      onClick={onClick}
      className={cs(className)}
    >
      {children}
    </BaseLink>
  );
};

export default Link;
