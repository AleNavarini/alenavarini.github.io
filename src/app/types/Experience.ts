import { ReactNode } from 'react';

export type ItemProps = {
  title: string;
  period?: string;
  description: Array<ReactNode>;
};
