import { Switch } from "@mantine/core";
import { INuiSwitch_Props } from "./types";

const NuiSwitch: React.FC<INuiSwitch_Props> = ({ ...props }) => {
  return (
    <Switch
      size="md"
      {...props}
      styles={{
        label: {
          fontWeight: 600,
        },
      }}
    />
  );
};

export default NuiSwitch;
