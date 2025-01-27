import { createTheme, MantineProvider } from "@mantine/core";
import { IThemeProviders_Props } from "./types";

const ThemeProviders = ({ children }: IThemeProviders_Props) => {
  const theme = createTheme({});

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default ThemeProviders;
