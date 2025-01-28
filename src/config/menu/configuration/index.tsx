import {
  IconDeviceDesktopAnalytics,
  IconUserCircle,
} from "@tabler/icons-react";
import { MENU_TYPE, TPrimaryMenu_Data } from "@/config/menu/types";

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
