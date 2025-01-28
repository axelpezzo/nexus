import { IconHome2 } from "@tabler/icons-react";
import { MENU_TYPE, TPrimaryMenu_Data } from "../types";

export const defaultMenu_links: Array<TPrimaryMenu_Data> = [
  {
    id: "default_1",
    type: MENU_TYPE.MENU_TYPE_LINK,
    icon: IconHome2,
    label: "Home",
    path: "/",
  },
];
