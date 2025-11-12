import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "../components/shadcn/spinner";

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    className: "size-4",
  },
};

export const Medium: Story = {
  args: {
    className: "size-6",
  },
};

export const Large: Story = {
  args: {
    className: "size-8",
  },
};

export const ExtraLarge: Story = {
  args: {
    className: "size-12",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-12" />
    </div>
  ),
};
