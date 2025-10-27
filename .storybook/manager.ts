import { addons } from "@storybook/manager-api";
import { createStorybookTheme } from "./theme";

addons.setConfig({
  theme: createStorybookTheme(),
});
