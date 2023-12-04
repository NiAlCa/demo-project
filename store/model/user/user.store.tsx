import { action } from "easy-peasy";
import { IUserModel } from "./user.types";

export const UserModel: IUserModel = {
  profile: {
    username: "",
    discord: "",
    twitter: "",
    address: "",
  },

  wallet: undefined,
  setWallet: action((state, payload) => {
    state.wallet = payload;
  }),

  nfts: [],
  setNfts: action((state, payload) => {
    const exists = state.nfts.some((nft) => nft.assetId === payload.assetId);
    if (!exists) {
      state.nfts.push(payload);
    }
  }),

  backgroundColor: "--background-color",
  setBackgroundColor: action((state, payload) => {
    state.backgroundColor = payload;
  }),
  favoriteNFTs: [],
  addFavoriteNFT: action((state, payload) => {
    if (state.favoriteNFTs.length < 5) {
      state.favoriteNFTs.push(payload);
    }
  }),
  removeFavorite: action((state, payload) => {
    const index = state.favoriteNFTs
      .map((nft) => nft.assetId)
      .indexOf(payload.assetId);
    state.favoriteNFTs.splice(index, 1);
  }),
  avatar: undefined,
  setAvatar: action((state, payload) => {
    state.avatar = payload;
  }),
  setUserName: action((state, payload) => {
    state.profile.username = payload;
  }),
  loadFavorites: action((state, payload) => {
    const exists = state.favoriteNFTs.some(
      (fav) => fav.assetId === payload.assetId
    );
    if (!exists) state.favoriteNFTs.push(payload);
  }),
  loadAvatar: action((state, payload) => {
    state.avatar = payload;
  }),

  isFetching: true,
  setIsFetching: action((state, payload) => {
    state.isFetching = payload;
  }),
  nftMinted: false,
  setNftMinted: action((state, payload) => {
    state.nftMinted = payload;
  }),
};
