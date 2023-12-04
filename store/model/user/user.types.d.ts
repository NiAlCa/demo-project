import { Action } from "easy-peasy";
import { INFT } from "../../../app/Components/Nft/Nft.types";

export interface IUserModel {
  profile: IUser;
  isFetching: boolean;
  setIsFetching: Action<IUserModel, boolean>;

  wallet: string | undefined;

  nfts: INFT[];

  setWallet: Action<IUserModel, string | undefined>;
  setNfts: Action<IUserModel, INFT>;

  backgroundColor: string;
  setBackgroundColor: Action<IUserModel, string>;

  setUserName: Action<IUserModel, string>;

  favoriteNFTs: INFT[];
  avatar: INFT | undefined;

  addFavoriteNFT: Action<IUserModel, INFT>;
  removeFavorite: Action<IUserModel, NFT>;
  loadFavorites: Action<IUserModel, INFT>;
  loadAvatar: Action<IUserModel, INFT | undefined>;
  setAvatar: Action<IUserModel, NFT>;

  nftMinted: boolean;
  setNftMinted: Action<IUserModel, boolean>;
}

export interface IUser {
  username: string;
  discord: string;
  twitter: string;
  address: string;
}
