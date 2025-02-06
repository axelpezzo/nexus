import React from "react";
import { Tabs } from "@mantine/core";
import { INuiTabs_Props } from "./types";

const NuiTabs = ({ config }: INuiTabs_Props) => {
  return (
    <Tabs
      value={config.activeTab}
      onChange={config.setActiveTab}
      variant="unstyled"
    >
      <Tabs.List grow>
        {config.tabs.map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            className={tab.className || "table_content_tab h-10 uppercase"}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {config.tabs.map((tab) => (
        <Tabs.Panel
          key={tab.value}
          value={tab.value}
          className={tab.panelClassName || "pt-10"}
        >
          {tab.children}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default NuiTabs;
