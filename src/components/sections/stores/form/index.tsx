"use client";

import { useForm } from "@mantine/form";
import {
  TextInput,
  Select,
  Stack,
  Box,
  Text,
  Paper,
  Switch,
  Button,
  Grid,
  Accordion,
  MultiSelect,
  Title,
  Tabs,
  Flex,
} from "@mantine/core";
import { useState } from "react";
import NuiTextField from "@/components/ui/fields/nui-text-field";
import NuiTextArea from "@/components/ui/fields/nui-text-area";
import NuiCheckedItems from "@/components/ui/fields/nui-checkbox-items";
import NuiSelect from "@/components/ui/fields/nui-select";
import { languages, paymentMethods } from "./_const";
import NuiMultiSelect from "@/components/ui/fields/nui-multi-select";
import NuiSwitch from "@/components/ui/fields/nui-switch";
import NuiTabs from "@/components/ui/tabs";
import SubForm_1 from "./sub-form/sub-form-1";
import SubForm_2 from "./sub-form/sub-form-2";
import SubForm_3 from "./sub-form/sub-form-3";
import InfoCard_1 from "./info-card/info-card-1";
import InfoCard_2 from "./info-card/info-card-2";

const SectionStore_Form = () => {
  const [activeTab, setActiveTab] = useState<string | null>("info");

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      defaultCurrency: "",
      timezone: "",
      address: {
        country: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        postalCode: "",
      },
      isDefaultStore: false,
      billingCountries: [] as string[],
      taxRegistrations: [] as string[],
      includeTaxInPrice: false,
    },
    validate: {
      name: (value) => (!value ? "Name is required" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      defaultCurrency: (value) => (!value ? "Currency is required" : null),
      timezone: (value) => (!value ? "Timezone is required" : null),
      //"address.country": (value) => (!value ? "Country is required" : null),
      //"address.streetAddress1": (value) => (!value ? "Street address is required" : null),
      //"address.city": (value) => (!value ? "City is required" : null),
    },
  });

  const tabsConfig = {
    activeTab,
    setActiveTab,
    tabs: [
      {
        value: "info",
        label: "Info",
        children: <SubForm_1 form={form} />,
      },
      {
        value: "settings",
        label: "Settings",
        children: <SubForm_2 form={form} />,
      },
      {
        value: "profile",
        label: "Profile",
        children: <SubForm_3 form={form} />,
      },
    ],
  };

  const handleSubmit = form.onSubmit((values) => {
    console.log(values);
    // Handle form submission
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid gutter="xl">
        <Grid.Col span={8}>
          <NuiTabs config={tabsConfig} />
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack>
            <InfoCard_1 />
            <InfoCard_2 form={form} />
            <Box className="mt-4">
              <Flex
                gap="md"
                justify="flex-end"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <Button type="submit" color="gray" size="lg">
                  Reset
                </Button>
                <Button type="submit" color="blue" size="lg">
                  Save
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default SectionStore_Form;
