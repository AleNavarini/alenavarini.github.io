import React from "react";
import styles from "./ExperienceList.module.scss";
import { ExperienceItem } from "../ExperienceItem/ExperienceItem";
import { Card } from "../../../Common/Card/Card";

type Experience = {
  title: string;
  period: string;
  activities: Array<string>;
};
export const ExperienceList = () => {
  const experiences: Array<Experience> = [
    {
      title: "Backend Developer & DevOps - AgileEngine",
      period: "2022 - To the present",
      activities: [
        "Maintained and developed backend applications using Python frameworks such as FastAPI and Django. Implemented applications leveraging LLMs such as GPT3.5 and Mistral",
        "Configured CICD pipelines using Gitlab CI and enforced code quality standards through SAST scanning, ensuring efficient and high-quality code delivery",
        "Collaborated with team members and stakeholders to streamline development processes and deliver exceptional results",
      ],
    },
    {
      title: "FullStack Developer - Mutual de Socios de AMR",
      period: "2021 - 2022",
      activities: [
        "Maintained and developed robust applications using NET Core, C#, and NextJS with both SQL and NoSQL databases, achieving efficient and effective solutions.",
        "Configured CI/CD pipelines and implemented application containerization and container orchestration using Kubernetes, reducing deployment time.",
        "Collaborated with team members and stakeholders to deliver high-quality results and contribute to the success of the team.",
      ],
    },
    {
      title: "Developer - KRETZ SA",
      period: "2019 - 2020",
      activities: [
        "Performed maintenance and development tasks on Kretz S.A.'s software using JAVA, GitLab, Ionic, HTML, and CSS.",
        "Collaborated with team members to identify and resolve issues and improve software quality.",
        "Contributed to the design and implementation of new software features to enhance user experience and increase efficiency.",
      ],
    },
    {
      title: "Web Developer - Contractor Freelance",
      period: "2019 - 2020",
      activities: [
        "Worked as a Freelance Web Developer, responsible for both Backend and Frontend development, as well as the structure and database connection for a medical blog.",
        "Utilized Django, HTML, CSS, Bootstrap, GitHub, and PostgreSQL to deliver an efficient and effective solution to the client.",
        "Occasionally performed maintenance work to ensure the website runs smoothly and efficiently.",
      ],
    },
  ];
  return (
    <Card className={styles.container}>
      <h1>Experience</h1>
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.title}
          title={experience.title}
          period={experience.period}
          activities={experience.activities}
        />
      ))}
    </Card>
  );
};
