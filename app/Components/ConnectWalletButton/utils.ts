import axios from "axios";
import { ethers } from "ethers";
import { API_ENDPOINT } from "./constants";
import { INFT } from "../Nft/Nft.types";
import { toast } from "react-toastify";

export const connectWallet = async (
  setWallet: (payload: string) => void,
  setIsFetching: (isFetching: boolean) => void
) => {
  try {
    if (window.ethereum == null) {
      toast.info("Please install MetaMask!");
    } else {
      setIsFetching(true);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
      if (chainId !== 148) await SwitchNetwork("0x94");
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const nonce = await getNonce();
      const signature = await signer.signMessage(`nonce: ${nonce}`);

      const signatureData = {
        walletAddress: address,
        message: `nonce: ${nonce}`,
        nonce: nonce,
        signature: signature,
      };

      await axios
        .post(`${API_ENDPOINT}/Auth/connect`, signatureData)
        .then((response) => {
          localStorage.setItem("userToken", response.data.accessToken);
          localStorage.setItem("tokenType", response.data.tokenType);
          localStorage.setItem("expiresIn", response.data.expiresIn);
          localStorage.setItem("refreshToken", response.data.refreshToken);
        })
        .catch((err) => console.error(err.message));
      setWallet(address);
      setIsFetching(false);
    }
  } catch (err: any) {
    console.error(err.message);
  }
};

const getNonce = async () => {
  const nonce = await axios
    .get(`${API_ENDPOINT}/Auth/nonce`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.error(err.meesage));

  return nonce;
};

const SwitchNetwork = async (_chainId: string) => {
  let chainId = _chainId;

  const addNetwork = await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x94",
        rpcUrls: ["https://json-rpc.evm.shimmer.network"],
        chainName: "ShimmerEVM Mainnet",
        nativeCurrency: {
          name: "Shimmer",
          symbol: "SMR",
          decimals: 18,
        },
        blockExplorerUrls: ["https://explorer.evm.shimmer.network/"],
      },
    ],
  });

  await window.ethereum
    .request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainId }],
    })
    .catch((err: any) => {
      if (err.message.startsWith("Unrecognized chain ID")) {
        addNetwork();
      }
    });
};
