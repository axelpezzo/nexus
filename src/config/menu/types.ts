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
  id: string;
  icon: React.ReactNode;
  label: string;
}

export interface ISecondayMenu_Data {
  id: string;
  label: string;
  path: string;
}

export enum MENU_TYPE {
  MENU_TYPE_LINK = "MENU_TYPE_LINK",
  MENU_TYPE_CHILDREN = "MENU_TYPE_CHILDREN",
}
