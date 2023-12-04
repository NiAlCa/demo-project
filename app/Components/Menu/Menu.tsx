import React, { useEffect, useRef } from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { useStoreState, useStoreActions } from "../../../store";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";
import { useOutsideAlerter } from "../../hooks/useOutsideAlertes";
import { useRouter } from "next/router";
import { RiCloseLine } from "react-icons/ri";
import { useStoreRehydrated } from "easy-peasy";
import axios from "axios";
import PriceTracker from "../PriceTracker/PriceTracker";
import {
  MARKETPLACE_CONTRACT_ADDRESS_V2,
  NFT_CONTRACT_ADDRESS_V2,
  RUST_TOKEN_CONTRACT_ADDRESS_V2,
} from "../../../public/contracts/marketplace/constants";

const cx = classNames.bind(styles);
const Menu = ({ isMetamaskInstalled }: IMenuProps) => {
  const { isMenuOpen } = useStoreState((state) => state.ui);
  const { setIsMenuOpen } = useStoreActions((actions) => actions.ui);
  const className = cx({
    menu: true,
    isOpen: isMenuOpen,
  });
  const { setWallet, setIsFetching } = useStoreActions(
    (actions) => actions.user
  );
  const { wallet } = useStoreState((actions) => actions.user);
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const ref = useRef(null);
  const isRehydrated = useStoreRehydrated();

  useOutsideAlerter(ref, () => setIsMenuOpen(false));

  return (
    <>
      {isRehydrated && (
        <div className={className} ref={ref}>
          <RiCloseLine
            className={styles.close}
            onClick={() => setIsMenuOpen(false)}
          />
          <PriceTracker />

          <div className={styles.links}>
            <h2
              className={styles.link}
              onClick={() => {
                router.push("/dev"), setIsMenuOpen(false);
              }}
            >
              Link a Dev
            </h2>
            <br />
            {!wallet && isMetamaskInstalled && (
              <ConnectWalletButton
                setWallet={setWallet}
                setIsFetching={setIsFetching}
              />
            )}
            {!isMetamaskInstalled && <h4>Please install MetaMask</h4>}
          </div>

          <div className={styles.footer}>
            <div className={styles.contractContainer}>
              <div>
                <h4 className={styles.textOpacity}>$RUST TOKEN ADRESS</h4>
                <a
                  href={`https://explorer.evm.shimmer.network/address/${RUST_TOKEN_CONTRACT_ADDRESS_V2}`}
                  target="_blank"
                  className={styles.smartContract}
                >
                  {`${RUST_TOKEN_CONTRACT_ADDRESS_V2}`}
                </a>
              </div>
              <div>
                <h4 className={styles.textOpacity}>NFT COLLECTION ADDRESS</h4>
                <a
                  href={`https://explorer.evm.shimmer.network/address/${NFT_CONTRACT_ADDRESS_V2}`}
                  target="_blank"
                  className={styles.smartContract}
                >
                  {`${NFT_CONTRACT_ADDRESS_V2}`}
                </a>
              </div>
              <div>
                <h4 className={styles.textOpacity}>NFT MINT CONTRACT</h4>
                <a
                  href={`https://explorer.evm.shimmer.network/address/${MARKETPLACE_CONTRACT_ADDRESS_V2}`}
                  target="_blank"
                  className={styles.smartContract}
                >
                  {`${MARKETPLACE_CONTRACT_ADDRESS_V2}`}
                </a>
              </div>
            </div>
            <span
              className={styles.privacy}
              onClick={() => router.push("/privacy")}
            >
              PRIVACY
            </span>
            <span
              className={styles.privacy}
              onClick={() => router.push("/terms")}
            >
              TERMS
            </span>
            <h4 className={styles.textOpacity}>
              ©{currentYear} RUSTY ROBOT COUNTRY CLUB
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

interface IMenuProps {
  isMetamaskInstalled: boolean;
}

export default Menu;
