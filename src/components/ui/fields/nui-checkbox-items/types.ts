import { CheckboxGroupProps, MantineSize } from "@mantine/core";

export interface INuiCheckedItems_Props
  extends Omit<CheckboxGroupProps, "children"> {
  label: string;
  description: string;
  cols?: number;
  size?: MantineSize;
  items: Array<INuiCheckedItems>;
}

export interface INuiCheckedItems {
  id: number;
  title: string;
  description: string;
}
