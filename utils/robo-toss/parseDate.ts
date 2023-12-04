import { BigNumber } from "ethers";

export const parseDate = (timestamp: BigNumber): string => {
  const date = new Date(Number(timestamp) * 1000);
  const today = new Date();

  var timeleft = today.getTime() - date.getTime();

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  if (days > 0) {
    return `${days.toString().padStart(2, "0")}d ago`;
  } else if (hours > 0) {
    return `${hours.toString().padStart(2, "0")}h ago`;
  } else if (minutes > 0) {
    return ` ${minutes.toString().padStart(2, "0")}m ago`;
  } else {
    return `${seconds.toString().padStart(2, "0")}s ago`;
  }
};
