import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { IThemeProviders_Props } from "./types";

const ThemeProviders = ({ children }: IThemeProviders_Props) => {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <Notifications containerWidth={"680"} autoClose={false} />
      {children}
    </MantineProvider>
  );
};

export default ThemeProviders;
