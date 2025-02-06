import { MultiSelect } from "@mantine/core";
import { INuiMultiSelect_Props } from "./types";

const NuiSelect: React.FC<INuiMultiSelect_Props> = ({ ...props }) => {
  return <MultiSelect size="md" {...props} />;
};

export default NuiSelect;
