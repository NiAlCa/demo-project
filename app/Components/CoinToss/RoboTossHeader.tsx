import Image from "next/image";
import React from "react";
import styles from "../../../styles/pages/robot-toss.module.scss";
import gif from "../../../public/assets/images/robo-toss/rrcc-coin.gif";
const RoboTossHeader = () => {
  return (
    <div style={{ alignSelf: "center", marginTop: "20px" }}>
      <h2 className={styles.header}>RUSTY</h2>
      <div className={styles.subheader}>
        <h2>ROB</h2>
        <Image src={gif} alt={"tales"} width={60} height={60} />
        <h2>TOSS</h2>
      </div>
      <div className={styles.powered}>
        <h4>Powered by</h4>{" "}
        <h4 className={styles.rust}>
          <a
            href="https://shimmersea.finance/swap"
            target="_blank"
            rel="noreferrer"
          >
            $RUST
          </a>
        </h4>
      </div>
    </div>
  );
};

export default RoboTossHeader;
