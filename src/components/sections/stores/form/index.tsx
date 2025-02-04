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

const COUNTRIES = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria",
  // ... add more countries
];

const TIMEZONES = [
  "Rome",
  "London",
  "New York",
  // ... add more timezones
];

const countries = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
];

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

  const handleSubmit = form.onSubmit((values) => {
    console.log(values);
    // Handle form submission
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid gutter="xl">
        <Grid.Col span={8}>
          <Tabs value={activeTab} onChange={setActiveTab} variant="unstyled">
            <Tabs.List grow>
              <Tabs.Tab
                value="info"
                className="table_content_tab h-10 uppercase"
              >
                Info
              </Tabs.Tab>

              <Tabs.Tab
                value="payment_billing"
                className="table_content_tab h-10 uppercase"
              >
                Payment & billing
              </Tabs.Tab>

              <Tabs.Tab
                value="localization"
                className="table_content_tab h-10 uppercase"
              >
                Localization
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="info" className="pt-10">
              <Stack>
                <NuiTextField
                  required
                  label="Title"
                  {...form.getInputProps("title")}
                />

                <NuiTextArea
                  label="Description"
                  {...form.getInputProps("description")}
                />

                <NuiTextField
                  required
                  label="Email"
                  description="Store email notifications are sent from this address."
                  {...form.getInputProps("email")}
                />

                <NuiTextField label="Phone" {...form.getInputProps("phone")} />

                <Paper withBorder p="md" className="mt-4">
                  <Stack>
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

                    <NuiTextField
                      {...form.getInputProps("address.streetAddress2")}
                    />

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
            </Tabs.Panel>

            <Tabs.Panel value="payment_billing" className="pt-10">
              <Stack>
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
                  <Stack>
                    <NuiCheckedItems
                      label="Tax settings enabled"
                      description="Select the tax settings enabled for this store."
                      items={languages}
                      {...form.getInputProps("defaultCurrency")}
                    />
                  </Stack>
                </Paper>

                <Paper withBorder p="md">
                  <Stack>
                    <NuiCheckedItems
                      label="Payment methods enabled"
                      description="Select the payment methods enabled for this store."
                      items={paymentMethods}
                      {...form.getInputProps("defaultCurrency")}
                    />
                  </Stack>
                </Paper>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="localization" className="pt-10">
              <Stack>
                <NuiSelect
                  required
                  label="Timezone"
                  data={TIMEZONES}
                  {...form.getInputProps("timezone")}
                  description="Used when determining promotion and tax availability."
                />

                <Paper withBorder p="md">
                  <NuiCheckedItems
                    cols={4}
                    label="Languages enabled"
                    description="Select the languages enabled for this store."
                    items={languages}
                    {...form.getInputProps("defaultCurrency")}
                  />
                </Paper>
              </Stack>
            </Tabs.Panel>
          </Tabs>
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack>
            <Paper withBorder p="md">
              <Stack>
                <Box>
                  <Text size="sm">Created:</Text>
                  <Text size="sm" color="dimmed">
                    3 Feb 2025 - 10:43
                  </Text>
                </Box>
                <Box mt="md">
                  <Text size="sm">Last saved:</Text>
                  <Text size="sm" color="dimmed">
                    3 Feb 2025 - 10:43
                  </Text>
                </Box>
                <Box mt="md">
                  <Text size="sm">Owner:</Text>
                  <Text size="sm" c="dimmed">
                    admin
                  </Text>
                </Box>
              </Stack>
            </Paper>
            <Paper withBorder p="md">
              <Stack>
                <Box>
                  <Switch
                    label="Store is active"
                    description=""
                    {...form.getInputProps("isDefaultStore", {
                      type: "checkbox",
                    })}
                  />
                </Box>
                <Box mt="md">
                  <Switch
                    label="Make this the default store"
                    description="New carts will be assigned to this store unless a contributed module or custom code decides otherwise."
                    {...form.getInputProps("isDefaultStore", {
                      type: "checkbox",
                    })}
                  />
                </Box>
              </Stack>
            </Paper>
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
