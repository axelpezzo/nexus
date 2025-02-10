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
        withAsterisk
        label="Default currency"
        placeholder="- Select a value -"
        data={["USD", "EUR", "GBP"]}
        {...form.getInputProps("store_defaultCurrency")}
      />

      <NuiMultiSelect
        withAsterisk
        label="Billing countries"
        placeholder="- Select a value -"
        data={countries}
        {...form.getInputProps("store_billingCountries")}
      />

      <NuiSwitch
        label="Prices are entered with taxes included"
        {...form.getInputProps("store_includeTaxInPrice")}
      />

      <Paper withBorder p="md">
        <NuiCheckedItems
          cols={2}
          label="Tax settings enabled"
          description="Select the tax settings enabled for this store."
          items={languages}
          {...form.getInputProps("store_taxSettings")}
        />
      </Paper>

      <Paper withBorder p="md">
        <NuiCheckedItems
          cols={2}
          label="Payment methods enabled"
          description="Select the payment methods enabled for this store."
          items={paymentMethods}
          {...form.getInputProps("store_paymentMethods")}
        />
      </Paper>
    </Stack>
  );
};

export default SubForm_2;
