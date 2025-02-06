import { Box, Paper, Stack, Switch, Text } from "@mantine/core";
import { IInfoCard_Props } from "../types";

const InfoCard_2 = ({ form, content }: IInfoCard_Props) => {
  return (
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
  );
};

export default InfoCard_2;
