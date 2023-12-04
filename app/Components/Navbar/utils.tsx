import { ethers } from "ethers";
import {
  getMarketplaceContractV2,
  getNFTContractV2,
  getTokenContractV2,
} from "../../../utils/collection/utils";
import Web3Modal from "web3modal";
import axios from "axios";
import { ISaleState, IToken } from "../Modals/MintNFTModal/MintNFTModal";
import { toast } from "react-toastify";
export function isMetaMaskInstalled(
  setIsInstalled: (isConnected: boolean) => void
) {
  return setIsInstalled(Boolean(window.ethereum && window.ethereum.isMetaMask));
}

export async function isMetaMaskConnected(
  setIsConnected: (isConnected: boolean) => void,
  setWallet: (wallet: string | undefined) => void
) {
  const { ethereum } = window;
  const accounts = await ethereum.request({ method: "eth_accounts" });
  setIsConnected(accounts && accounts.length > 0);
  setWallet(accounts[0]);
}

export async function initialise(
  setWallet: (wallet: string | undefined) => void,
  isConnected: boolean,
  setIsConnected: (isConnected: boolean) => void,
  setIsInstalled: (isConnected: boolean) => void
) {
  isMetaMaskInstalled(setIsInstalled);
  await isMetaMaskConnected(setIsConnected, setWallet);

  if (!isConnected) {
    setWallet(undefined);
  }
}

export const handleBuyNFT = async (
  handleModals: () => void,
  setImagesUrls: (imagesUrls: string[]) => void,
  setErrorMessage: (error: string) => void,
  amountOfNFTS: number | undefined,
  saleState: ISaleState,
  selected: IToken,
  setIsMinting: (isMinting: boolean) => void,
  setNftMinted: (minted: boolean) => void
) => {
  if (amountOfNFTS === undefined || amountOfNFTS <= 0) {
    setErrorMessage("Invalid amount of NFTS");
    return;
  }
  try {
    setIsMinting(true);
    setNftMinted(false);
    const marketplaceContractV2 = await getMarketplaceContractV2();

    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const balance = await signer.getBalance();
    const parsedBalance = Number(ethers.utils.formatEther(balance));
    const multipliedValue = BigInt(selected.price) * BigInt(amountOfNFTS);

    if (selected.symbol === "RUST") {
      /**
       * RUST token selected scenario
       */

      const rustTokenContract = await getTokenContractV2(signer);
      const rustBalance = await rustTokenContract.balanceOf(
        await signer.getAddress()
      );

      if (rustBalance >= multipliedValue) {
        const allowance = await rustTokenContract.allowance(
          await signer.getAddress(),
          marketplaceContractV2.address
        );

        if (Number(allowance) < Number(multipliedValue)) {
          const approve = await rustTokenContract.approve(
            marketplaceContractV2.address,
            ethers.constants.MaxUint256
          );
          await approve.wait();
        }

        const response = await marketplaceContractV2
          .connect(signer)
          .buyNft(saleState.rustData.address, amountOfNFTS, {
            value: 0,
          });
        toast.info("Minting...");

        const tx = await response.wait();
        const event = tx.events.find((x: any) => x.event === "NFTsPurchased");
        const tokens = event.args[1];

        const userImages: string[] = [];
        for (const token in tokens) {
          await axios
            .get(`/metadata/${Number(tokens[token])}`)
            .then((response) => {
              const splitImage = response.data.image.split("//");
              userImages.push(splitImage[1]);
            })
            .catch((err) => console.error(err.message));
        }
        setImagesUrls(userImages);
        handleModals();
        setNftMinted(true);
        setIsMinting(false);
      } else {
        setErrorMessage("You have insufficient funds in your wallet");
      }
    } else if (selected.symbol === "SMR") {
      /**
       * Shimmer token selected scenario
       */

      if (parsedBalance >= 500 * amountOfNFTS) {
        const response = await marketplaceContractV2
          .connect(signer)
          .buyNft(selected.address, amountOfNFTS, {
            value: multipliedValue,
          });
        toast.info("Minting...");

        const tx = await response.wait();
        const event = tx.events.find((x: any) => x.event === "NFTsPurchased");
        const tokens = event.args[1];

        const userImages: string[] = [];
        for (const token in tokens) {
          await axios
            .get(`/metadata/${Number(tokens[token])}`)
            .then((response) => {
              const splitImage = response.data.image.split("//");
              userImages.push(splitImage[1]);
            })
            .catch((err) => console.error(err.message));
        }
        setImagesUrls(userImages);
        handleModals();
        setIsMinting(false);
      } else if (parsedBalance < 500 * amountOfNFTS) {
        setErrorMessage("You have insufficient funds in your wallet");
      }
    }
  } catch (err: any) {
    setIsMinting(false);
    if (String(err.message).includes("user rejected transaction"))
      toast.error("Transaction rejected by user");
    else {
      toast.error("Transaction reverted");
    }
  }
};

export function formatTime(date: Date): string {
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

export async function fetchContract(
  setSaleState: (state: any) => void,
  saleState: any,
  setSelected: (selected: IToken) => void
) {
  setSaleState({ ...saleState, isFetching: true });

  const marketplaceContractV2 = await getMarketplaceContractV2();
  const NFTContractV2 = await getNFTContractV2();
  const isSaleActive = await marketplaceContractV2.isSaleActive();
  const allAssets = await marketplaceContractV2.getAllAssets();
  const totalsupply = await NFTContractV2.totalSupply();
  const saleLeft = await marketplaceContractV2.getSaleLeft();

  setSelected({
    symbol: allAssets[0][1].symbol,
    address: allAssets[0][1].assetAddress,
    price: allAssets[1][1],
  });
  setSaleState({
    active: isSaleActive,
    totalNftSupply: Number(totalsupply),
    saleLeft: Number(saleLeft),
    isFetching: false,
    shimmerData: {
      symbol: allAssets[0][0].symbol,
      address: allAssets[0][0].assetAddress,
      price: allAssets[1][0],
    },
    rustData: {
      symbol: allAssets[0][1].symbol,
      address: allAssets[0][1].assetAddress,
      price: allAssets[1][1],
    },
  });
}
