import { INFT } from "../../Nft/Nft.types";

export interface IBaseModal {
  nft?: INFT;
  imagesUrls?: string[];
  setImagesUrls?: (str: string[]) => void;
  onClose?: (bool: boolean) => void;
}
