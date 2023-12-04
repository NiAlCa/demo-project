import { action } from "easy-peasy";
import { IUIModel } from "./ui.types";

export const UIModel: IUIModel = {
  isMenuOpen: false,
  setIsMenuOpen: action((state, payload) => {
    state.isMenuOpen = payload;
  }),

  isDetailedModalOpen: false,
  setIsDetailedModalOpen: action((state, payload) => {
    state.isDetailedModalOpen = payload;
  }),

  selectedMethod: "name",
  setSelectedMethod: action((state, payload) => {
    state.selectedMethod = payload;
  }),
  isConfirmationModalOpen: false,
  setIsConfirmationModalOpen: action((state, payload) => {
    state.isConfirmationModalOpen = payload;
  }),
  isMintModalOpen: false,
  setMintModalOpen: action((state, payload) => {
    state.isMintModalOpen = payload;
  }),
  isSelectNFTModalOpen: false,
  setSelectNFTModalOpen: action((state, payload) => {
    state.isSelectNFTModalOpen = payload;
  }),
};
