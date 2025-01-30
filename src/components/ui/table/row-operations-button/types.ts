interface ITableRowAction<T> {
  label: string;
  color?: string;
  icon?: React.ReactNode;
  onClick: (item: T) => void;
}

export interface ITableRowAction_Default<T> extends ITableRowAction<T> {
  default: true;
}

export type TableRowAction<T> = [
  ITableRowAction_Default<T>,
  ...ITableRowAction<T>[]
];

export interface IRowOperationsButton_Props<T> {
  item: T;
  actions: TableRowAction<T>;
}
