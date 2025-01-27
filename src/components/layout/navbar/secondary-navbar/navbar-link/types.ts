import { ISecondayMenu_Data } from "../../primary-navbar/types";

export interface INavbarLink_Props extends ISecondayMenu_Data {
  active: boolean | undefined;
  onClick?: () => void;
}
