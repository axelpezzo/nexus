export interface TableBulkAction {
  label: string;
  value: string;
  onClick: (selectedItems: any[]) => void;
}

export interface TableBulkActions_Props<T> {
  data: T[];
  selectedItems: Set<string | number>;
  actions?: TableBulkAction[];
}
