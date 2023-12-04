import React from "react";
import styles from "./PublicFooter.module.scss";
import Favorites from "../Favorites/Favorites";
const PublicFooter = () => {
  return (
    <div className={styles.container}>
      <Favorites />
    </div>
  );
};

export default PublicFooter;
