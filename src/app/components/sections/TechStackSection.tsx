import React from 'react';
import { stack } from '../../data';
import { Card } from '../Card';
import Item from '../Item';

const TechStackSection: React.FC = () => (
  <Card>
    {stack.map((stackItem) => (
      <Item
        key={stackItem.title}
        title={stackItem.title}
        period={stackItem.period}
        description={stackItem.description}
      />
    ))}
  </Card>
);

export default TechStackSection;
