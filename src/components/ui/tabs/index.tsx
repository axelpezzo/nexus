import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { INuiTabs_Props } from "./types";

const NuiTabs = ({ config, error }: INuiTabs_Props) => {
  const defaultTab = config.find((tab) => tab.default === true);
  const [activeTab, setActiveTab] = useState<string | null>(
    defaultTab?.value || ""
  );

  return (
    <Tabs value={activeTab} onChange={setActiveTab} variant="unstyled">
      <Tabs.List grow>
        {config.map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            className={
              tab.className ||
              `table-content-tab ${
                error && "table-content-tab-error"
              } first:rounded-l-md last:rounded-r-md border rtl:first:rounded-r-md rtl:last:rounded-l-md rtl:last:border-l rtl:first:border-r h-10 uppercase`
            }
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {config.map((tab) => (
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
