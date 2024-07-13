import React, { FC, PropsWithChildren } from 'react';

interface CardProps {
  center?: boolean;
  className?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  center,
  className,
}) => {
  return (
    <div className={`bg-cardBgColor rounded-lg shadow-sm p-10 ${className}`}>
      {children}
    </div>
  );
};
