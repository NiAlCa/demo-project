import { BigNumber } from "ethers";

export type TBet = 100 | 250 | 500 | 1000 | 2500;
type TCoin = "heads" | "tails";

export const handleBetSelect = (
  bet: BigNumber,
  setSelected: (num: number) => void,
  setAmount: (bet: BigNumber) => void
) => {
  const parsedBet = Number(bet) / 1000000000000000000;
  switch (parsedBet) {
    case 100:
      setSelected(0);
      setAmount(bet);
      break;
    case 200:
      setSelected(1);
      setAmount(bet);
      break;
    case 400:
      setSelected(2);
      setAmount(bet);
      break;
    case 800:
      setSelected(3);
      setAmount(bet);
      break;
    case 1600:
      setSelected(4);
      setAmount(bet);
      break;
  }
};

export const handleHeadTailsBet = (
  bet: TCoin,
  setHeadsBet: (bool: boolean) => void,
  setTailsBet: (bool: boolean) => void
) => {
  switch (bet) {
    case "heads":
      setHeadsBet(true);
      setTailsBet(false);
      break;
    case "tails":
      setHeadsBet(false);
      setTailsBet(true);
      break;
  }
};
