import React from "react";
import styles from "./BaseModal.module.scss";
import { useStoreActions, useStoreState } from "../../../../store";
import DetailedModal from "../DetailedModal/DetailedModal";
import { IBaseModal } from "./BaseModal.types";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import MintNFTModal from "../MintNFTModal/MintNFTModal";
import SelectNFTModal from "../SelectNFTModal/SelectNFTModal";
const BaseModal = ({ nft, imagesUrls, setImagesUrls, onClose }: IBaseModal) => {
  const {
    isDetailedModalOpen,
    isConfirmationModalOpen,
    isMintModalOpen,
    isSelectNFTModalOpen,
  } = useStoreState((state) => state.ui);
  const {
    setIsDetailedModalOpen,
    setIsConfirmationModalOpen,
    setMintModalOpen,
    setSelectNFTModalOpen,
  } = useStoreActions((actions) => actions.ui);

  function handleModalsClose() {
    setIsDetailedModalOpen(false);
    setIsConfirmationModalOpen(false);
    setMintModalOpen(false);
    setSelectNFTModalOpen(false);
    setImagesUrls && setImagesUrls([]);
    onClose && onClose(false);
  }

  return (
    <div className={styles.modalContainer}>
      {isDetailedModalOpen && nft && <DetailedModal nft={nft} />}
      {isConfirmationModalOpen && imagesUrls && (
        <ConfirmationModal
          imagesUrls={imagesUrls}
          handleModalsClose={handleModalsClose}
        />
      )}

      {isMintModalOpen && imagesUrls && setImagesUrls && (
        <MintNFTModal setImagesUrls={setImagesUrls} imagesUrls={imagesUrls} />
      )}
      {isSelectNFTModalOpen && <SelectNFTModal />}
      <div className={styles.backdrop} onClick={handleModalsClose}></div>
    </div>
  );
};

export default BaseModal;
