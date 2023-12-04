import { useEffect } from "react";
import { getNFTContract } from "../collection/utils";
import axios from "axios";
import { API_ENDPOINT } from "../../app/Components/ConnectWalletButton/constants";
import { toast } from "react-toastify";
import { useStoreActions, useStoreState } from "../../store";
export const useFetchUserData = () => {
  const { wallet, nftMinted } = useStoreState((state) => state.user);
  const { setNfts, setUserName, loadAvatar, loadFavorites } = useStoreActions(
    (actions) => actions.user
  );

  const fetchUserNfts = async () => {
    try {
      if (wallet) {
        toast.info("Fetching profile...");
        const NFTContract = await getNFTContract();
        /**
         * Fetch User Profile
         */
        let favorites: string[] = [];
        let avatar: string = "";
        await axios
          .get(`${API_ENDPOINT}/UserProfile?walletAddress=${wallet}`)
          .then((response) => {
            setUserName(response.data.displayName);
            const { favoriteNftIds, avatarId } = response.data;
            favorites = favoriteNftIds;
            avatar = avatarId;
          });

        const balance: any = await NFTContract.balanceOf(wallet);
        if (balance > 0) {
          for (let i = 0; i < Number(balance); i++) {
            const tokenId = await NFTContract.tokenOfOwnerByIndex(wallet, i);
            await axios.get(`/metadata/${tokenId}`).then((response) => {
              const { data } = response;
              setNfts(data);

              /**
               * Load favorites
               */
              if (favorites.length !== 0) {
                favorites.forEach((favNFT: string) => {
                  const isFavorite =
                    favNFT.padStart(5, "0") === data.name.split("#")[1];
                  if (isFavorite) {
                    loadFavorites(data);
                  }
                });
              }

              /**
               * Load Avatar from DB
               */
              if (avatar !== "-1") {
                const isAvatar =
                  data.name.split("#")[1] === avatar.padStart(5, "0");
                if (isAvatar) {
                  loadAvatar(data);
                }
              }
            });
          }
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchUserNfts();
  }, [wallet, nftMinted]);
};
