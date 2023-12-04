import Image from "next/image";
import React, { useState } from "react";
import styles from "./ConfirmingTossModal.module.scss";
import Button from "../../Button/Button";
import tokenBackground from "../../../../public/assets/images/robo-toss/token.json";
import Lottie from "lottie-react";
import heads from "../../../../public/assets/images/robo-toss/heads.png";
import tails from "../../../../public/assets/images/robo-toss/tales.png";
import { motion } from "framer-motion";
import { BigNumber } from "ethers";
const ConfirmedToss = ({
  isTossConfirmed,
  headsBet,
  tailsBet,
  amount,
  setIsConfirmingModalOpen,
  setIsTossConfirmed,
  win,
}: IConfirmedToss) => {
  const handleMouseMove = (evt: React.MouseEvent<HTMLDivElement>) => {
    const el = evt.currentTarget;
    const { clientHeight, clientWidth } = el;
    let clientX = evt.nativeEvent.offsetX;
    let clientY = evt.nativeEvent.offsetY;

    const yRotation = (clientX / clientWidth) * 25;
    const xRotation = (clientY / clientHeight) * 25;

    const transformString = `scale(1.09) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    el.style.transform = transformString;

    el.style.transition = "0.1s ease-in-out";
  };

  const handleMouseLeave = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const el = evt.currentTarget;
    el.style.transform = "scale(1)";
  };

  const handleConfirmation = () => {
    setIsTossConfirmed(false);
    setIsConfirmingModalOpen(false);
  };

  return (
    <>
      {isTossConfirmed && amount && (
        <motion.div className={styles.modal}>
          <motion.div
            className={styles.imageContainer}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            {headsBet && win && (
              <>
                <Image
                  src={heads}
                  alt={"rust gif"}
                  className={styles.winToken}
                  id="win"
                  width={200}
                  height={200}
                />
                <Lottie
                  animationData={tokenBackground}
                  loop={true}
                  className={styles.tokenBackground}
                />
              </>
            )}
            {tailsBet && win && (
              <>
                <Image
                  src={tails}
                  alt={"rust gif"}
                  className={styles.winToken}
                  id="win"
                  width={200}
                  height={200}
                />
                <Lottie
                  animationData={tokenBackground}
                  loop={true}
                  className={styles.tokenBackground}
                />
              </>
            )}
            {headsBet && !win && (
              <Image
                className={styles.lostToken}
                src={heads}
                alt={"rust gif"}
                width={200}
                height={200}
              />
            )}
            {tailsBet && !win && (
              <Image
                className={styles.lostToken}
                src={heads}
                alt={"rust gif"}
                width={200}
                height={200}
              />
            )}
          </motion.div>
          {win && (
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
            >
              <h4>CONGRATULATIONS</h4>
              <div className={styles.info}>
                <h2 className={styles.winText}>YOU WON! </h2>
                <h2 className={styles.highlight}>
                  {Number(amount) / 1000000000000000000} RUST
                </h2>
              </div>
            </motion.div>
          )}
          {!win && (
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
            >
              <h4>BETTER LUCK NEXT TIME</h4>
              <div className={styles.info}>
                <h2 className={styles.lostText}>YOU LOST! </h2>
                <h2 className={styles.highlight}>
                  {Number(amount) / 1000000000000000000} RUST
                </h2>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, width: "100%" }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
          >
            <Button
              text={"CLOSE"}
              onClick={() => handleConfirmation()}
              type={"orange"}
              size={"normal"}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

interface IConfirmedToss {
  isTossConfirmed: boolean;
  amount: BigNumber | undefined;
  tailsBet: boolean;
  headsBet: boolean;
  setIsConfirmingModalOpen: (bool: boolean) => void;
  setIsTossConfirmed: (bool: boolean) => void;
  win: boolean;
}
export default ConfirmedToss;
