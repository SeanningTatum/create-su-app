import { ThemeProvider } from "emotion-theming";
import theme from "../src/config/theme";

import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];