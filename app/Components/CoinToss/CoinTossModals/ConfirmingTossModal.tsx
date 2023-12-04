import React, { useEffect, useState } from "react";
import styles from "./ConfirmingTossModal.module.scss";
import { TBet } from "../../../../utils/robo-toss/utils";
import WaitingForToss from "./WaitingForToss";
import ConfirmedToss from "./ConfirmedToss";
import { BigNumber } from "ethers";
const ConfirmingTossModal = ({
  headsBet,
  tailsBet,
  amount,
  setIsConfirmingModalOpen,
  setIsTossConfirmed,
  isTossConfirmed,
  win,
}: IConfirmingTossModal) => {
  return (
    <div className={styles.modalContainer}>
      <WaitingForToss
        isTossConfirmed={isTossConfirmed}
        headsBet={headsBet}
        tailsBet={tailsBet}
        amount={amount}
      />
      {amount && (
        <ConfirmedToss
          isTossConfirmed={isTossConfirmed}
          amount={amount}
          tailsBet={tailsBet}
          win={win}
          headsBet={headsBet}
          setIsConfirmingModalOpen={setIsConfirmingModalOpen}
          setIsTossConfirmed={setIsTossConfirmed}
        />
      )}
      <div className={styles.backdrop}></div>
    </div>
  );
};

interface IConfirmingTossModal {
  headsBet: boolean;
  tailsBet: boolean;
  amount: BigNumber | undefined;
  setIsConfirmingModalOpen: (bool: boolean) => void;
  isTossConfirmed: boolean;
  setIsTossConfirmed: (bool: boolean) => void;
  win: boolean;
}

export default ConfirmingTossModal;
