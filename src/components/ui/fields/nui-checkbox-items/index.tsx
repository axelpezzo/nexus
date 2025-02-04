import { Checkbox, Group, SimpleGrid, Text } from "@mantine/core";
import { INuiCheckedItems_Props } from "./types";

const NuiCheckedItems = ({
  label,
  description,
  cols = 4,
  size = "md",
  items,
  ...props
}: INuiCheckedItems_Props) => {
  const cards = items.map((item) => (
    <Checkbox.Card
      className="p-2 hover:bg-gray-100"
      value={item.id.toString()}
      key={item.title}
    >
      <Group wrap="nowrap" align="center" gap={size}>
        <Checkbox.Indicator />
        <div>
          <Text className="font-semibold text-sm">{item.title}</Text>
          <Text className="text-xs text-gray-600">{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        size={size}
        label={label}
        description={description}
        {...props}
        styles={{
          label: {
            fontWeight: 600,
          },
        }}
      >
        <SimpleGrid cols={cols} spacing={size} className="mt-4">
          {cards}
        </SimpleGrid>
      </Checkbox.Group>
    </>
  );
};

export default NuiCheckedItems;
