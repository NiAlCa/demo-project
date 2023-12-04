import React, { useState } from "react";
import styles from "./Footer.module.scss";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Favorites from "../Favorites/Favorites";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import classNames from "classnames";
import { useStoreActions, useStoreState } from "../../../store";
const Footer = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const { isFetching } = useStoreState((state) => state.user);
  return (
    <div className={styles.container}>
      <Favorites />

      <div className={styles.badges}>
        <h5>BADGES</h5>
        <h2>COMING SOON...</h2>
      </div>
      <div
        className={classNames(
          styles.arrowContainer,
          isProfileMenuOpen && styles.open
        )}
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
      >
        <MdKeyboardDoubleArrowUp className={styles.arrow} />
      </div>
      {isProfileMenuOpen && (
        <ProfileMenu setIsProfileMenuOpen={setIsProfileMenuOpen} />
      )}
    </div>
  );
};

export default Footer;
