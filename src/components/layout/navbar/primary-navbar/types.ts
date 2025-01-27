import { MENU_TYPE } from "@/constants/config";
import { Icon, IconProps } from "@tabler/icons-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

export type TPrimaryMenu_Data =
  | IPrimaryMenu_DataLink
  | IPrimaryMenu_DataChildren;

export interface IPrimaryMenu_DataLink extends IPrimaryMenu {
  type: MENU_TYPE.MENU_TYPE_LINK;
  path: string;
}

export interface IPrimaryMenu_DataChildren extends IPrimaryMenu {
  type: MENU_TYPE.MENU_TYPE_CHILDREN;
  children: Array<ISecondayMenu_Data>;
}

export interface IPrimaryMenu {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  label: string;
}

export interface ISecondayMenu_Data {
  label: string;
  path: string;
}

export interface INavbarLink_Props extends IPrimaryMenu {
  path?: string;
  children?: Array<ISecondayMenu_Data>;
  active: boolean | undefined;
  onClick?: () => void;
}
