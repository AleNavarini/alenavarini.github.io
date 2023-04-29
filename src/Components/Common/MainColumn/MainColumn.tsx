import React from "react";
import styles from "./MainColumn.module.scss";
import { Profile } from "../../Profile/Profile";
import { EducationList } from "../../Education/EducationList/EducationList";
import { ExperienceList } from "../../Experience/ExperienceList/ExperienceList";

export const MainColumn = () => {
  return (
    <div className={styles.main_column}>
      <Profile />
      <ExperienceList />
      <EducationList />
    </div>
  );
};
