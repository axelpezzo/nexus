export interface ITabConfig {
  value: string;
  label: string;
  className?: string;
  panelClassName?: string;
  children: React.ReactNode;
}

export interface INuiTabs_Props {
  config: {
    activeTab: string | null;
    setActiveTab: (value: string | null) => void;
    tabs: ITabConfig[];
  };
}
