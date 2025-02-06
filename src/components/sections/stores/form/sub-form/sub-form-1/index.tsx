import NuiSelect from "@/components/ui/fields/nui-select";
import NuiTextArea from "@/components/ui/fields/nui-text-area";
import NuiTextField from "@/components/ui/fields/nui-text-field";
import { Box, Paper, Stack, Title, Text } from "@mantine/core";
import { ISubForm_Props } from "./types";
import { COUNTRIES } from "../../_const";

const SubForm_1 = ({ form }: ISubForm_Props) => {
  return (
    <Stack gap="lg">
      <NuiTextField required label="Title" {...form.getInputProps("title")} />

      <NuiTextArea label="Description" {...form.getInputProps("description")} />

      <NuiTextField
        required
        label="Email"
        description="Store email notifications are sent from this address."
        {...form.getInputProps("email")}
      />

      <NuiTextField label="Phone" {...form.getInputProps("phone")} />

      <Paper withBorder p="md" className="mt-4">
        <Stack gap="lg">
          <Box>
            <Title order={3}>Address</Title>
            <Text size="sm" c="dimmed" className="mt-1">
              Configure tax collection settings for your store
            </Text>
          </Box>

          <NuiSelect
            required
            label="Country"
            data={COUNTRIES}
            {...form.getInputProps("address.country")}
          />

          <NuiTextField
            required
            label="Street address"
            {...form.getInputProps("address.streetAddress1")}
          />

          <NuiTextField {...form.getInputProps("address.streetAddress2")} />

          <NuiTextField
            required
            label="City"
            {...form.getInputProps("address.city")}
          />

          <NuiTextField
            label="Postal code"
            {...form.getInputProps("address.postalCode")}
          />
        </Stack>
      </Paper>
    </Stack>
  );
};

export default SubForm_1;
