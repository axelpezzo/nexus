import { Store } from "@/app/api/mock/store/get/mock-data";
import {
  ITableRowAction_Callbacks,
  TableRowAction,
} from "@/components/ui/table/row-operations-button/types";
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

export function rowActions<T>(
  callbacks: ITableRowAction_Callbacks<T>
): TableRowAction<T> {
  return [
    {
      default: true,
      label: "Edit",
      onClick: (item: T) => {
        callbacks.onEdit(item);
      },
    },
    {
      label: "Duplicate",
      icon: <IconCopyCheck size={14} />,
      onClick: (item: T) => {
        callbacks.onDuplicate(item);
      },
    },
    {
      label: "Delete",
      color: "red",
      icon: <IconTrash size={14} />,
      onClick: (item: T) => {
        callbacks.onDelete(item);
      },
    },
  ];
}
