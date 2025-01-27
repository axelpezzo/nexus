"use client";
import { Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { NavbarLink_Children, NavbarLink_Link } from "./navbar-link";
import {
  defaultMenu_links,
  shopMenu_links,
  configurationMenu_links,
  menus,
} from "./consts";
import {
  TPrimaryMenu_Data,
  IPrimaryMenu_DataLink,
  IPrimaryMenu_DataChildren,
} from "./types";
import { useUiStore } from "@/components/providers/ui-store-providers";
import { MENU_TYPE } from "@/constants/config";
import _ from "lodash";

const PrimaryNavbar = () => {
  const {
    primaryMenu: { menuId },
    setPrimaryMenuId,
  } = useUiStore((state) => state);

  const retriveLinks = (obj: Array<TPrimaryMenu_Data>) => {
    return obj.map((link: TPrimaryMenu_Data, index: number) => {
      const isActive = menuId === link.id;
      if (link.type === "MENU_TYPE_LINK") {
        return (
          <NavbarLink_Link
            id={link.id}
            label={link.label}
            key={link.label}
            icon={link.icon}
            active={isActive}
            path={(link as IPrimaryMenu_DataLink).path}
            onClick={() => setPrimaryMenuId(link.id)}
          />
        );
      } else {
        // If the current items is active (for performance purpose) and has children
        // it retrives them and pass as props to the NavbarLink_Children component
        const children = isActive
          ? (
              _.find(menus, {
                id: menuId,
                type: MENU_TYPE.MENU_TYPE_CHILDREN,
              }) as IPrimaryMenu_DataChildren
            ).children
          : undefined;

        return (
          <NavbarLink_Children
            id={link.id}
            label={link.label}
            key={link.label}
            icon={link.icon}
            active={isActive}
            children={children}
            onClick={() => setPrimaryMenuId(link.id)}
          />
        );
      }
    });
  };

  return (
    <nav className="w-[16rem] h-full py-2 px-2 flex flex-col bg-blue-500 fixed">
      <div className="flex-1">
        <Group className="pt-2 px-2 pb-4 mb-2 border-b border-blue-200 space-between">
          <MantineLogo size={28} inverted style={{ color: "white" }} />
        </Group>
        <ul>{retriveLinks(defaultMenu_links)}</ul>
        <div className="text-blue-200 font-semibold text-xs ml-4 my-4">
          SHOP
        </div>
        <ul>{retriveLinks(shopMenu_links)}</ul>
        <div className="text-blue-200 font-semibold text-xs ml-4 my-4">
          CONFIGURATION
        </div>
        <ul>{retriveLinks(configurationMenu_links)}</ul>
      </div>

      <div className="pt-2 mt-2 border-t-1 border-blue-700"></div>
    </nav>
  );
};

export default PrimaryNavbar;
