import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "../components/shadcn/alert";
import { Terminal, AlertCircle } from "lucide-react";

const meta = {
  title: "in-progress/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The visual style variant of the alert",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <AlertCircle />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        This is a simple alert without an icon.
      </AlertDescription>
    </Alert>
  ),
};
