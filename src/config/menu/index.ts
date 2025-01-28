import { configurationMenu_links } from "./configuration";
import { defaultMenu_links } from "./default";
import { shopMenu_links } from "./shop";

export * from "./default";
export * from "./shop";
export * from "./configuration";

export const composePrimaryMenus = [
  ...defaultMenu_links,
  ...shopMenu_links,
  ...configurationMenu_links,
];
