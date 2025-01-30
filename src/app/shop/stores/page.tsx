import DataTableLayout from "@/components/layout/data-table-layout";
import SectionStore_List from "@/components/sections/stores/list";
import { mockData } from "./page-data";

const StoresPage = () => {
  return (
    <DataTableLayout title="Stores">
      <SectionStore_List data={mockData} />
    </DataTableLayout>
  );
};

export default StoresPage;
