import {
  IconCubeSpark,
  IconDeviceDesktopAnalytics,
  IconShoppingCart,
  IconBuildingStore,
  IconUserCircle,
  IconHome2,
  IconUser,
} from "@tabler/icons-react";
import { TPrimaryMenu_Data } from "./types";
import { MENU_TYPE } from "@/constants/config";

export const defaultMenu_links: Array<TPrimaryMenu_Data> = [
  {
    id: "default_1",
    type: MENU_TYPE.MENU_TYPE_LINK,
    icon: IconHome2,
    label: "Home",
    path: "/",
  },
];

export const shopMenu_links: Array<TPrimaryMenu_Data> = [
  {
    id: "shop_1",
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
    icon: IconShoppingCart,
    label: "Products",
    children: [
      { label: "Upcoming releases", path: "/" },
      { label: "Previous releases", path: "/" },
      { label: "Releases schedule", path: "/" },
    ],
  },
  {
    id: "shop_2",
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
    icon: IconCubeSpark,
    label: "Orders",
    children: [],
  },
  {
    id: "shop_3",
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
    icon: IconUser,
    label: "Customers",
    children: [],
  },
  {
    id: "shop_4",
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
    icon: IconBuildingStore,
    label: "Stores",
    children: [],
  },
];

export const configurationMenu_links: Array<TPrimaryMenu_Data> = [
  {
    id: "conf_1",
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
    icon: IconDeviceDesktopAnalytics,
    label: "Analytics",
    children: [],
  },
  {
    id: "conf_2",
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
    icon: IconUserCircle,
    label: "Accounts",
    children: [],
  },
];

export const menus = [
  ...defaultMenu_links,
  ...shopMenu_links,
  ...configurationMenu_links,
];
