import React, { useState } from "react";
import styles from "./Disclaimer.module.scss";
import Button from "../../Button/Button";
const Disclaimer = ({ setIsDisclaimerOpen }: IDisclaimer) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h2>Disclaimer</h2>
        <div className={styles.text}>
          <input
            type="checkbox"
            checked={checked}
            className={styles.checkbox}
            onChange={() => setChecked(!checked)}
          />
          <h4>
            {
              "I confirm that gambling is not forbidden by my local authorities and that I am above the legal age authorised by my local authorities to participate in high stake gaming."
            }
          </h4>
        </div>
        <Button
          text={"CONFIRM"}
          onClick={() => setIsDisclaimerOpen(false)}
          disabled={!checked}
          type={"orange"}
          size={"large"}
        />
      </div>
      <div className={styles.backdrop}></div>
    </div>
  );
};

interface IDisclaimer {
  setIsDisclaimerOpen: (bool: boolean) => void;
}

export default Disclaimer;
