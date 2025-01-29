import { TableAction } from "../types";

export interface TableBulkActions_Props<T> {
  data: T[];
  selectedItems: Set<string | number>;
  actions?: TableAction[];
}
