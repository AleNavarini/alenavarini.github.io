import React from "react";
import styles from "./EducationItem.module.scss";
import DefaultProps from "../../../../Utils/Props";

interface EducationItemProps extends DefaultProps {
  title: string;
  period: string;
  description: string;
}
export const EducationItem = (props: EducationItemProps) => {
  return (
    <div className={styles.item}>
      <h2>{props.title}</h2>
      <p>{props.period}</p>
      <p>{props.description}</p>
    </div>
  );
};
