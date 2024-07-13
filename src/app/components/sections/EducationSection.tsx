// EducationSection.tsx

import React from 'react';
import { education } from '../../data';
import { SubHeading } from '../SubHeading';
import { Card } from '../Card';
import Item from '../Item';

const EducationSection: React.FC = () => (
  <Card className="flex flex-col gap-4 ">
    <SubHeading>Education</SubHeading>
    {education.map((edu) => (
      <Item
        key={edu.title}
        title={edu.title}
        period={edu.period}
        description={edu.description}
      />
    ))}
  </Card>
);

export default EducationSection;
