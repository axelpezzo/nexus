import SectionStore_List from "@/components/sections/stores/list";
import { mockData } from "./page-data";
import LayoutWrapper from "@/components/layout/layout-wrapper";
import { ILayoutWrapper_Action } from "@/components/layout/layout-wrapper/types";
import { IconPlus } from "@tabler/icons-react";

const StoresPage = () => {
  const addStore: ILayoutWrapper_Action = {
    label: "Add Store",
    href: "/shop/stores/add",
    icon: <IconPlus />,
  };

  return (
    <LayoutWrapper title="Stores" action={addStore}>
      <SectionStore_List data={mockData} />
    </LayoutWrapper>
  );
};

export default StoresPage;
