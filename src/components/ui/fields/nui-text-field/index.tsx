import { TextInput } from "@mantine/core";
import { INuiTextField_Props } from "./types";

const NuiTextField: React.FC<INuiTextField_Props> = ({ ...props }) => {
  return <TextInput size="md" {...props} />;
};

export default NuiTextField;
