// data.ts

import Link from 'next/link';
import { ItemProps } from './types/Experience';

export const experiences: Array<ItemProps> = [
  {
    title: 'Senior Backend Engineer - AgileEngine',
    period: 'Oct. 2022 - Present',
    description: [
      'Developed and maintained backend applications using FastAPI, Django, and Flask, delivering high-performance, scalable, and reliable solutions.',
      'Implemented Machine Learning features, including Neural Networks and Retrieval-Augmented Generation (RAG) with Large Language Models (LLMs), to significantly enhance product capabilities and user experience.',
      'Collaborated with stakeholders to align project milestones with business objectives, ensuring seamless communication and successful execution throughout the development cycle.',
      'Conducted technical interviews to assess engineering candidates, playing a key role in building a high-caliber team.',
    ],
  },
  {
    title: 'FullStack Developer - Mutual de Socios de AMR',
    period: 'Jan. 2021 - Oct. 2022',
    description: [
      'Developed and maintained robust full-stack applications using .NET Core for backend and Next.js for frontend, optimizing performance with both SQL and NoSQL databases.',
      'Configured and managed CI/CD pipelines, implementing Docker and Kubernetes for containerization and orchestration, reducing deployment times and improving system reliability.',
      'Collaborated effectively with team members and stakeholders, consistently delivering high-quality solutions that contributed to project success.',
    ],
  },
  {
    title: 'Backend Developer - KRETZ SA',
    period: 'Dec. 2019 - Jul. 2020',
    description: [
      'Maintained and developed software for Kretz S.A. using Java, GitLab, Ionic, HTML, and CSS, ensuring code quality and system stability.',
      'Collaborated with the team to identify and resolve software issues, improving overall quality and reliability.',
      'Contributed to the design and implementation of new features, enhancing user experience and operational efficiency.',
    ],
  },
  {
    title: 'Web Developer - Freelance Contractor',
    period: 'Jan. 2019 - Jul. 2019',
    description: [
      'Developed a web application for a medical blog using Python with Django, a SQL database, and frontend technologies.',
      'Efficiently managed the deployment process, ensuring the application operated seamlessly and reliably.',
    ],
  },
];

export const education: Array<ItemProps> = [
  {
    title: 'Information Systems Engineering',
    period: '2017 - 2023',
    description: [
      'Information Systems Engineer. Universidad Tecnológica Nacional FRRO.',
    ],
  },
];

export const contactInformation: Array<ItemProps> = [
  {
    title: 'Contact Information',
    description: [
      'Location: Rosario, Santa Fe, Argentina',
      <Link
        key={'EmailLink'}
        className="text-blue-500 hover:underline hover:underline-offset-2"
        href={'mailto:alejandronavarini@gmail.com'}
      >
        Email
      </Link>,
      <Link
        key={'LinkedInLink'}
        className="text-blue-500 hover:underline hover:underline-offset-2"
        href={'https://www.linkedin.com/in/alejandronavarini'}
      >
        LinkedIn
      </Link>,
    ],
  },
];

export const languages: Array<ItemProps> = [
  {
    title: 'Languages',
    description: [
      'Spanish: Native',
      'English: C1 (certified)',
      'German: B1 (certified)',
      'Portuguese: Basic',
      'French: Basic',
    ],
  },
];

export const stack: Array<ItemProps> = [
  {
    title: 'Tech Stack',
    description: [
      'Python, FastAPI, Django, Flask',
      'LLMs, RAG, AI/ML',
      'Next.js, React, TypeScript',
      'AWS, Terraform',
      'Docker, Kubernetes, CI/CD, GitOps',
    ],
  },
];
