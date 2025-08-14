import type { Preview } from "@storybook/react-vite";
import { createStorybookTheme } from "./theme";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Theme", "Components"],
      },
    },
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
      theme: createStorybookTheme(),
    },

    // Configure themes addon
    themes: {
      default: "dark",
      list: [
        { name: "dark", class: "dark", color: "#000000" },
      ],
    },

    // Additional styling for code blocks
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#000000",
        }
      ],
    },
  },
};

export default preview;
