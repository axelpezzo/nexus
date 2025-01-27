import { IconChevronRight } from "@tabler/icons-react";
import { INavbarLink_Props } from "../types";
import Link from "next/link";
import { UnstyledButton } from "@mantine/core";
import SecondaryNavbar from "../../secondary-navbar";
import { act } from "react";

export const NavbarLink_Link = ({
  id,
  icon: Icon,
  path,
  label,
  active,
  onClick,
}: INavbarLink_Props) => {
  return (
    <li key={id}>
      <Link
        className="group rounded-lg flex items-center justify-between text-sm p-3 font-semibold text-white hover:bg-blue-600 active:bg-blue-600 data-[active=true]:bg-white data-[active=true]:text-blue-600"
        data-active={active}
        href={path || ""}
        onClick={onClick}
      >
        <div className="flex items-center">
          <Icon
            className="text-blue-200 mr-2 group-data-[active=true]:text-blue-600"
            size={24}
            stroke={2}
          />
          <span>{label}</span>
        </div>
      </Link>
    </li>
  );
};

export const NavbarLink_Children = ({
  id,
  icon: Icon,
  label,
  active,
  children,
  onClick,
}: INavbarLink_Props) => {
  console.log(id);
  console.log(active);
  return (
    <li key={id}>
      <UnstyledButton
        className="group rounded-lg w-full flex items-center justify-between text-sm p-3 font-semibold text-white hover:bg-blue-600 data-[active=true]:bg-white data-[active=true]:text-blue-600"
        data-active={active}
        onClick={onClick}
      >
        <div className="flex items-center">
          <Icon
            className="text-blue-200 mr-2 group-data-[active=true]:text-blue-600"
            size={24}
            stroke={2}
          />
          <span>{label}</span>
        </div>
        {children && <IconChevronRight size={16} stroke={3} />}
        {children && <SecondaryNavbar items={children} />}
      </UnstyledButton>
    </li>
  );
};
