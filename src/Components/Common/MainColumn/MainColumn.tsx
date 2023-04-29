import React from "react";
import styles from "./MainColumn.module.scss";
import { Profile } from "../../Profile/Profile";

export const MainColumn = () => {
  return (
  <div className={styles.main_column}>
    <Profile />
  </div>)
  ;
};
