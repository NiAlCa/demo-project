import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/images/navbar/logo.png";
import { useRouter } from "next/router";
import { RiTwitterXLine, RiDiscordFill } from "react-icons/ri";
import { useStoreActions, useStoreState } from "../../../store";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import classNames from "classnames";
import BaseModal from "../Modals/BaseModal/BaseModal";
import { connectWallet } from "../ConnectWalletButton/utils";
import { useFetchUserData } from "../../../utils/dashboard/useFetchUserData";

const Navbar = () => {
  const router = useRouter();

  const { setIsMenuOpen, setMintModalOpen } = useStoreActions(
    (actions) => actions.ui
  );
  const { isMenuOpen } = useStoreState((state) => state.ui);
  const { backgroundColor, isFetching } = useStoreState((state) => state.user);
  const { setWallet, setIsFetching } = useStoreActions(
    (actions) => actions.user
  );
  const [navbarColor, setNavbarColor] = useState<string>("transparent");

  const { isConfirmationModalOpen, isMintModalOpen } = useStoreState(
    (state) => state.ui
  );
  const [imagesUrls, setImgesUrls] = useState<string[]>([]);

  const [isMetamaskInstalled, setIsMetamaskInstalled] =
    useState<boolean>(false);

  useEffect(() => {
    setIsMetamaskInstalled(!!window.ethereum);

    if (window && window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        if (!isFetching) {
          await connectWallet(setWallet, setIsFetching);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (router.pathname === "/") {
      setNavbarColor("transparent");
    } else if (router.pathname === "/dashboard") {
      setNavbarColor(backgroundColor);
    } else {
      setNavbarColor("--background-color");
    }
  }, [router.pathname, backgroundColor]);

  useFetchUserData();

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `var(${navbarColor})` }}
    >
      <div className={styles.logoContainer} onClick={() => router.push("/")}>
        <Image src={logo} alt={""} className={styles.logo} />
      </div>
      {router.pathname === "/" && (
        <Button
          text={"MINT NFT"}
          size={"normal"}
          type="white"
          onClick={() => setMintModalOpen(true)}
          moveOnMobile
        />
      )}
      <div className={styles.menu}>
        <a
          href="https://docs.rustyrobot.io/about-the-rrcc/introduction"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          MORE INFO
        </a>
        <a
          href="https://discord.com/invite/7T7xZzSpjW"
          target="_blank"
          rel="noreferrer"
        >
          <RiDiscordFill className={classNames(styles.icons, styles.twitter)} />
        </a>
        <a
          href="https://twitter.com/rustyrobotcc?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterXLine className={styles.icons} />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="27"
          viewBox="0 0 36 27"
          fill="none"
          className={styles.iconMenu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <path
            d="M2.25 0C1.00736 0 0 1.20883 0 2.7C0 4.19117 1.00736 5.4 2.25 5.4H33.75C34.9926 5.4 36 4.19117 36 2.7C36 1.20883 34.9926 0 33.75 0H2.25Z"
            fill="white"
          />
          <path
            d="M0 13.5C0 12.0088 1.00736 10.8 2.25 10.8H33.75C34.9926 10.8 36 12.0088 36 13.5C36 14.9912 34.9926 16.2 33.75 16.2H2.25C1.00736 16.2 0 14.9912 0 13.5Z"
            fill="white"
          />
          <path
            d="M2.25 21.6C1.00736 21.6 0 22.8088 0 24.3C0 25.7912 1.00736 27 2.25 27H33.75C34.9926 27 36 25.7912 36 24.3C36 22.8088 34.9926 21.6 33.75 21.6H2.25Z"
            fill="white"
          />
        </svg>
      </div>
      {isMintModalOpen && (
        <BaseModal setImagesUrls={setImgesUrls} imagesUrls={imagesUrls} />
      )}
      {isConfirmationModalOpen && <BaseModal imagesUrls={imagesUrls} />}
      <Menu isMetamaskInstalled={isMetamaskInstalled} />
    </div>
  );
};

export default Navbar;
