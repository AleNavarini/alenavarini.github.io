// ContactInformationSection.tsx

import React from 'react';
import { contactInformation } from '../../data';
import { Card } from '../Card';
import Item from '../Item';

const ContactInformationSection: React.FC = () => (
  <Card>
    {contactInformation.map((contact) => (
      <Item
        key={contact.title}
        title={contact.title}
        period={contact.period}
        description={contact.description}
      />
    ))}
  </Card>
);

export default ContactInformationSection;
