import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./DownloadCV.module.scss";

export const DownloadCV = () => {
  return (
    <div>
      <a
        href={`alejandro_navarini_cv_en.pdf`}
        download
        className={styles.download}
      >
        <FontAwesomeIcon icon={faDownload} className="fa-2xl" />
      </a>
    </div>
  );
};
