import NuiSelect from "@/components/ui/fields/nui-select";
import { Paper, Stack } from "@mantine/core";
import { ISubForm_Props } from "./types";
import { countries, languages, paymentMethods } from "../../_const";
import NuiMultiSelect from "@/components/ui/fields/nui-multi-select";
import NuiSwitch from "@/components/ui/fields/nui-switch";
import NuiCheckedItems from "@/components/ui/fields/nui-checkbox-items";

const SubForm_2 = ({ form }: ISubForm_Props) => {
  return (
    <Stack gap="lg">
      <NuiSelect
        required
        label="Default currency"
        placeholder="- Select a value -"
        data={["USD", "EUR", "GBP"]}
        {...form.getInputProps("defaultCurrency")}
      />

      <NuiMultiSelect
        required
        label="Billing countries"
        placeholder="- Select a value -"
        data={countries}
      />

      <NuiSwitch
        label="Prices are entered with taxes included"
        {...form.getInputProps("taxIncluded")}
      />

      <Paper withBorder p="md">
        <NuiCheckedItems
          label="Tax settings enabled"
          description="Select the tax settings enabled for this store."
          items={languages}
          {...form.getInputProps("defaultCurrency")}
        />
      </Paper>

      <Paper withBorder p="md">
        <NuiCheckedItems
          label="Payment methods enabled"
          description="Select the payment methods enabled for this store."
          items={paymentMethods}
          {...form.getInputProps("defaultCurrency")}
        />
      </Paper>
    </Stack>
  );
};

export default SubForm_2;
