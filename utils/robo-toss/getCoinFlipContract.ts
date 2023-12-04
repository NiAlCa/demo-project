import { Contract, Signer, providers } from "ethers";
import {
  CHAIN_ID,
  RPC_ENDPOINT,
} from "../../public/contracts/marketplace/constants";
import coinFlipAbi from "../../public/contracts/coinflip/RustyCoinflip.json";
import tokenContractAbi from "../../public/contracts/marketplace/abi/RUSTToken.json";

export const COINFLIP_CONTRACT_ADDRESS =
  "0x72e33A653B936DC5C914D348412Efb1Bc31f8360";

export const getCoinFlipContract = async (): Promise<Contract> => {
  const provider = new providers.JsonRpcProvider(RPC_ENDPOINT, CHAIN_ID);

  const contract = new Contract(
    COINFLIP_CONTRACT_ADDRESS,
    coinFlipAbi,
    provider
  );

  return contract;
};

// const MOCK_TOKEN_CONTRACT = "0x798f1d0b5C606D3447a88Bb0deE57200cF586bBe";
// export const getMockTockenContract = async (
//   signer: Signer
// ): Promise<Contract> => {
//   const contract = new Contract(MOCK_TOKEN_CONTRACT, tokenContractAbi, signer);

//   return contract;
// };
