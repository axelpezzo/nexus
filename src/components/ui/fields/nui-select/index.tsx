import { Select } from "@mantine/core";
import { INuiSelect_Props } from "./types";

const NuiSelect: React.FC<INuiSelect_Props> = ({ ...props }) => {
  return <Select size="md" {...props} />;
};

export default NuiSelect;
