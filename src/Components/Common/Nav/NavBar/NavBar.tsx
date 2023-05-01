import React from "react";
import styles from "./NavBar.module.scss";
import { DownloadCV } from "../DownloadCV";
import { Theme } from "../Theme";
import DefaultProps from "../../../../Utils/Props";

interface NavBarProps extends DefaultProps {
  onThemeToggle: () => void
}
export const NavBar = (props: NavBarProps) => {
  return (
    <div className={styles.container}>
      <Theme onThemeToggle={props.onThemeToggle} />
      <DownloadCV />
    </div>
  );
};
