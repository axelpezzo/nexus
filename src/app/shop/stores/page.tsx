import SectionStore_List from "@/components/sections/stores/list";
import { mockData } from "./page-data";
import LayoutWrapper from "@/components/layout/layout-wrapper";

const StoresPage = () => {
  return (
    <LayoutWrapper title="Stores">
      <SectionStore_List data={mockData} />
    </LayoutWrapper>
  );
};

export default StoresPage;
