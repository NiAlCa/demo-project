import React from "react";
import styles from "./PaymentDropdown.module.scss";
import Image, { StaticImageData } from "next/image";
import { FiChevronDown } from "react-icons/fi";

const PaymentDropdownItem = ({
  price,
  currency,
  src,
  onClick,
  id,
}: IPaymentDropdownItem) => {
  return (
    <div className={styles.itemContainer} onClick={onClick}>
      <span>{price}</span>
      <h4>{currency}</h4>
      <Image src={src} alt="TKN" width={23} height={23} />
      <FiChevronDown className={styles.icon} />
    </div>
  );
};
interface IPaymentDropdownItem {
  price: number | string;
  currency: string;
  src: StaticImageData;
  id: number;
  onClick: () => void;
}
export default PaymentDropdownItem;
