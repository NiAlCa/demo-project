import axios from "axios";
import { API_ENDPOINT } from "../app/Components/ConnectWalletButton/constants";
import { IUser } from "../store/model/user/user.types";
import { ActionCreator } from "easy-peasy";
import { INFT } from "../app/Components/Nft/Nft.types";

const updateProfile = async (
  profile: IUser,
  setUserName: ActionCreator<string>,
  favoriteNFTs: INFT[],
  avatar?: INFT,
  setError?: (error: string) => void,
  setEditProfileOpen?: (open: boolean) => void
) => {
  const token = localStorage.getItem("userToken");

  const favoriteNftIds = favoriteNFTs
    ? favoriteNFTs.map((nft) => {
        return nft.name.split("#")[1];
      })
    : ["-1"];
  const avatarID = avatar ? avatar.name.split("#")[1] : "-1";

  await axios
    .put(
      `${API_ENDPOINT}/UserProfile`,
      {
        displayName: profile.username,
        avatarId: avatarID,
        bio: "I am super",
        favoriteNftIds: favoriteNftIds,
        socials: [],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => {
      setUserName(profile.username);
      setEditProfileOpen && setEditProfileOpen(false);
    })
    .catch((err) => setError && setError("Username already exists"));
};
export default updateProfile;
