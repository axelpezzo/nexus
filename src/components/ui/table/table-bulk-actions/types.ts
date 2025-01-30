export interface TableBulkAction<T> {
  label: string;
  value: string;
  onClick: (selectedItems: T[]) => void;
}

export interface TableBulkActions_Props<T> {
  data: T[];
  selectedItems: Set<string | number>;
  actions?: TableBulkAction<T>[];
}
