"use client";
import UiTable from "@/components/ui/table";
import { ISectionStore_List_Props } from "./types";
import { Store } from "@/app/shop/stores/page-data";
import { bulkActions, columns, rowActions } from "./_config";

const SectionStore_List = ({ data }: ISectionStore_List_Props) => {
  return (
    <UiTable<Store>
      data={data}
      columns={columns}
      bulkActions={bulkActions}
      rowActions={rowActions}
      totalItems={data.length}
    />
  );
};

export default SectionStore_List;
