"use client";

import { useState } from "react";
import {
  Table,
  Checkbox,
  Box,
  Pagination,
  Center,
  UnstyledButton,
  Group,
} from "@mantine/core";
import {
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from "@tabler/icons-react";
import { type GenericTableProps } from "./types";
import TableBulkActions from "./table-bulk-actions";
import { sortingHelper } from "@/lib/sorting";
import RowOperationsButton from "./row-operations-button";

const UiTable = <T extends { id: string | number }>({
  data,
  columns,
  rowActions,
  bulkActions = [],
  selectable = true,
  totalItems,
  itemsPerPage = 10,
}: GenericTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedData, setSortedData] = useState(data);
  const [selectedItems, setSelectedItems] = useState<Set<string | number>>(
    new Set()
  );
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const selectedItemsOnCurrentPage = Array.from(selectedItems).filter((item) =>
    paginatedData.some((dataItem) => dataItem.id === item)
  );

  const isIndeterminate =
    selectedItemsOnCurrentPage.length > 0 &&
    selectedItemsOnCurrentPage.length < paginatedData.length;

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
    if (selectedItems.size === paginatedData.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(paginatedData.map((item) => item.id)));
    }
  };

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    sortingHelper<T>(data, key, direction, setSortedData);
  };

  const SortIcon = ({ column }: { column: string }) => {
    if (!sortConfig || sortConfig.key !== column) {
      return <IconSelector size={14} />;
    }
    return sortConfig.direction === "asc" ? (
      <IconChevronUp size={14} />
    ) : (
      <IconChevronDown size={14} />
    );
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
                    selectedItems.size === paginatedData.length &&
                    paginatedData.length > 0
                  }
                  indeterminate={isIndeterminate}
                />
              </Table.Th>
            )}
            {columns.map((column) => (
              <Table.Th key={column.key} w={column.width}>
                {column.sortable ? (
                  <UnstyledButton onClick={() => handleSort(column.key)}>
                    <Group justify="space-between">
                      <span>{column.title}</span>
                      <Center>
                        <SortIcon column={column.key} />
                      </Center>
                    </Group>
                  </UnstyledButton>
                ) : (
                  column.title
                )}
              </Table.Th>
            ))}
            <Table.Th w={100}>Operations</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedData.map((item) => (
            <Table.Tr key={item.id}>
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
                <RowOperationsButton<T> item={item} actions={rowActions} />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      {selectable && (
        <Box className="mt-4">
          <TableBulkActions<T>
            data={data}
            selectedItems={selectedItems}
            actions={bulkActions}
          />
        </Box>
      )}
      <Box className="mt-4">
        <Center>
          <Pagination
            size="sm"
            value={currentPage}
            total={Math.ceil(totalItems / itemsPerPage)}
            onChange={setCurrentPage}
          />
        </Center>
      </Box>
    </Box>
  );
};

export default UiTable;
