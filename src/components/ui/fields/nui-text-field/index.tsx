import { TextInput } from "@mantine/core";
import { INuiTextField_Props } from "./types";

const NuiTextField: React.FC<INuiTextField_Props> = ({ ...props }) => {
  return (
    <TextInput
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

export default NuiTextField;
