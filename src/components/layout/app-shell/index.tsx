import PrimaryNavbar from "../navbar/primary-navbar";
import { IAppShell_Props } from "./types";

const AppShell = ({ children }: IAppShell_Props) => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <PrimaryNavbar />
      <main className="p-4 md:ml-[18rem] h-auto">{children}</main>
    </div>
  );
};

export default AppShell;
