import { useState } from "react";
import { Checkbox, Group, SimpleGrid, Stack, Text } from "@mantine/core";

const data = [
  {
    name: "Italian",
    description: "it-IT",
  },
  {
    name: "English",
    description: "en-GB",
  },
  {
    name: "German",
    description: "de-DE",
  },
  {
    name: "French",
    description: "fr-FR",
  },
  {
    name: "Portuguese",
    description: "pt-PT",
  },
  {
    name: "Spanish",
    description: "es-ES",
  },
];

const NuiCheckedItems = () => {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card
      className="p-2 hover:bg-gray-100"
      value={item.name}
      key={item.name}
    >
      <Group wrap="nowrap" align="flex-start" gap="xs">
        <Checkbox.Indicator />
        <div>
          <Text className="font-semibold text-sm">{item.name}</Text>
          <Text className="text-xs text-gray-600">{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <SimpleGrid cols={4} spacing="xs" className="mt-4">
          {cards}
        </SimpleGrid>
      </Checkbox.Group>
    </>
  );
};

export default NuiCheckedItems;
