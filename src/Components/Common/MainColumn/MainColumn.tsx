import React from "react";
import styles from "./MainColumn.module.scss";
import { Summary } from "../../MainColumn/Summary/Summary";
import { EducationList } from "../../MainColumn/Education/EducationList/EducationList";
import { ExperienceList } from "../../MainColumn/Experience/ExperienceList/ExperienceList";

export const MainColumn = () => {
  return (
    <div className={styles.main_column}>
      <Summary />
      <ExperienceList />
      <EducationList />
    </div>
  );
};
