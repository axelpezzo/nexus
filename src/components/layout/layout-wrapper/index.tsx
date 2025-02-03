"use client";
import { Container, Group, Paper, Title } from "@mantine/core";
import { ILayoutWrapper_Props } from "./types";
import UiButton from "@/components/ui/button";

const LayoutWrapper = ({ title, action, children }: ILayoutWrapper_Props) => {
  return (
    <Container size="full" p="lg">
      <Group justify="space-between" mb="md">
        <Title order={1}>{title}</Title>
        {action && (
          <>
            <UiButton
              color="blue"
              variant="filled"
              href={action.href}
              leftSection={action.icon}
            >
              {action.label}
            </UiButton>
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
