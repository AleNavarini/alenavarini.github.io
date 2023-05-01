import React from "react";
import styles from "./Language.module.scss";
import { Card } from "../../Common/Card/Card";

export const Language = () => {
  return (
    <Card className={styles.container}>
      <h1>Languages</h1>
      <ul className={styles.list}>
        <li>Spanish: Native</li>
        <li>English: C1 (certified)</li>
        <li>German: B1 (certified)</li>
        <li>Portuguese: Basic</li>
      </ul>
    </Card>
  );
};
