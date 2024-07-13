import { FC, PropsWithChildren } from 'react';
import { ItemHeading } from './ItemHeading';
import { ItemProps } from '../types/Experience';

const Item: FC<PropsWithChildren<ItemProps>> = ({
  title,
  period,
  description: activities,
}) => {
  return (
    <div>
      <ItemHeading>{title}</ItemHeading>
      {period && <p className="text-sm font-light">{period}</p>}
      <ul className="list-disc pl-5 pt-4">
        {activities.map((activity, index: number) => (
          <li key={`${title}-${index}`}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
