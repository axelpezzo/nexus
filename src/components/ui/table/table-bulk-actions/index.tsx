"use client";

import { useState } from "react";
import { Group, Button, Select, Text, Paper } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { TableBulkActions_Props } from "./types";

const TableBulkActions = <T extends { id: string | number }>({
  data,
  selectedItems,
  actions = [],
}: TableBulkActions_Props<T>) => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleActionSelect = (actionValue: string | null) => {
    if (!actionValue) return;
    const action = actions.find((a) => a.value === actionValue);
    if (action) {
      const selectedItemsArray = data.filter((item) =>
        selectedItems.has(item.id)
      );
      action.onClick(selectedItemsArray);
    }
    setSelectedAction(actionValue);
  };

  return (
    <Paper radius="md" p="md" bg={"gray.2"}>
      <Group align="center">
        <Text size="xs">
          {selectedItems.size === 0
            ? "No items selected"
            : `${selectedItems.size} items selected`}
        </Text>

        <Text size="xs" fw={700}>
          With selection:
        </Text>
        <Select
          size="xs"
          w={200}
          clearable
          value={selectedAction}
          placeholder="- Select -"
          rightSection={<IconChevronDown size={14} />}
          onChange={handleActionSelect}
          data={actions.map((action) => ({
            value: action.value,
            label: action.label,
          }))}
        />
        <Button
          size="xs"
          disabled={!selectedAction || selectedItems.size === 0}
          onClick={() => handleActionSelect(selectedAction)}
        >
          Apply to selected items
        </Button>
      </Group>
    </Paper>
  );
};

export default TableBulkActions;
