// data.ts

import Link from 'next/link';
import { ItemProps } from './types/Experience';

export const experiences: Array<ItemProps> = [
  {
    title: 'Senior Backend Engineer - AgileEngine',
    period: 'Oct. 2022 - Present',
    description: [
      'Optimized a Python application with parallelism, boosting performance by 60% and enabling horizontal scaling to support 30x more requests.',
      'Automated an EC2 deployment pipeline, cutting manual work by 1 hour per deployment and reducing errors by 25%.',
      'Developed a machine learning model detecting fraudulent form submissions with 70% accuracy, reducing manual verification by 30%.',
      'Proposed and developed the initial version of an LLM-based RAG product, accelerating marketers’ data retrieval time by 24 hours',
    ],
  },
  {
    title: 'FullStack Engineer - Mutual de Socios de AMR',
    period: 'Jan. 2021 - Oct. 2022',
    description: [
      'Developed a centralized database access UI portal for credit risk analysts, improving data retrieval speed by 50% and enabling faster, more informed decision-making for evaluating lines of credit, ultimately enhancing the efficiency of credit application processing.',
      'Developed an automated payment feature by integrating third-party APIs, optimizing the user experience with seamless, efficient, and reliable service transactions.',
      'Automated deployment pipelines, reducing failure rates by 20% while boosting deployment and backup speed by 80%',
      'Onboarded and mentored junior engineers to enhance team productivity and skill development.',
    ],
  },
  {
    title: 'Backend Engineer - KRETZ SA',
    period: 'Dec. 2019 - Jul. 2020',
    description: [
      'Developed and implemented a product loading feature, enhancing system performance by 20%.',
      'Refactored Java backend systems to align with best practices, improving maintainability, scalability, and performance.',
    ],
  }
];

export const education: Array<ItemProps> = [
  {
    title: 'MSc in Finance',
    period: '2025 - 2027',
    description: [
      'Master of Science in Finance, Universidad del CEMA',
    ],
  },
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
