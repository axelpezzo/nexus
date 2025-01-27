import { IconLayoutGridFilled } from "@tabler/icons-react";

const SettingsHeader = () => {
  return (
    <>
      <button
        type="button"
        data-dropdown-toggle="apps-dropdown"
        className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      >
        <span className="sr-only">View settings</span>
        <IconLayoutGridFilled />
      </button>
    </>
  );
};

export default SettingsHeader;
