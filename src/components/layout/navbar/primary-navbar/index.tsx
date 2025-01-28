"use client";
import { Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { NavbarLink_Children, NavbarLink_Link } from "../navbar-link";
import {
  defaultMenu_links,
  shopMenu_links,
  configurationMenu_links,
} from "@/config/menu";
import { useUiStore } from "@/components/providers/ui-store-providers";
import { IPrimaryMenu_DataLink, TPrimaryMenu_Data } from "@/config/menu/types";
import { useGetMenuChildren, useOutsideClick } from "./hooks";
import _ from "lodash";
import { useCallback } from "react";

const PrimaryNavbar = () => {
  const primaryMenuId = useUiStore((state) => state.primaryMenu.menuId);
  const secondaryMenuOpen = useUiStore((state) => state.secondaryMenu.open);
  const setPrimaryMenuId = useUiStore((state) => state.setPrimaryMenuId);
  const setSecondaryMenuOpen = useUiStore(
    (state) => state.setSecondaryMenuOpen
  );

  const handleOnClick = useCallback(
    (id: string) => {
      setPrimaryMenuId(id);
      // Performe the Secondary Menu Open only when it's close
      // or when current id and the stored id are different
      (id !== primaryMenuId || !secondaryMenuOpen) &&
        setSecondaryMenuOpen(true);
    },
    [primaryMenuId, secondaryMenuOpen]
  );

  const handleClickOutside = () => {
    setSecondaryMenuOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const retriveLinks = (obj: Array<TPrimaryMenu_Data>) => {
    return obj.map((link: TPrimaryMenu_Data) => {
      const isActive = primaryMenuId === link.id;
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
          ? useGetMenuChildren(primaryMenuId)
          : undefined;

        return (
          <NavbarLink_Children
            id={link.id}
            label={link.label}
            key={link.label}
            icon={link.icon}
            active={isActive}
            children={children}
            onClick={() => handleOnClick(link.id)}
          />
        );
      }
    });
  };

  return (
    <nav className="w-[18rem] h-full fixed z-50" ref={ref}>
      <div className="p-2 bg-blue-500 flex flex-col h-full">
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
      </div>
    </nav>
  );
};

export default PrimaryNavbar;
