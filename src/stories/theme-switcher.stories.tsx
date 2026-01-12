import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeSwitcher, ThemeToggle } from "../components/theme";

const meta = {
  title: "movement-design-system/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iconSize: {
      control: { type: "number", min: 12, max: 32 },
      description: "Size of the icons in pixels",
    },
    showLabels: {
      control: "boolean",
      description: "Whether to show text labels next to icons",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default ThemeSwitcher with three options: Light, Dark, and System.
 * Click each button to switch themes.
 */
export const Default: Story = {
  args: {},
};

/**
 * ThemeSwitcher with visible labels for each theme option.
 */
export const WithLabels: Story = {
  args: {
    showLabels: true,
  },
};

/**
 * ThemeSwitcher with larger icons.
 */
export const LargeIcons: Story = {
  args: {
    iconSize: 24,
  },
};

/**
 * ThemeSwitcher with labels and larger icons.
 */
export const LabelsAndLargeIcons: Story = {
  args: {
    showLabels: true,
    iconSize: 20,
  },
};

/**
 * ThemeToggle is a simpler single-button component that cycles through themes.
 * Click to cycle: light → dark → system → light
 */
export const Toggle: StoryObj<typeof ThemeToggle> = {
  render: (args) => <ThemeToggle {...args} />,
  args: {},
};

/**
 * ThemeToggle with a larger icon.
 */
export const ToggleLarge: StoryObj<typeof ThemeToggle> = {
  render: (args) => <ThemeToggle {...args} />,
  args: {
    iconSize: 24,
  },
};

/**
 * Example showing both components side by side for comparison.
 */
export const Comparison: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-sm">ThemeSwitcher</span>
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-sm">
          ThemeSwitcher with labels
        </span>
        <ThemeSwitcher showLabels />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-sm">ThemeToggle</span>
        <ThemeToggle />
      </div>
    </div>
  ),
};
