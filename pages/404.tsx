import React from "react";
import BasePage from "../app/Components/BasePage/BasePage";
import "../styles/styles.scss";
import styles from "../styles/pages/not-found.module.scss";
import Link from "next/link";
import Image from "next/image";
import safari from "../public/assets/images/not-found/safari.png";
import wood from "../public/assets/images/not-found/wood.png";
const NotFoundPage = () => {
  return (
    <BasePage backgroundColor="--background-color">
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>404</h1>
          <div style={{ textAlign: "center" }}>
            <h2>BeeP bOOP!</h2>
            <h2>{`It appears there's some`}</h2>
            <h2>{`wires crossed somewhere`}</h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>{`The page you are looking for`}</h3>
            <h3>{`could not be found.`}</h3>
          </div>
          <Link className={styles.link} href={"/"}>
            HOME
          </Link>
        </div>
        <div className={styles.leftContainer}>
          <Image src={safari} alt={""} style={{ objectFit: "cover" }} fill />
        </div>
        <div className={styles.rightContainer}>
          <Image src={wood} alt={""} style={{ objectFit: "cover" }} fill />
        </div>
      </div>
    </BasePage>
  );
};

export default NotFoundPage;
