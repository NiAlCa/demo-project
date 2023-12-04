import React from "react";
import styles from "./BaseSection.module.scss";
const BaseSection = ({ children }: IBaseSectionProps) => {
  return <div className={styles.baseSection}>{children}</div>;
};

interface IBaseSectionProps {
  children: React.ReactNode;
}

export default BaseSection;
