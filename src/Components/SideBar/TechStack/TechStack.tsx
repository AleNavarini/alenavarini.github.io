import React from "react";
import styles from "./TechStack.module.scss";
import { Card } from "../../Common/Card/Card";

export const TechStack = () => {
  return (
    <Card>
      <h1>Tech Stack</h1>
      <ul>
        <li>Python, Django, Flask</li>
        <li>.NET Framework, NET Core, C#</li>
        <li>HTML5, CSS3</li>
        <li>JavaScript, TypeScript</li>
        <li>NextJS / React</li>
        <li>SQLServer, MySQL, MongoDB</li>
        <li>Docker, Kubernetes, Linux</li>
        <li>Gitlab CI, CI/CD</li>
        <li>Java</li>
        <li>AWS</li>
      </ul>
    </Card>
  );
};
