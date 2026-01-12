import type { Meta, StoryObj } from "@storybook/react-vite";
import { DottedBackground } from "../components/DottedBackground";
import { Input } from "../components/shadcn/input";
import { Button } from "../components/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/shadcn/card";
import { Search } from "lucide-react";

const meta = {
  title: "movement-design-system/DottedBackground",
  component: DottedBackground,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["dots", "grid", "gradient"],
      description: "Background pattern variant",
    },
    dotColor: {
      control: "color",
      description: "Color of the dots or grid lines",
    },
    dotSize: {
      control: { type: "range", min: 1, max: 5, step: 0.5 },
      description: "Size of the dots",
    },
    gap: {
      control: { type: "range", min: 10, max: 50, step: 5 },
      description: "Gap between dots or grid lines",
    },
  },
} satisfies Meta<typeof DottedBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dots: Story = {
  args: {
    variant: "dots",
  },
  render: (args) => (
    <DottedBackground {...args}>
      <div className="flex items-center justify-center h-full">
        <p className="text-foreground text-lg">Dotted Background</p>
      </div>
    </DottedBackground>
  ),
};

export const Grid: Story = {
  args: {
    variant: "grid",
  },
  render: (args) => (
    <DottedBackground {...args}>
      <div className="flex items-center justify-center h-full">
        <p className="text-foreground text-lg">Grid Background</p>
      </div>
    </DottedBackground>
  ),
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
  },
  render: (args) => (
    <DottedBackground {...args}>
      <div className="flex items-center justify-center h-full">
        <p className="text-foreground text-lg">Gradient Background</p>
      </div>
    </DottedBackground>
  ),
};

export const WithGlassInput: Story = {
  args: {
    variant: "dots",
  },
  render: (args) => (
    <DottedBackground {...args}>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <h2 className="text-foreground text-2xl font-semibold">Search Interface</h2>
        <div className="w-full max-w-md">
          <Input
            type="search"
            placeholder="Search"
            leftIcon={<Search className="size-6" />}
          />
        </div>
      </div>
    </DottedBackground>
  ),
};

export const WithGlassCard: Story = {
  args: {
    variant: "gradient",
  },
  render: (args) => (
    <DottedBackground {...args}>
      <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md bg-background/80 backdrop-blur-xl border-border">
          <CardHeader>
            <CardTitle>Glass Card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="search"
              placeholder="Search"
              leftIcon={<Search className="size-6" />}
            />
            <Button className="w-full">Submit</Button>
          </CardContent>
        </Card>
      </div>
    </DottedBackground>
  ),
};

export const CustomDots: Story = {
  args: {
    variant: "dots",
    dotColor: "rgba(99, 102, 241, 0.4)",
    dotSize: 2,
    gap: 30,
  },
  render: (args) => (
    <DottedBackground {...args}>
      <div className="flex items-center justify-center h-full">
        <p className="text-foreground text-lg">Custom Styled Dots</p>
      </div>
    </DottedBackground>
  ),
};

export const FineGrid: Story = {
  args: {
    variant: "grid",
    gap: 15,
  },
  render: (args) => (
    <DottedBackground {...args}>
      <div className="flex items-center justify-center h-full">
        <p className="text-foreground text-lg">Fine Grid Pattern</p>
      </div>
    </DottedBackground>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-full">
      <DottedBackground variant="dots" className="min-h-[300px]">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <h3 className="text-foreground text-xl font-semibold">Dots Variant</h3>
          <Input
            type="search"
            placeholder="Search with dots"
            leftIcon={<Search className="size-6" />}
            className="max-w-md"
          />
        </div>
      </DottedBackground>

      <DottedBackground variant="grid" className="min-h-[300px]">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <h3 className="text-foreground text-xl font-semibold">Grid Variant</h3>
          <Input
            type="search"
            placeholder="Search with grid"
            leftIcon={<Search className="size-6" />}
            className="max-w-md"
          />
        </div>
      </DottedBackground>

      <DottedBackground variant="gradient" className="min-h-[300px]">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <h3 className="text-foreground text-xl font-semibold">Gradient Variant</h3>
          <Input
            type="search"
            placeholder="Search with gradient"
            leftIcon={<Search className="size-6" />}
            className="max-w-md"
          />
        </div>
      </DottedBackground>
    </div>
  ),
};

