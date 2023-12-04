import { Action } from "easy-peasy";

export interface IUIModel {
  isMenuOpen: boolean;
  setIsMenuOpen: Action<IUIModel, boolean>;

  isDetailedModalOpen: boolean;
  setIsDetailedModalOpen: Action<IUIModel, boolean>;

  isConfirmationModalOpen: boolean;
  setIsConfirmationModalOpen: Action<IUIModel, boolean>;

  setSelectedMethod: Action<IUIModel, "name" | "rarity">;
  selectedMethod: "name" | "rarity";

  isMintModalOpen: boolean;
  setMintModalOpen: Action<IUIModel, boolean>;

  isSelectNFTModalOpen: boolean;
  setSelectNFTModalOpen: Action<IUIModel, boolean>;
}
