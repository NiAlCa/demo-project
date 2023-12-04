import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import Image, { StaticImageData } from "next/image";
const cx = classNames.bind(styles);
const Button = ({
  text,
  onClick,
  type,
  size,
  image,
  moveOnMobile,
  id,
  selected,
  errorMessage,
  disabled,
}: IButton) => {
  const classNames = cx({
    button: true,
    normal: size === "normal",
    large: size === "large",
    primary: type === "primary",
    secondary: type === "secondary",
    white: type === "white",
    orange: type === "orange",
    selected: selected !== undefined && selected,
  });

  const container = cx({
    buttonContainer: true,
    moveOnMobile: moveOnMobile,
  });
  return (
    <div className={container}>
      <button
        className={classNames}
        onClick={onClick}
        id={id}
        disabled={errorMessage || disabled ? true : false}
      >
        {image && <Image src={image} alt={"img"} width={100} height={100} />}
        {text}
      </button>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};
interface IButton {
  text: string;
  onClick: () => void;
  type: TButton;
  size: TSize;
  id?: string;
  selected?: boolean;
  image?: StaticImageData;
  moveOnMobile?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

type TButton = "primary" | "secondary" | "white" | "orange";
type TSize = "normal" | "large";
export default Button;
