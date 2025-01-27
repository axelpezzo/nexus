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
        className="block no-underline h-11 leading-[44px] font-semibold rounded-tr-md rounded-br-md text-gray-700 px-4 py-0 hover:bg-gray-200"
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
