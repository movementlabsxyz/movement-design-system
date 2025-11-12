import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../components/shadcn/toggle-group";

const meta = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default"],
      description: "The visual style variant of the toggle group",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "The size of the toggle group",
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Whether multiple items can be selected",
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Duration: Story = {
  name: "Duration (Default)",
  render: () => (
    <ToggleGroup type="single" defaultValue="1d">
      <ToggleGroupItem value="1d">1D</ToggleGroupItem>
      <ToggleGroupItem value="1w">1W</ToggleGroupItem>
      <ToggleGroupItem value="1m">1M</ToggleGroupItem>
      <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Percentage: Story = {
  name: "Percentage",
  render: () => (
    <ToggleGroup type="single" defaultValue="25" size="sm">
      <ToggleGroupItem value="25">25%</ToggleGroupItem>
      <ToggleGroupItem value="50">50%</ToggleGroupItem>
      <ToggleGroupItem value="75">75%</ToggleGroupItem>
      <ToggleGroupItem value="100">100%</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Stake: Story = {
  name: "Stake (Large)",
  render: () => (
    <ToggleGroup type="single" defaultValue="quick" size="lg">
      <ToggleGroupItem value="quick">Quick Stake</ToggleGroupItem>
      <ToggleGroupItem value="advanced">Advanced Stake</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Duration - State 1</p>
        <ToggleGroup type="single" defaultValue="1d">
          <ToggleGroupItem value="1d">1D</ToggleGroupItem>
          <ToggleGroupItem value="1w">1W</ToggleGroupItem>
          <ToggleGroupItem value="1m">1M</ToggleGroupItem>
          <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Duration - State 2</p>
        <ToggleGroup type="single" defaultValue="1w">
          <ToggleGroupItem value="1d">1D</ToggleGroupItem>
          <ToggleGroupItem value="1w">1W</ToggleGroupItem>
          <ToggleGroupItem value="1m">1M</ToggleGroupItem>
          <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Duration - State 3</p>
        <ToggleGroup type="single" defaultValue="1m">
          <ToggleGroupItem value="1d">1D</ToggleGroupItem>
          <ToggleGroupItem value="1w">1W</ToggleGroupItem>
          <ToggleGroupItem value="1m">1M</ToggleGroupItem>
          <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Duration - State 4</p>
        <ToggleGroup type="single" defaultValue="1y">
          <ToggleGroupItem value="1d">1D</ToggleGroupItem>
          <ToggleGroupItem value="1w">1W</ToggleGroupItem>
          <ToggleGroupItem value="1m">1M</ToggleGroupItem>
          <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Stake - State 1</p>
        <ToggleGroup type="single" defaultValue="quick" size="lg">
          <ToggleGroupItem value="quick">Quick Stake</ToggleGroupItem>
          <ToggleGroupItem value="advanced">Advanced Stake</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Stake - State 2</p>
        <ToggleGroup type="single" defaultValue="advanced" size="lg">
          <ToggleGroupItem value="quick">Quick Stake</ToggleGroupItem>
          <ToggleGroupItem value="advanced">Advanced Stake</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Percentage - State 1</p>
        <ToggleGroup type="single" defaultValue="25" size="sm">
          <ToggleGroupItem value="25">25%</ToggleGroupItem>
          <ToggleGroupItem value="50">50%</ToggleGroupItem>
          <ToggleGroupItem value="75">75%</ToggleGroupItem>
          <ToggleGroupItem value="100">100%</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const Multiple = {
  name: "Multiple selection",
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">
          Multiple selection (default)
        </p>
        <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">
          Multiple selection (large)
        </p>
        <ToggleGroup type="multiple" size="lg">
          <ToggleGroupItem value="feature1">Feature 1</ToggleGroupItem>
          <ToggleGroupItem value="feature2">Feature 2</ToggleGroupItem>
          <ToggleGroupItem value="feature3">Feature 3</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">
          Multiple selection (small)
        </p>
        <ToggleGroup type="multiple" size="sm">
          <ToggleGroupItem value="apple">🍏</ToggleGroupItem>
          <ToggleGroupItem value="banana">🍌</ToggleGroupItem>
          <ToggleGroupItem value="cherry">🍒</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};
