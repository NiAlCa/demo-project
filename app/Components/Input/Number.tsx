import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";
const InputNumber = ({ label, value, id, setValue }: INumber) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 className={styles.label}>{label}</h3>
      <input
        autoFocus
        type="number"
        value={value}
        id={id}
        className={styles.number}
        onChange={(e) => setValue(e)}
      />
      <h6 className={styles.max}>Max. 10 NFTs per transaction</h6>
    </div>
  );
};

interface INumber {
  label: string;
  value: number | undefined;
  id: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default InputNumber;
