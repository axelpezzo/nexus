import { Textarea } from "@mantine/core";
import { INuiTextArea_Props } from "./types";

const NuiTextArea: React.FC<INuiTextArea_Props> = ({ ...props }) => {
  return (
    <Textarea
      size="md"
      rows={props.rows || 4}
      {...props}
      styles={{
        label: {
          fontWeight: 600,
        },
      }}
    />
  );
};

export default NuiTextArea;
