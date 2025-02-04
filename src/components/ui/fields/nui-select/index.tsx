import { Select } from "@mantine/core";
import { INuiSelect_Props } from "./types";

const NuiSelect: React.FC<INuiSelect_Props> = ({ ...props }) => {
  return (
    <Select
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
