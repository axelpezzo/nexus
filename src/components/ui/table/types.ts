import type React from "react";
import { TableBulkAction } from "./table-bulk-actions/types";
import { TableRowAction } from "./row-operations-button/types";

export interface GenericTableColumn<T> {
  key: string;
  title: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  width?: string | number;
}

export interface GenericTableProps<T> {
  data: T[];
  columns: GenericTableColumn<T>[];
  rowActions: TableRowAction<T>;
  bulkActions?: TableBulkAction<T>[];
  loading?: boolean;
  selectable?: boolean;
  totalItems: number;
  itemsPerPage?: number;
}
