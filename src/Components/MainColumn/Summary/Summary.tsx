import React from "react";
import styles from "./Summary.module.scss";
import { Card } from "../../Common/Card/Card";

export const Summary = () => {
  return (
    <Card center={true} className={`${styles.container}`}>
      <div className={styles.personal_container}>
        <img
          src="https://i.ibb.co/W37T2sJ/circle-cropped.png"
          alt="Profile"
          width={200}
        />
        <div className={styles.name_container}>
          <h1>Alejandro Manuel Navarini</h1>
          <h2>Software Developer</h2>
        </div>
      </div>
      <h1>Summary</h1>
      <p>
        Experienced  software  engineer  deeply  passionate  about  technology  and
        always striving to improve. With a proactive and solution-oriented approach,
        I  thrive  in  challenging  environments  and  excel  at  problem-solving  I  have  a
        natural  curiosity  for  learning  and  enjoy  exploring  emerging  trends  in  the
        field. Committed to refining my skills, I actively participate in projects and
        training to gain practical experience.
      </p>
    </Card>
  );
};
