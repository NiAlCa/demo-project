import React, { useEffect, useState } from "react";
import styles from "./ProfileNFTS.module.scss";
import { INFT } from "../Nft/Nft.types";
import Image from "next/image";
import {
  AiOutlineStar,
  AiOutlineHeart,
  AiFillStar,
  AiFillHeart,
} from "react-icons/ai";
import Button from "../Button/Button";
import { useStoreActions, useStoreState } from "../../../store";
import BaseModal from "../Modals/BaseModal/BaseModal";
import updateProfile from "../../../service/updateProfile";
const ProfileNFTS = ({ nfts, isOnMenu }: IProfileNFTS) => {
  const [modalNFT, setModalNFT] = useState<INFT>();
  const { isDetailedModalOpen } = useStoreState((state) => state.ui);

  const { setIsDetailedModalOpen } = useStoreActions((actions) => actions.ui);

  const { favoriteNFTs, avatar, profile } = useStoreState(
    (state) => state.user
  );
  const { addFavoriteNFT, setAvatar, removeFavorite, setUserName } =
    useStoreActions((actions) => actions.user);
  const handleModal = (nft: INFT) => {
    setIsDetailedModalOpen(true);
    setModalNFT(nft);
  };

  const handleUpdateProfile = (
    nft: INFT,
    isAvatar: boolean,
    isFavorite: boolean
  ) => {
    if (isAvatar) {
      setAvatar(nft);
    } else if (!isAvatar && !isFavorite) {
      addFavoriteNFT(nft);
    } else if (!isAvatar && isFavorite) {
      removeFavorite(nft);
    }
  };

  useEffect(() => {
    updateProfile(profile, setUserName, favoriteNFTs, avatar);
  }, [avatar, favoriteNFTs]);
  return (
    <div className={styles.nftsContainer}>
      {nfts.length > 0 &&
        nfts.map((nft, index) => {
          const splitImage = nft.image.split("//");
          const isFavorite = favoriteNFTs.some(
            (fav) => fav.assetId === nft.assetId
          );
          const isAvatar = avatar && avatar.assetId === nft.assetId;
          return (
            <div key={index} className={styles.nftContainer}>
              <div className={styles.imageContainer}>
                {isAvatar && <AiFillStar className={styles.isAvatar} />}
                {!isAvatar && (
                  <AiOutlineStar
                    className={styles.setAvatar}
                    onClick={() => handleUpdateProfile(nft, true, false)}
                  />
                )}
                {isFavorite && (
                  <AiFillHeart
                    className={styles.isFavorite}
                    onClick={() => handleUpdateProfile(nft, false, true)}
                  />
                )}
                {!isFavorite && (
                  <AiOutlineHeart
                    className={styles.setFavorite}
                    onClick={() => handleUpdateProfile(nft, false, false)}
                  />
                )}
                <Image
                  src={`https://rrcc.mypinata.cloud/ipfs/${splitImage[1]}`}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 90vw, 25vw"
                  style={{ objectFit: "cover" }}
                  className={styles.image}
                />
              </div>
              {!isOnMenu && <h2 className={styles.name}>{nft.name}</h2>}
              {!isOnMenu && (
                <Button
                  text={"VIEW DETAILS"}
                  size={"normal"}
                  onClick={() => handleModal(nft)}
                  type={"primary"}
                />
              )}
            </div>
          );
        })}

      {modalNFT && isDetailedModalOpen && <BaseModal nft={modalNFT} />}
    </div>
  );
};

interface IProfileNFTS {
  nfts: INFT[];
  isOnMenu: boolean;
}

export default ProfileNFTS;
