import Link from "next/link";
import { INavbarLink_Props } from "./types";

export const NavbarLink = ({
  path,
  label,
  active,
  onClick,
}: INavbarLink_Props) => {
  return (
    <li key={label}>
      <Link
        className="block no-underline font-medium h-11 leading-[44px] rounded-tr-md rounded-br-md text-gray-700 px-4 py-0"
        data-active={active}
        href={path || ""}
        key={label}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};
