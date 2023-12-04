import { IStoreModel } from "./model.types";
import { UserModel } from "./user/user.store";
import { UIModel } from "./ui/ui.store";
import { persist } from "easy-peasy";

export const model: IStoreModel = {
  user: persist(UserModel),
  ui: UIModel,
};
