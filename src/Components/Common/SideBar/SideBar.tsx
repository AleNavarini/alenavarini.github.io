import React from "react";
import styles from "./SideBar.module.scss";
import { ContactInfo } from "../../SideBar/ContactInfo/ContactInfo";
import { Language } from "../../SideBar/Language/Language";
import { TechStack } from "../../SideBar/TechStack/TechStack";
export const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ContactInfo />
      <Language />
      <TechStack />
    </div>
  );
};
