"use client";

import { useForm } from "@mantine/form";
import {
  Stack,
  Box,
  Button,
  Grid,
  Flex,
  Paper,
  Text,
  Switch,
} from "@mantine/core";
import NuiTabs from "@/components/ui/tabs";
import { initialValues_form, validationRules_form } from "./config/form";
import { tabsConfig } from "./config/tabs";

const SectionStore_Form = () => {
  const form = useForm({
    initialValues: initialValues_form(""),
    validate: validationRules_form,
  });

  const handleSubmit = form.onSubmit((values) => {
    console.log(values);
    // Handle form submission
  });

  // Determine which tabs have errors
  const errorTabs = Object.keys(form.errors).map((errorKey) => {
    // Assuming each errorKey corresponds to a tab value
    return errorKey;
  });

  console.log(errorTabs);

  return (
    <form onSubmit={handleSubmit}>
      <Grid gutter="xl">
        <Grid.Col span={8}>
          <NuiTabs
            config={tabsConfig(form)}
            error={!form.isValid() && errorTabs.length > 0}
          />
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack>
            <Paper withBorder p="md">
              <Stack>
                <Box>
                  <Text size="sm">Created:</Text>
                  <Text size="sm" c="dimmed">
                    3 Feb 2025 - 10:43
                  </Text>
                </Box>
                <Box>
                  <Text size="sm">Last saved:</Text>
                  <Text size="sm" c="dimmed">
                    3 Feb 2025 - 10:43
                  </Text>
                </Box>
                <Box>
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
                    {...form.getInputProps("store_activeStatus", {
                      type: "checkbox",
                    })}
                  />
                </Box>
                <Box mt="md">
                  <Switch
                    label="Make this the default store"
                    description="New carts will be assigned to this store unless a contributed module or custom code decides otherwise."
                    {...form.getInputProps("store_isDefault", {
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
