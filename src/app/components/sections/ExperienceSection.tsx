// ExperienceSection.tsx

import React from 'react';

import { Card } from '../Card';
import { SubHeading } from '../SubHeading';
import Item from '../Item';
import { experiences } from '../../data';

const ExperienceSection: React.FC = () => (
  <Card className="flex flex-col gap-4 ">
    <SubHeading>Experience</SubHeading>
    {experiences.map((experience) => (
      <Item
        key={experience.title}
        title={experience.title}
        period={experience.period}
        description={experience.description}
      />
    ))}
  </Card>
);

export default ExperienceSection;
