import React from "react";
import styles from "./SideBar.module.scss";
import { ContactInfo } from "../../ContactInfo/ContactInfo";
export const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ContactInfo />
    </div>
  );
};
