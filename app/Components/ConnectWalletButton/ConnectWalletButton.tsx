import React from "react";
import styles from "./ConnectWalletButton.module.scss";
import { connectWallet } from "./utils";
const ConnectWalletButton = ({
  setWallet,
  setIsFetching,
}: IConnectWalletButton) => {
  return (
    <button
      className={styles.button}
      onClick={() => connectWallet(setWallet, setIsFetching)}
    >
      CONNECT WALLET
    </button>
  );
};

export interface IConnectWalletButton {
  setWallet: (payload: string) => void;
  setIsFetching: (isFetching: boolean) => void;
}

export default ConnectWalletButton;
