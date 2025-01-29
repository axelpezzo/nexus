"use client";

import { useState } from "react";
import {
  Table,
  Checkbox,
  Group,
  Button,
  Select,
  Text,
  Box,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { IconChevronDown, IconDots } from "@tabler/icons-react";
import { type GenericTableProps } from "./types";

const UiTable = <T extends { id: string | number }>({
  data,
  columns,
  actions = [],
  selectable = true,
  onRowClick,
}: GenericTableProps<T>) => {
  const [selectedItems, setSelectedItems] = useState<Set<string | number>>(
    new Set()
  );
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const toggleItem = (id: string | number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const toggleAll = () => {
    if (selectedItems.size === data.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(data.map((item) => item.id)));
    }
  };

  const handleActionSelect = (actionValue: string | null) => {
    if (!actionValue) return;
    const action = actions.find((a) => a.value === actionValue);
    if (action) {
      const selectedItemsArray = data.filter((item) =>
        selectedItems.has(item.id)
      );
      action.onClick(selectedItemsArray);
    }
    setSelectedAction(null);
  };

  return (
    <Box pos="relative">
      <Table
        striped
        highlightOnHover
        horizontalSpacing="sm"
        verticalSpacing="md"
      >
        <Table.Thead>
          <Table.Tr>
            {selectable && (
              <Table.Th w={40}>
                <Checkbox
                  onChange={toggleAll}
                  checked={
                    selectedItems.size === data.length && data.length > 0
                  }
                  indeterminate={
                    selectedItems.size > 0 && selectedItems.size < data.length
                  }
                />
              </Table.Th>
            )}
            {columns.map((column) => (
              <Table.Th key={column.key} w={column.width}>
                {column.title}
              </Table.Th>
            ))}
            <Table.Th w={100}>Operations</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((item) => (
            <Table.Tr
              key={item.id}
              onClick={() => onRowClick?.(item)}
              style={onRowClick ? { cursor: "pointer" } : undefined}
            >
              {selectable && (
                <Table.Td>
                  <Checkbox
                    checked={selectedItems.has(item.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleItem(item.id);
                    }}
                  />
                </Table.Td>
              )}
              {columns.map((column) => (
                <Table.Td key={`${item.id}-${column.key}`}>
                  {column.render
                    ? column.render(item)
                    : (item as any)[column.key]}
                </Table.Td>
              ))}
              <Table.Td>
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <ActionIcon variant="subtle" color="gray">
                      <IconDots size={16} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Edit</Menu.Item>
                    <Menu.Item color="red">Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      {selectable && (
        <Group mt="md" align="center">
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
      )}
    </Box>
  );
};

export default UiTable;
