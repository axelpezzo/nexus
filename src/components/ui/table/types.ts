import type React from "react";

export interface Column<T> {
  key: string;
  title: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  width?: string | number;
}

export interface TableAction {
  label: string;
  value: string;
  onClick: (selectedItems: any[]) => void;
}

export interface GenericTableProps<T> {
  data: T[];
  columns: Column<T>[];
  actions?: TableAction[];
  title?: string;
  onAddNew?: () => void;
  addNewLabel?: string;
  loading?: boolean;
  selectable?: boolean;
  onRowClick?: (item: T) => void;
}
