"use client";
import { ISecondaryNavbar_Props } from "./types";
import { NavbarLink_Submenu } from "../navbar-link";
import { Title } from "@mantine/core";
import { useUiStore } from "@/components/providers/ui-store-providers";

const SecondaryNavbar = ({ title, items }: ISecondaryNavbar_Props) => {
  const secondaryMenuId = useUiStore((state) => state.secondaryMenu.menuId);
  const setSecondaryMenuId = useUiStore((state) => state.setSecondaryMenuId);
  const setSecondaryMenuOpen = useUiStore(
    (state) => state.setSecondaryMenuOpen
  );

  const handleOnClick = (id: string) => {
    setSecondaryMenuId(id);
    setSecondaryMenuOpen(false);
  };

  const links = items.map((link) => {
    const isActive = secondaryMenuId === link.id;
    return (
      <NavbarLink_Submenu
        {...link}
        key={link.label}
        active={isActive}
        onClick={() => handleOnClick(link.id)}
      />
    );
  });

  return (
    <nav className="w-[18rem] left-0 animate-slide-left fixed h-full py-2 pr-2 pl-0 flex flex-col top-0 bg-gray-100 cursor-default z-[-1] shadow-[0_0_72px_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.04),0_0_40px_rgba(0,0,0,0.06)]">
      <div className="flex-1">
        <Title order={4} className="p-4 text-gray-800">
          {title}
        </Title>
        <ul>{links}</ul>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
