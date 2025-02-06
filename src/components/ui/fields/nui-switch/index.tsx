import { Switch } from "@mantine/core";
import { INuiSwitch_Props } from "./types";

const NuiSwitch: React.FC<INuiSwitch_Props> = ({ ...props }) => {
  return <Switch size="md" {...props} />;
};

export default NuiSwitch;
