"use client";
import { useState } from "react";
import { ISecondaryNavbar_Props } from "./types";
import { NavbarLink_Submenu } from "../navbar-link";

const SecondaryNavbar = ({ items }: ISecondaryNavbar_Props) => {
  const [active, setActive] = useState(2);

  const links = items.map((link, index) => (
    <NavbarLink_Submenu
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className="w-[16rem] fixed h-full py-2 pr-2 pl-0 flex flex-col top-0 left-[16rem] bg-gray-100">
      <div className="flex-1">
        <ul>{links}</ul>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
