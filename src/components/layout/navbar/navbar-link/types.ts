import { IPrimaryMenu, ISecondayMenu_Data } from "@/config/menu/types";

export interface INavbarLink_Primary_Props extends IPrimaryMenu {
  path?: string;
  children?: Array<ISecondayMenu_Data>;
  active: boolean | undefined;
  onClick?: () => void;
}

export interface INavbarLink_Submenu_Props extends ISecondayMenu_Data {
  active: boolean | undefined;
  onClick?: () => void;
}
