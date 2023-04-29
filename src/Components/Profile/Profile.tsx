import React from "react";
import styles from "./Profile.module.scss";
import { Card } from "../Common/Card/Card";

export const Profile = () => {
  return (
    <Card>
      <div className={styles.container}>
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
      <h2 >Profile</h2>
      <p>
        I am an experienced software engineer. I am passionate about
        technology and constantly seek to improve my skills and knowledge.
        With a proactive and solution-oriented approach, I thrive in
        challenging environments and excel at problem-solving. I have a
        natural curiosity for learning and enjoy exploring emerging trends
        in the field. I have a natural curiosity for learning and am
        particularly drawn to emerging areas such as Data Science and
        Machine Learning. I am committed to developing my expertise and have
        pursued various projects and training opportunities to gain
        practical knowledge.
      </p>
    </Card>
  );
};
