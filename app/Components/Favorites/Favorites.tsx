import React, { useState } from "react";
import styles from "./Favorites.module.scss";
import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { useStoreActions, useStoreState } from "../../../store";
import { useRouter } from "next/router";
import { MdArrowForwardIos } from "react-icons/md";
import BaseModal from "../Modals/BaseModal/BaseModal";
import { INFT } from "../Nft/Nft.types";
const Favorites = () => {
  const { favoriteNFTs, isFetching } = useStoreState((state) => state.user);
  const { isDetailedModalOpen } = useStoreState((state) => state.ui);
  const { setIsDetailedModalOpen, setSelectNFTModalOpen } = useStoreActions(
    (actions) => actions.ui
  );
  const [modalNFT, setModalNFT] = useState<INFT | undefined>();
  const router = useRouter();

  function handleModalOpen(nft: INFT) {
    setModalNFT(nft);
    setIsDetailedModalOpen(true);
  }

  function handleClose() {
    setModalNFT(undefined);
  }
  return (
    <div className={styles.favorites}>
      <div className={styles.links}>
        <h5>FAVOURITES</h5>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <h5
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/dashboard/nfts")}
          >
            MY NFTS
          </h5>
          <MdArrowForwardIos />
        </div>
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
        {favoriteNFTs.length < 5 && (
          <div
            className={styles.addNFT}
            onClick={() => setSelectNFTModalOpen(true)}
          >
            <MdAdd className={styles.icon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
