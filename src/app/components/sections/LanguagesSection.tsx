import React from 'react';
import { languages } from '../../data';
import { Card } from '../Card';
import Item from '../Item';

const LanguagesSection: React.FC = () => (
  <Card>
    {languages.map((language) => (
      <Item
        key={language.title}
        title={language.title}
        period={language.period}
        description={language.description}
      />
    ))}
  </Card>
);

export default LanguagesSection;
