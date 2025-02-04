import { MultiSelect } from "@mantine/core";
import { INuiMultiSelect_Props } from "./types";

const NuiSelect: React.FC<INuiMultiSelect_Props> = ({ ...props }) => {
  return (
    <MultiSelect
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

export default NuiSelect;
