import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../components/shadcn/badge";
import { Lock, LockOpen, Clock } from "@phosphor-icons/react";

const meta = {
  title: "movement-design-system/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "success",
        "error",
        "warning",
        "info",
      ],
      description: "The visual style variant of the badge",
    },
    radius: {
      control: "select",
      options: ["full", "sm"],
      description: "The border radius of the badge",
    },
    asChild: {
      control: "boolean",
      description: "Render as child component using Radix Slot",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const SmallRadius: Story = {
  args: {
    children: "Badge",
    variant: "default",
    radius: "sm",
  },
};

export const RadiusComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium w-20">Full:</span>
        <Badge variant="default" radius="full">
          Default
        </Badge>
        <Badge variant="success" radius="full">
          Success
        </Badge>
        <Badge variant="warning" radius="full">
          Warning
        </Badge>
        <Badge variant="error" radius="full">
          Error
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium w-20">Small:</span>
        <Badge variant="default" radius="sm">
          Default
        </Badge>
        <Badge variant="success" radius="sm">
          Success
        </Badge>
        <Badge variant="warning" radius="sm">
          Warning
        </Badge>
        <Badge variant="error" radius="sm">
          Error
        </Badge>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" radius="sm">
        <Lock weight="bold" />
        Staked
      </Badge>
      <Badge variant="warning" radius="sm">
        <Clock weight="bold" />
        Pending
      </Badge>
      <Badge variant="success" radius="sm">
        <LockOpen weight="bold" />
        Unlocked
      </Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-gray-950 rounded-lg min-w-[600px]">
      <h3 className="text-lg font-semibold text-white mb-2">
        Staking Status Badges
      </h3>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 w-32">Staked:</span>
          <Badge
            variant="success"
            radius="sm"
            className="backdrop-blur-md bg-success/10"
          >
            <Lock weight="bold" className="size-3" />
            staked
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 w-32">Unlocked:</span>
          <Badge
            variant="success"
            radius="sm"
            className="backdrop-blur-md bg-success/10"
          >
            <LockOpen weight="bold" className="size-3" />
            unlocked
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 w-32">Pending Unstake:</span>
          <Badge
            variant="warning"
            radius="sm"
            className="backdrop-blur-md bg-warning/10"
          >
            <Clock weight="bold" className="size-3" />
            pending unstake
          </Badge>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-4 mt-2">
        <h4 className="text-sm font-medium text-gray-300 mb-3">
          Use Case: Validator Table Row
        </h4>
        <div className="flex items-center gap-3 p-4 bg-white/[0.08] rounded-lg">
          <div className="size-8 rounded-full bg-blue-600" />
          <span className="text-white font-medium">Validator Name</span>
          <Badge
            variant="success"
            radius="sm"
            className="backdrop-blur-md bg-success/10"
          >
            <Lock weight="bold" className="size-3" />
            staked
          </Badge>
        </div>
      </div>
    </div>
  ),
};
