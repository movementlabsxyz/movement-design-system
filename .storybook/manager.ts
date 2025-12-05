// manager is where the storybook user interface (sidebar, whatever) is configured
import { addons } from "@storybook/manager-api";
import { createStorybookTheme } from "./theme";

addons.setConfig({
  theme: createStorybookTheme(),
});
