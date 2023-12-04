import React from "react";
import styles from "./BaseContainer.module.scss";

const BaseContainer = ({ children }: IBaseContainerProps) => {
  return <div className={styles.baseContainer}>{children}</div>;
};

interface IBaseContainerProps {
  children: React.ReactNode;
}
export default BaseContainer;
