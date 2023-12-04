import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "../../../styles/pages/robot-toss.module.scss";
import tails from "../../../public/assets/images/robo-toss/tales.png";
import heads from "../../../public/assets/images/robo-toss/heads.png";
import { handleHeadTailsBet } from "../../../utils/robo-toss/utils";
const CoinBetButtons = ({
  headsBet,
  tailsBet,
  setHeadsBet,
  setTailsBet,
}: ICoinBetButtons) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <Button
          size={"large"}
          type={"orange"}
          image={heads}
          text={"HEADS"}
          selected={headsBet}
          onClick={() => handleHeadTailsBet("heads", setHeadsBet, setTailsBet)}
        />
        <Button
          size={"large"}
          type={"orange"}
          image={tails}
          text={"TAILS"}
          selected={tailsBet}
          onClick={() => handleHeadTailsBet("tails", setHeadsBet, setTailsBet)}
        />
      </div>
    </>
  );
};

interface ICoinBetButtons {
  headsBet: boolean;
  tailsBet: boolean;
  setHeadsBet: (bool: boolean) => void;
  setTailsBet: (bool: boolean) => void;
}

export default CoinBetButtons;
