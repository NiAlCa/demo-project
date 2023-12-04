import React from "react";
import styles from "./ProfileMenu.module.scss";
import { useRouter } from "next/router";
import { useStoreState } from "../../../store";
import ProfileNFTS from "../ProfileNFTS/ProfileNFTS";
const ProfileMenu = ({ setIsProfileMenuOpen }: IProfileMenuProps) => {
  const { nfts } = useStoreState((state) => state.user);
  const router = useRouter();
  return (
    <div className={styles.menu}>
      <div className={styles.favorites}>
        {nfts && <ProfileNFTS isOnMenu={true} nfts={nfts} />}
      </div>
      <div className={styles.links}>
        <h2
          className={styles.link}
          onClick={() => {
            router.push("/dashboard"), setIsProfileMenuOpen(false);
          }}
        >
          Profile
        </h2>
        <h2
          className={styles.link}
          onClick={() => {
            router.push("/dashboard/nfts"), setIsProfileMenuOpen(false);
          }}
        >
          NFTs
        </h2>
        <h2
          className={styles.link}
          style={{ opacity: 0.5, cursor: "not-allowed" }}
          // onClick={() => {
          //   router.push("/dashboard/royalties"), setIsProfileMenuOpen(false);
          // }}
        >
          Royalties
        </h2>
      </div>
    </div>
  );
};
interface IProfileMenuProps {
  setIsProfileMenuOpen: (isProfileMenuOpen: boolean) => void;
}
export default ProfileMenu;
