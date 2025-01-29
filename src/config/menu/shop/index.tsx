import {
  IconBuildingStore,
  IconCubeSpark,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { MENU_TYPE, TPrimaryMenu_Data } from "../types";

export const shopMenu_links: Array<TPrimaryMenu_Data> = [
  {
    id: "shop_products",
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
    icon: IconShoppingCart,
    label: "Products",
    children: [
      { id: "shop_products_list", label: "Products", path: "/shop/products" },
      {
        id: "shop_products_categories",
        label: "Product Categories",
        path: "/shop/products/categories",
      },
      {
        id: "shop_products_options",
        label: "Product Options",
        path: "/shop/products/options",
      },
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
    id: "shop_stores",
    type: MENU_TYPE.MENU_TYPE_LINK,
    icon: IconBuildingStore,
    label: "Stores",
    path: "/shop/stores",
  },
];
