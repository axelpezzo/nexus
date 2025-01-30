"use client";
import { ActionIcon, Button, Menu } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import {
  IRowOperationsButton_Props,
  ITableRowAction_Default,
  TableRowAction,
} from "./types";
import { useState } from "react";

const RowOperationsButton = <T extends { id: string | number }>({
  item,
  actions,
}: IRowOperationsButton_Props<T>) => {
  const [opened, setOpened] = useState(false);

  const defaultAction = actions.find(
    (action) => (action as ITableRowAction_Default<T>).default
  );

  const handleDefault = (action: TableRowAction<T>[number]) => {
    action.onClick(item);
  };

  const handleOnClick = (action: TableRowAction<T>[number]) => {
    action.onClick(item);
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        size="xs"
        variant="light"
        onClick={() =>
          handleDefault(defaultAction as ITableRowAction_Default<T>)
        }
        className="hover:bg-blue-500 hover:text-blue-50"
      >
        {defaultAction?.label}
      </Button>
      <Menu opened={opened} onChange={setOpened} shadow="md" width={160}>
        <Menu.Target>
          <ActionIcon variant="subtle" color={opened ? "blue" : "gray"}>
            {opened ? (
              <IconChevronUp size={16} />
            ) : (
              <IconChevronDown size={16} />
            )}
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          {actions
            .filter((action) => !(action as ITableRowAction_Default<T>).default)
            .map((action, index) => (
              <Menu.Item
                key={index}
                leftSection={action.icon}
                color={action.color}
                onClick={() => handleOnClick(action)}
              >
                {action.label}
              </Menu.Item>
            ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default RowOperationsButton;
