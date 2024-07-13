import { FC, PropsWithChildren } from 'react';

export const SubHeading: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="font-bold text-xl">{children}</h2>;
};
