import Image from "next/image";
import React, { useState } from "react";
import styles from "./PublicFavorites.module.scss";
import { useRouter } from "next/router";
import BaseModal from "../Modals/BaseModal/BaseModal";
import { INFT } from "../Nft/Nft.types";
import { useStoreActions, useStoreState } from "../../../store";

const PublicFavorites = ({ isFetching, favoriteNFTs }: IPublicFavorites) => {
  const router = useRouter();
  const [modalNFT, setModalNFT] = useState<INFT | undefined>();

  const { setIsDetailedModalOpen } = useStoreActions((actions) => actions.ui);
  const { isDetailedModalOpen } = useStoreState((state) => state.ui);
  const handleModalOpen = (nft: INFT) => {
    setModalNFT(nft);
    setIsDetailedModalOpen(true);
  };

  function handleClose() {
    setModalNFT(undefined);
  }
  return (
    <div className={styles.favorites}>
      <div className={styles.links}>
        <h5>FAVOURITES</h5>
      </div>
      <div className={styles.container}>
        {!isFetching &&
          favoriteNFTs.length > 0 &&
          favoriteNFTs.map((nft, index) => {
            const splitImage = nft.image.split("//");
            return (
              <div
                key={index}
                className={styles.imageContainer}
                onClick={() => handleModalOpen(nft)}
              >
                <Image
                  src={`https://rrcc.mypinata.cloud/ipfs/${splitImage[1]}`}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 90vw, 25vw"
                  objectFit="cover"
                  className={styles.image}
                />
              </div>
            );
          })}
        {isDetailedModalOpen && modalNFT && (
          <BaseModal nft={modalNFT} onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

interface IPublicFavorites {
  favoriteNFTs: INFT[];
  isFetching: boolean;
}

export default PublicFavorites;
