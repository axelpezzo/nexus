"use client";
import { useState } from "react";
import {
  Table,
  Checkbox,
  Button,
  Group,
  Title,
  Select,
  Menu,
  Text,
  Container,
  Paper,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import UiButton from "@/components/ui/button";
import { Column } from "@/components/ui/table/types";
import UiTable from "@/components/ui/table";

interface Store {
  id: string;
  name: string;
  updated: string;
}

const columns: Column<Store>[] = [
  {
    key: "name",
    title: "Name",
    sortable: true,
  },
  {
    key: "updated",
    title: "Updated",
    sortable: true,
  },
];

const actions = [
  {
    label: "Delete selected",
    value: "delete",
    onClick: (items: Store[]) => {
      console.log("Delete items:", items);
    },
  },
];

const mockData: Store[] = [
  {
    id: "1",
    name: "Default 1",
    updated: "29 Jan 2025 - 11:15",
  },
  {
    id: "2",
    name: "Default 2",
    updated: "29 Jan 2025 - 11:15",
  },
  {
    id: "3",
    name: "Default 3",
    updated: "29 Jan 2025 - 11:15",
  },
  {
    id: "4",
    name: "Default 4",
    updated: "29 Jan 2025 - 11:15",
  },
  {
    id: "5",
    name: "Default 5",
    updated: "29 Jan 2025 - 11:15",
  },
];

const StoresPage = () => {
  return (
    <Container size="full" p="lg">
      <Group justify="space-between" mb="md">
        <Title order={1}>Stores</Title>
        <UiButton
          color="blue"
          variant="filled"
          href="/shop/stores/add"
          leftSection={<IconPlus size={14} />}
        >
          Add store
        </UiButton>
      </Group>

      <Paper shadow="sm" radius="lg" p="xl">
        <UiTable<Store>
          data={mockData}
          columns={columns}
          actions={actions}
          totalItems={mockData.length}
        />
      </Paper>
    </Container>
  );
};

export default StoresPage;
