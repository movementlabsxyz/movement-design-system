import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../components/shadcn/tooltip";
import { Button } from "../components/shadcn/button";

const meta = {
  title: "movement-design-system/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const Alignment: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top Start</Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="start">
              <p>Aligned to start</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top Center</Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>Aligned to center</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top End</Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="end">
              <p>Aligned to end</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom Start</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="start">
              <p>Aligned to start</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom Center</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p>Aligned to center</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom End</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="end">
              <p>Aligned to end</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  ),
};

export const SideOffset: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">No Offset</Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={0}>
            <p>0px offset</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Small Offset</Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>
            <p>4px offset (default)</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Large Offset</Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={16}>
            <p>16px offset</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const AlignOffset: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">No Align Offset</Button>
          </TooltipTrigger>
          <TooltipContent side="top" alignOffset={0}>
            <p>0px align offset</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Positive Offset</Button>
          </TooltipTrigger>
          <TooltipContent side="top" alignOffset={20}>
            <p>+20px align offset</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Negative Offset</Button>
          </TooltipTrigger>
          <TooltipContent side="top" alignOffset={-20}>
            <p>-20px align offset</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const WithoutArrow: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">With Arrow</Button>
          </TooltipTrigger>
          <TooltipContent showArrow>
            <p>Has an arrow pointing to trigger</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Without Arrow</Button>
          </TooltipTrigger>
          <TooltipContent showArrow={false}>
            <p>No arrow</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const ComplexPositioning: Story = {
  render: () => (
    <TooltipProvider>
      <div className="grid grid-cols-3 gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Top-Left
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="start" sideOffset={8}>
            <p>Top side, start aligned</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Top-Center
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center" sideOffset={8}>
            <p>Top side, center aligned</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Top-Right
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="end" sideOffset={8}>
            <p>Top side, end aligned</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Left-Top
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" align="start" sideOffset={8}>
            <p>Left side, start aligned</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Center
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <p>Default positioning</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Right-Top
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" sideOffset={8}>
            <p>Right side, start aligned</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Bottom-Left
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="start" sideOffset={8}>
            <p>Bottom side, start aligned</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Bottom-Center
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center" sideOffset={8}>
            <p>Bottom side, center aligned</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              Bottom-Right
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="end" sideOffset={8}>
            <p>Bottom side, end aligned</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};
