import {
  IconBuildingStore,
  IconCubeSpark,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { MENU_TYPE, TPrimaryMenu_Data } from "../types";

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
