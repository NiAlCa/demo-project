import React, { useRef, useState } from "react";
import styles from "./PaymentDropdown.module.scss";
import Image from "next/image";
import RUST from "../../../public/assets/images/mint-modal/rust.png";
import SMR from "../../../public/assets/images/mint-modal/shimmer.png";
import { FiChevronDown } from "react-icons/fi";
import PaymentDropdownItem from "./PaymentDropdownItem";
import { useOutsideAlerter } from "../../hooks/useOutsideAlertes";
import classNames from "classnames/bind";
import { IToken } from "../Modals/MintNFTModal/MintNFTModal";
import { numberWithCommas } from "./utils";

const cx = classNames.bind(styles);
const PaymentDropdown = ({
  amountOfNFTS,
  shimmerData,
  rustData,
  selected,
  setSelected,
}: IPaymentDropdown) => {
  const DIGITS = 1000000000000000000;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef(null);

  useOutsideAlerter(
    ref,
    () => setIsOpen(false),
    () => setIsOpen(true)
  );

  const selectedItem = cx({
    selectedItem: true,
    isOpen: isOpen,
  });

  return (
    <div className={styles.dropdownContainer}>
      <span>SELECT PAYMENT TOKEN</span>
      <div className={styles.selectedContainer} ref={ref}>
        {selected && (
          <div className={selectedItem}>
            <span>
              {amountOfNFTS
                ? numberWithCommas(
                    Math.round((selected.price / DIGITS) * amountOfNFTS)
                  ).split(".")[0]
                : 0}
            </span>
            <h4>{selected.symbol}</h4>
            {selected.symbol === "SMR" && (
              <Image src={SMR} alt="SMR" width={23} height={23} />
            )}
            {selected.symbol === "RUST" && (
              <Image src={RUST} alt="RUST" width={23} height={23} />
            )}
            <FiChevronDown className={styles.icon} />
          </div>
        )}

        {isOpen && (
          <div className={styles.itemsContainer}>
            {selected.symbol === "SMR" && (
              <PaymentDropdownItem
                price={
                  amountOfNFTS
                    ? numberWithCommas(
                        Math.abs((rustData.price / DIGITS) * amountOfNFTS)
                      ).split(".")[0]
                    : 0
                }
                currency={rustData.symbol}
                src={RUST}
                id={0}
                onClick={() => setSelected(rustData)}
              />
            )}
            {selected.symbol === "RUST" && (
              <PaymentDropdownItem
                price={
                  amountOfNFTS
                    ? numberWithCommas(
                        Math.abs((shimmerData.price / DIGITS) * amountOfNFTS)
                      ).split(".")[0]
                    : 0
                }
                currency={shimmerData.symbol}
                src={SMR}
                id={1}
                onClick={() => setSelected(shimmerData)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface IPaymentDropdown {
  amountOfNFTS: number | undefined;
  shimmerData: IToken;
  rustData: IToken;
  selected: IToken;
  setSelected: (token: IToken) => void;
}

export default PaymentDropdown;
