import React, { useState } from "react";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { useStoreState } from "../../../store";
import { truncate } from "../Modals/DetailedModal/utils";
import styles from "./UserInfo.module.scss";
import EditProfileModal from "../Modals/EditProfileModal/EditProfileModal";

const UserInfo = () => {
  const { wallet, profile } = useStoreState((state) => state.user);

  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.userInfo}>
      <LiaGripLinesVerticalSolid className={styles.icon} />
      <div className={styles.container}>
        <div className={styles.userName}>
          {profile.username && <h1>{profile.username}</h1>}
          {!profile.username && <h1>{"ADD USERNAME "}</h1>}
        </div>
        <div>
          <h4>Address</h4>
          <a
            href={`https://explorer.evm.shimmer.network/address/${wallet}`}
            target="_blank"
          >
            <h2>{wallet && truncate(wallet, 20)}</h2>
          </a>
        </div>

        {/* <div className={styles.socials}>
          <RiDiscordFill className={styles.icon} />
          <RiTwitterXLine className={styles.icon} />
        </div> */}

        {isEditModalOpen && (
          <EditProfileModal setEditProfileOpen={setEditModalOpen} />
        )}
        <h4
          className={styles.editProfile}
          onClick={() => setEditModalOpen(true)}
        >
          EDIT PROFILE
        </h4>
      </div>
    </div>
  );
};

export default UserInfo;
