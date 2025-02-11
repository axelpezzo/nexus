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
import { postStore } from "@/app/shop/stores/add/actions";
import { redirect } from "next/navigation";
import { API_STATUS } from "@/config/settings";
import { getApiStatusMessage } from "@/lib/apis";
import { notifications } from "@mantine/notifications";

const SectionStore_Form = () => {
  const form = useForm({
    initialValues: initialValues_form(""),
    validate: validationRules_form,
  });

  const handleReset = () => {
    form.reset();
  };

  const handleSubmit = form.onSubmit(async (values) => {
    const result = await postStore(values);
    if (result.status === API_STATUS.CREATED) {
      notifications.show({
        title: "Store created successfully",
        message: "The Store with ID 123 has been created successfully.",
        color: "green",
      });

      redirect("/shop/stores");
    } else {
      const apiMessage = result.status && getApiStatusMessage(result.status);
      notifications.show({
        title: apiMessage?.title,
        message: apiMessage?.description,
        color: apiMessage?.color,
      });
    }
  });

  // Determine which tabs have errors
  const errorTabs = Object.keys(form.errors).map((errorKey) => {
    // Assuming each errorKey corresponds to a tab value
    return errorKey;
  });

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
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
                <Button type="reset" color="gray" size="lg">
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
