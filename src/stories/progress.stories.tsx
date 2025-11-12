import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "../components/shadcn/progress";
import { useState, useEffect } from "react";

const meta = {
  title: "movement-design-system/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The progress value (0-100)",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={50} />
    </div>
  ),
};

export const Complete: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={100} />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={0} />
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="w-80">
        <Progress value={progress} />
      </div>
    );
  },
};
