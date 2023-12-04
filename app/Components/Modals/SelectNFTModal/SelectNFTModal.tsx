import React from "react";
import styles from "./SelectNFTModal.module.scss";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { useStoreState } from "../../../../store";
import ProfileNFTS from "../../ProfileNFTS/ProfileNFTS";
const SelectNFTModal = () => {
  const { nfts } = useStoreState((state) => state.user);
  return (
    <div className={styles.container}>
      <div>
        <h4>
          Click on the <AiOutlineStar /> to select your Avatar
        </h4>
        <h4>
          Click on the <AiOutlineHeart /> to add an NFT to your Favorites (Max.
          5)
        </h4>
      </div>
      <ProfileNFTS isOnMenu={true} nfts={nfts} />
    </div>
  );
};

export default SelectNFTModal;
