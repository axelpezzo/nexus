import LayoutWrapper from "@/components/layout/layout-wrapper";
import SectionStore_List from "@/components/sections/stores/list";
import { mockData } from "./page-data";
import { ILayoutWrapper_Action } from "@/components/layout/layout-wrapper/types";
import { IconPlus } from "@tabler/icons-react";

const StoresPage = () => {
  const action: ILayoutWrapper_Action = {
    label: "Add store",
    href: "/shop/stores/add",
    icon: <IconPlus size={14} />,
  };

  return (
    <LayoutWrapper title="Stores" action={action}>
      <SectionStore_List data={mockData} />
    </LayoutWrapper>
  );
};

export default StoresPage;
