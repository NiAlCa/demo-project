import React from "react";
import styles from "./Avatar.module.scss";
import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { useStoreState, useStoreActions } from "../../../store";
import BaseModal from "../Modals/BaseModal/BaseModal";
const Avatar = () => {
  const { avatar } = useStoreState((state) => state.user);
  const splitImage = avatar && avatar.image.split("//");

  const { isDetailedModalOpen, isSelectNFTModalOpen } = useStoreState(
    (state) => state.ui
  );
  const { setIsDetailedModalOpen, setSelectNFTModalOpen } = useStoreActions(
    (actions) => actions.ui
  );
  return (
    <>
      {avatar && splitImage && (
        <div
          className={styles.avatar}
          onClick={() => setIsDetailedModalOpen(true)}
        >
          <Image
            src={`https://rrcc.mypinata.cloud/ipfs/${splitImage[1]}`}
            alt=""
            fill
            sizes="(max-width: 767px) 90vw, 25vw"
            objectFit="contain"
          />
        </div>
      )}
      {!avatar && (
        <div
          className={styles.noFav}
          onClick={() => setSelectNFTModalOpen(true)}
        >
          <MdAdd className={styles.icon} />
          <h2>Add Profile Picture</h2>
        </div>
      )}

      {isDetailedModalOpen && <BaseModal nft={avatar} />}
      {isSelectNFTModalOpen && <BaseModal />}
    </>
  );
};

export default Avatar;
