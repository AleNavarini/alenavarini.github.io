// data.ts

import Link from 'next/link';
import { ItemProps } from './types/Experience';

export const experiences: Array<ItemProps> = [
    {
        title: 'Backend Developer & DevOps - AgileEngine',
        period: 'Nov. 2022 - To the present',
        description: [
            'Maintained and developed backend applications using Python frameworks such as FastAPI and Django. Implemented applications leveraging LLMs such as GPT3.5 and Mistral',
            'Configured CICD pipelines using Gitlab CI and enforced code quality standards through SAST scanning, ensuring efficient and high-quality code delivery',
            'Collaborated with team members and stakeholders to streamline development processes and deliver exceptional results',
        ],
    },
    {
        title: 'FullStack Developer - Mutual de Socios de AMR',
        period: 'Jan. 2021 - Nov. 2022',
        description: [
            'Maintained and developed robust applications using NET Core, C#, and NextJS with both SQL and NoSQL databases, achieving efficient and effective solutions.',
            'Configured CI/CD pipelines and implemented application containerization and container orchestration using Kubernetes, reducing deployment time.',
            'Collaborated with team members and stakeholders to deliver high-quality results and contribute to the success of the team.',
        ],
    },
    {
        title: 'Developer - KRETZ SA',
        period: 'Dec. 2019 - Jul. 2020',
        description: [
            "Performed maintenance and development tasks on Kretz S.A.'s software using JAVA, GitLab, Ionic, HTML, and CSS.",
            'Collaborated with team members to identify and resolve issues and improve software quality.',
            'Contributed to the design and implementation of new software features to enhance user experience and increase efficiency.',
        ],
    },
    {
        title: 'Web Developer - Contractor Freelance',
        period: '2019 - 2020',
        description: [
            'Worked as a Freelance Web Developer, responsible for both Backend and Frontend development, as well as the structure and database connection for a medical blog.',
            'Utilized Django, HTML, CSS, Bootstrap, GitHub, and PostgreSQL to deliver an efficient and effective solution to the client.',
            'Occasionally performed maintenance work to ensure the website runs smoothly and efficiently.',
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
            'LLMs, RAG, AI',
            'Next.js, React, TypeScript',
            'AWS, Terraform',
            'Docker, Kubernetes, CI/CD, GitOps',
        ],
    },
];
