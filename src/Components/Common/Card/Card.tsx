import React from "react";
import DefaultProps from "../../../Utils/Props";
import styles from "./Card.module.scss";

interface CardProps extends DefaultProps {
  center?: boolean;
}
export const Card = (props: CardProps) => {
  return (
    <div
      className={`${styles.card} ${props.className} ${
        props.center && styles.card_center
      }`}
    >
      {props.children}
    </div>
  );
};
