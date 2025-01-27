import {
  IconMenu2,
  IconBellFilled,
  IconLayoutGridFilled,
} from "@tabler/icons-react";
import NotificationHeader from "./notifications-header";
import SettingsHeader from "./settings-header";
import AccountHeader from "./account-header";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <IconMenu2 />
          </button>
          <a
            href="https://flowbite.com"
            className="flex items-center justify-between mr-4"
          >
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              className="mr-3 h-8"
              alt="NEXUS Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              NEXUS
            </span>
          </a>
        </div>
        <div className="flex items-center lg:order-2">
          <NotificationHeader />

          <SettingsHeader />

          <AccountHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
