import { Alert } from "@mantine/core";
import {
  IconCheck,
  IconInfoCircle,
  IconAlertTriangle,
  IconX,
} from "@tabler/icons-react";
import { NuiAlert_Props } from "./types";

const NuiAlert = ({
  status = "info",
  title,
  message,
  radius = "md",
}: NuiAlert_Props) => {
  const statusConfig = {
    success: { color: "green", icon: <IconCheck /> },
    info: { color: "blue", icon: <IconInfoCircle /> },
    warning: { color: "yellow", icon: <IconAlertTriangle /> },
    error: { color: "red", icon: <IconX /> },
  };

  const { color, icon } = statusConfig[status];

  return (
    <Alert
      variant="light"
      color={color}
      radius={radius}
      title={title}
      icon={icon}
    >
      {message}
    </Alert>
  );
};

export default NuiAlert;
