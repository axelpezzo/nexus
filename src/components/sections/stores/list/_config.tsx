import { Store } from "@/app/shop/stores/page-data";
import { TableRowAction } from "@/components/ui/table/row-operations-button/types";
import { TableBulkAction } from "@/components/ui/table/table-bulk-actions/types";
import { NuiTableColumn } from "@/components/ui/table/types";
import { IconCopyCheck, IconTrash } from "@tabler/icons-react";

export const columns: NuiTableColumn<Store>[] = [
  {
    key: "name",
    title: "Name",
    sortable: true,
  },
  {
    key: "updated",
    title: "Updated",
    sortable: true,
  },
];

export const bulkActions: TableBulkAction<Store>[] = [
  {
    label: "Delete selected",
    value: "delete",
    onClick: (items: Store[]) => {
      console.log("Delete items:", items);
    },
  },
];

export const rowActions: TableRowAction<Store> = [
  {
    default: true,
    label: "Edit",
    onClick: (item: Store) => {
      console.log("Edit item:", item);
    },
  },
  {
    label: "Duplicate",
    icon: <IconCopyCheck size={14} />,
    onClick: (item: Store) => {
      console.log("Duplicate item:", item);
    },
  },
  {
    label: "Delete",
    color: "red",
    icon: <IconTrash size={14} />,
    onClick: (item: Store) => {
      console.log("Delete item:", item);
    },
  },
];
