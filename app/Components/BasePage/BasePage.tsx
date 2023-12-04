import React from "react";
import styles from "./BasePage.module.scss";
const BasePage = ({ children, backgroundColor }: IPageProps) => {
  return (
    <div
      className={styles.basePage}
      style={{ backgroundColor: `var(${backgroundColor})` }}
    >
      {children}
    </div>
  );
};

interface IPageProps {
  children: React.ReactNode;
  backgroundColor: string;
}
export default BasePage;
