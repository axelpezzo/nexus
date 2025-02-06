"use client";
import { Container, Group, Paper, Title } from "@mantine/core";
import { ILayoutWrapper_Props } from "./types";
import NuiButton from "@/components/ui/button";

const LayoutWrapper = ({ title, action, children }: ILayoutWrapper_Props) => {
  return (
    <Container size="full" p="lg">
      <Group justify="space-between" mb="md">
        <Title order={1}>{title}</Title>
        {action && (
          <>
            <NuiButton
              color="blue"
              variant="filled"
              href={action.href}
              leftSection={action.icon}
            >
              {action.label}
            </NuiButton>
          </>
        )}
      </Group>

      <Paper shadow="sm" radius="lg" p="xl">
        {children}
      </Paper>
    </Container>
  );
};

export default LayoutWrapper;
