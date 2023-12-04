import { providers, Contract, Signer } from "ethers";
import {
  CHAIN_ID,
  MARKETPLACE_CONTRACT_ADDRESS_V2,
  NFT_CONTRACT_ADDRESS_V2,
  RPC_ENDPOINT,
  RUST_TOKEN_CONTRACT_ADDRESS_V2,
} from "../../public/contracts/marketplace/constants";
import NFTAbi from "../../public/contracts/marketplace/abi/RRCCNftToken.json";
import MarketplaceAbiv2 from "../../public/contracts/marketplace/abi/RRCCMarketplaceV2.json";
import tokenContractAbi from "../../public/contracts/marketplace/abi/RUSTToken.json";

export const getNFTContract = async (): Promise<Contract> => {
  const provider = new providers.JsonRpcProvider(RPC_ENDPOINT, CHAIN_ID);

  const contract = new Contract(NFT_CONTRACT_ADDRESS_V2, NFTAbi.abi, provider);

  return contract;
};

export const getMarketplaceContractV2 = async (): Promise<Contract> => {
  const provider = new providers.JsonRpcProvider(RPC_ENDPOINT, CHAIN_ID);

  const contract = new Contract(
    MARKETPLACE_CONTRACT_ADDRESS_V2,
    MarketplaceAbiv2,
    provider
  );

  return contract;
};

export const getNFTContractV2 = async (): Promise<Contract> => {
  const provider = new providers.JsonRpcProvider(RPC_ENDPOINT, CHAIN_ID);

  const contract = new Contract(NFT_CONTRACT_ADDRESS_V2, NFTAbi.abi, provider);

  return contract;
};

export const getTokenContractV2 = async (signer: Signer): Promise<Contract> => {
  const contract = new Contract(
    RUST_TOKEN_CONTRACT_ADDRESS_V2,
    tokenContractAbi,
    signer
  );

  return contract;
};
