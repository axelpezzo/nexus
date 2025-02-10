import NuiSelect from "@/components/ui/fields/nui-select";
import { Paper, Stack } from "@mantine/core";
import { ISubForm_Props } from "./types";
import { languages, TIMEZONES } from "../../_const";
import NuiCheckedItems from "@/components/ui/fields/nui-checkbox-items";

const SubForm_3 = ({ form }: ISubForm_Props) => {
  return (
    <Stack gap="lg">
      <NuiSelect
        withAsterisk
        label="Timezone"
        data={TIMEZONES}
        {...form.getInputProps("store_timezone")}
        description="Used when determining promotion and tax availability."
      />

      <Paper withBorder p="md">
        <NuiCheckedItems
          cols={4}
          withAsterisk
          label="Languages enabled"
          description="Select the languages enabled for this store."
          items={languages}
          {...form.getInputProps("store_languages")}
        />
      </Paper>
    </Stack>
  );
};

export default SubForm_3;
