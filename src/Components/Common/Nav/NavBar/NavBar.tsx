import React from "react";
import styles from "./NavBar.module.scss";
import { DownloadCV } from "../DownloadCV";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <DownloadCV />
    </div>
  );
};
