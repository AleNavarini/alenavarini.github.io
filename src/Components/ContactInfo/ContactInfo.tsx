import React from "react";
import styles from "./ContactInfo.module.scss";
import { Card } from "../Common/Card/Card";

export const ContactInfo = () => {
  return (
    <Card className={styles.container}>
      <h1>Contact Information</h1>
      <ul className={styles.list}>
        <li>Location: Rosario, Santa Fe, Argentina</li>
        <li>
          <a href="mailto:alejandronavarini@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alejandronavarini">LinkedIn</a>
        </li>
      </ul>
    </Card>
  );
};
