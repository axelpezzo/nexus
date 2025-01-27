"use client";
import { useState } from "react";
import { NavbarLink } from "./navbar-link";
import { ISecondaryNavbar_Props } from "./types";

const SecondaryNavbar = ({ items }: ISecondaryNavbar_Props) => {
  const [active, setActive] = useState(2);

  const links = items.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className="w-[16rem] fixed h-full py-2 px-2 flex flex-col top-0 left-[16rem] bg-gray-100">
      <div className="flex-1">
        <ul>{links}</ul>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
