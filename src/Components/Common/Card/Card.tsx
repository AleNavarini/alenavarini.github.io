import React from "react";
import DefaultProps from "../../../Utils/Props";
import styles from "./Card.module.scss";

export const Card = (props: DefaultProps) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};
