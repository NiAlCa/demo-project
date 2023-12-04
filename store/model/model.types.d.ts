import { Action } from "easy-peasy";
import { IUserModel } from "./user/user.types";
import { IUIModel } from "./ui/ui.types";

export interface IStoreModel {
  user: IUserModel;
  ui: IUIModel;
}
