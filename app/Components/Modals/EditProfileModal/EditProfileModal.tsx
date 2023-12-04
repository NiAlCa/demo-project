import React, { useRef, useState } from "react";
import styles from "./EditProfileModal.module.scss";
import { useStoreActions, useStoreState } from "../../../../store";
import { useOutsideAlerter } from "../../../hooks/useOutsideAlertes";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { IUser } from "../../../../store/model/user/user.types";
import updateProfile from "../../../../service/updateProfile";

const EditProfileModal = ({ setEditProfileOpen }: IEditProfileModel) => {
  const { profile, avatar, favoriteNFTs } = useStoreState(
    (state) => state.user
  );
  const { setUserName } = useStoreActions((actions) => actions.user);
  const [error, setError] = useState<string>("");
  const [stateProfile, setProfile] = useState<IUser>({
    username: profile.username,
    address: profile.address,
    discord: profile.discord,
    twitter: profile.twitter,
  });
  const ref = useRef(null);
  useOutsideAlerter(ref, () => setEditProfileOpen(false));

  const handleEditProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 32)
      setError("Username cannot be longer than 32");
    else if (e.target.value.length <= 32) {
      setError("");
    }
    if (e.target.id === "username" && e.target.value.length <= 32) {
      setProfile({
        ...stateProfile,
        [e.target.id]: e.target.value.toUpperCase(),
      });
    }
  };

  const handleSave = () => {
    updateProfile(
      stateProfile,
      setUserName,
      favoriteNFTs,
      avatar,
      setError,
      setEditProfileOpen
    );
  };
  return (
    <div ref={ref} className={styles.modal}>
      <Input
        label="Username"
        value={stateProfile.username}
        id={"username"}
        setValue={(e) => handleEditProfile(e)}
        placeholder={""}
        isAutoFocus={true}
      />
      {error && <h3>{error}</h3>}
      <br />
      <div>
        <Button
          text={"SAVE"}
          type="primary"
          size={"normal"}
          onClick={handleSave}
          moveOnMobile={false}
        />
      </div>
    </div>
  );
};

interface IEditProfileModel {
  setEditProfileOpen: (bool: boolean) => void;
}

export default EditProfileModal;
