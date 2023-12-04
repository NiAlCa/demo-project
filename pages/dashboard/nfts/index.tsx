import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import styles from "../../../styles/pages/nfts.module.scss";

import { useStoreState } from "../../../store";
import { useRouter } from "next/router";
import ProfileNFTS from "../../../app/Components/ProfileNFTS/ProfileNFTS";
import { useStoreRehydrated } from "easy-peasy";
const NFTS = () => {
  const { nfts } = useStoreState((state) => state.user);

  const router = useRouter();
  const isRehydrated = useStoreRehydrated();

  return (
    <>
      {isRehydrated && (
        <div className={styles.dashboard}>
          <div>
            <h1>MY NFTs</h1>
            <div
              className={styles.backButton}
              onClick={() => router.push("/dashboard")}
            >
              <MdArrowBackIosNew /> <h3>Back to Profile</h3>
            </div>
            <br />
            <ProfileNFTS isOnMenu={false} nfts={nfts} />
          </div>
        </div>
      )}
    </>
  );
};

export default NFTS;
