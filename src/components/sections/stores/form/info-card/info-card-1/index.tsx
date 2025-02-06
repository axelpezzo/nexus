import { Box, Paper, Stack, Text } from "@mantine/core";
import { IInfoCard_Props } from "../types";

const InfoCard_1 = ({ form, content }: IInfoCard_Props) => {
  return (
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
  );
};

export default InfoCard_1;
