import React from "react";
import { INFT } from "./Nft.types";
import styles from "./Nft.module.scss";
import Image from "next/image";
const Nft = ({ name, image, rarity, onClick }: INFT) => {
  const splitImage = image.split("//");

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imageContainer}>
        <Image
          src={`https://rrcc.mypinata.cloud/ipfs/${splitImage[1]}`}
          alt={name}
          className={styles.image}
          style={{ objectFit: "cover" }}
          priority
          fill
          sizes="(max-width: 767px) 90vw, 25vw"
        />
      </div>
      <h3 className="robot-name">{name}</h3>
      <div className={styles.pill}>
        <h3 className="robot-score">RARITY RANK: {rarity.rank}</h3>
      </div>
    </div>
  );
};

export default Nft;
