import { ReactNode } from 'react';

const Container = ({
  name,
  children,
  className,
}: // ...rest
{
  name: string;
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      // {...rest}
      data-testid={`container-${name}`}
      className={`flex ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
