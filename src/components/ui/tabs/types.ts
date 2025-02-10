export interface ITabConfig {
  value: string;
  label: string;
  default?: boolean;
  className?: string;
  panelClassName?: string;
  children: React.ReactNode;
}

export interface INuiTabs_Props {
  config: ITabConfig[];
  error: boolean;
}
