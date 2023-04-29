import React from "react";
import DefaultProps from "../../../Utils/Props";
import styles from "./EducationItem.module.scss";

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
