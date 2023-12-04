import Image from "next/image";
import React from "react";
import styles from "./ConfirmingTossModal.module.scss";
import gif from "../../../../public/assets/images/robo-toss/rrcc-coin.gif";
import { BigNumber } from "ethers";

const WaitingForToss = ({
  isTossConfirmed,
  headsBet,
  tailsBet,
  amount,
}: IWaitingForToss) => {
  return (
    <>
      {!isTossConfirmed && (
        <div className={styles.modal}>
          <div>
            <Image src={gif} alt={"rust gif"} width={200} height={200} />
            <h4>Preparing for Toss!</h4>
            <h4>Confirming Deposit...</h4>
          </div>

          <div className={styles.info}>
            {headsBet && <h2 className={styles.highlight}>Heads</h2>}
            {tailsBet && <h2 className={styles.highlight}>Tails</h2>}
            <h2>for</h2>
            <h2 className={styles.highlight}>
              {Number(amount) / 1000000000000000000} RUST
            </h2>
          </div>

          <h4 style={{ opacity: 0.8, fontSize: "12px" }}>
            Shimmer network conditions may affect toss times.
          </h4>
        </div>
      )}
    </>
  );
};

interface IWaitingForToss {
  isTossConfirmed: boolean;
  headsBet: boolean;
  tailsBet: boolean;
  amount: BigNumber | undefined;
}

export default WaitingForToss;
