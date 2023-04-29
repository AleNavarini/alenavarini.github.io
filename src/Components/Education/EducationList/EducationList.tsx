import React from "react";
import styles from "./EducationList.module.scss";
import { Card } from "../../Common/Card/Card";
import { EducationItem } from "../EducationItem/EducationItem";

type EducationItemType = {
  title: string;
  period: string;
  description: string;
};
export const EducationList = () => {
  const educationItems: Array<EducationItemType> = [
    {
      title: "Information Systems Engineering",
      period: "2017 - 2023",
      description:
        "Information Systems Engineer. Universidad Tecnológica Nacional FRRO.",
    },
  ];
  return (
    <Card className={styles.container}>
      <h1>Education</h1>
      {educationItems.map((educationItem) => (
        <EducationItem
          title={educationItem.title}
          period={educationItem.period}
          description={educationItem.description}
        />
      ))}
    </Card>
  );
};
