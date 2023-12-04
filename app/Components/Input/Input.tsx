import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";
const Input = ({
  label,
  value,
  setValue,
  id,
  placeholder,
  handleEnter,
  isAutoFocus,
}: IInput) => {
  return (
    <>
      <h3 className={styles.label}>{label}</h3>
      <input
        type="text"
        id={id}
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e)}
        // onKeyDownCapture={(e) => {
        //   if (e.code === "Enter") handleEnter();
        // }}
        autoFocus={isAutoFocus}
      />
    </>
  );
};

interface IInput {
  label: string;
  placeholder: string;
  value: string;
  id: string;
  isAutoFocus: boolean;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnter?: () => void;
}
export default Input;
