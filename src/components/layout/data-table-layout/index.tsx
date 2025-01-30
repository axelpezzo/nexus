"use client";
import { Container, Group, Paper, Title } from "@mantine/core";
import { IDataTableLayout_Props } from "./types";
import UiButton from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

const DataTableLayout = ({ title, children }: IDataTableLayout_Props) => {
  return (
    <Container size="full" p="lg">
      <Group justify="space-between" mb="md">
        <Title order={1}>{title}</Title>
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
        {children}
      </Paper>
    </Container>
  );
};

export default DataTableLayout;
