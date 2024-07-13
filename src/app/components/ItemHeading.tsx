import { FC, PropsWithChildren } from 'react';

export const ItemHeading: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="font-bold text-lg">{children}</h2>;
};
