import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { createStorybookTheme } from "./theme";

// controls the preview of the storybook
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    // Apply the dark theme
    docs: {
      // theme: createStorybookTheme(),
      toc: true, // 👈 Enables the table of contents
    },
  },
};

export default preview;
