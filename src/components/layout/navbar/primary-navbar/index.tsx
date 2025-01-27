"use client";
import { useState } from "react";
import { Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { NavbarLink_Children, NavbarLink_Link } from "./navbar-link";
import {
  defaultMenu_links,
  shopMenu_links,
  configurationMenu_links,
} from "./consts";
import {
  TPrimaryMenu_Data,
  IPrimaryMenu_DataLink,
  IPrimaryMenu_DataChildren,
} from "./types";
import { useUiStore } from "@/components/providers/ui-store-providers";

const PrimaryNavbar = () => {
  const [active, setActive] = useState(2);

  const { primaryMenu, setPrimaryMenuId } = useUiStore((state) => state);

  console.log(primaryMenu);

  const retriveLinks = (obj: Array<TPrimaryMenu_Data>) => {
    return obj.map((link: TPrimaryMenu_Data, index: number) => {
      if (link.type === "MENU_TYPE_LINK") {
        return (
          <NavbarLink_Link
            id={link.id}
            path={(link as IPrimaryMenu_DataLink).path}
            label={link.label}
            key={link.label}
            icon={link.icon}
            active={index === active}
            onClick={() => setActive(index)}
          />
        );
      } else {
        return (
          <NavbarLink_Children
            id={link.id}
            label={link.label}
            key={link.label}
            icon={link.icon}
            children={(link as IPrimaryMenu_DataChildren).children}
            active={index === active}
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
