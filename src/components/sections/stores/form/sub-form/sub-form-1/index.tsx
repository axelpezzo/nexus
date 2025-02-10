import NuiSelect from "@/components/ui/fields/nui-select";
import NuiTextArea from "@/components/ui/fields/nui-text-area";
import NuiTextField from "@/components/ui/fields/nui-text-field";
import { Box, Paper, Stack, Title, Text } from "@mantine/core";
import { ISubForm_Props } from "./types";
import { COUNTRIES } from "../../_const";

const SubForm_1 = ({ form }: ISubForm_Props) => {
  return (
    <Stack gap="lg">
      <NuiTextField
        withAsterisk
        label="Title"
        {...form.getInputProps("store_name")}
      />

      <NuiTextArea
        label="Description"
        {...form.getInputProps("store_description")}
      />

      <NuiTextField
        withAsterisk
        label="Email"
        description="Store email notifications are sent from this address."
        {...form.getInputProps("store_email")}
      />

      <NuiTextField label="Phone" {...form.getInputProps("store_phone")} />

      <Paper withBorder p="md" className="mt-4">
        <Stack gap="lg">
          <Box>
            <Title order={3}>Address</Title>
            <Text size="sm" c="dimmed" className="mt-1">
              Configure tax collection settings for your store
            </Text>
          </Box>

          <NuiSelect
            label="Country"
            data={COUNTRIES}
            {...form.getInputProps("store_address.store_country")}
          />

          <NuiTextField
            label="Province"
            {...form.getInputProps("store_address.store_province")}
          />

          <NuiTextField
            label="Street address"
            {...form.getInputProps("store_address.store_streetAddress1")}
          />

          <NuiTextField
            {...form.getInputProps("store_address.store_streetAddress2")}
          />

          <NuiTextField
            label="City"
            {...form.getInputProps("store_address.store_city")}
          />

          <NuiTextField
            label="Postal code"
            {...form.getInputProps("store_address.store_postalCode")}
          />
        </Stack>
      </Paper>
    </Stack>
  );
};

export default SubForm_1;
