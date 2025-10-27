import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "condensed"],
    },
    hoverEffect: {
      control: { type: "boolean" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const BasicUsage: Story = {
  args: {
    children: "I am a glass morphism card",
  },
};

export const WithHoverEffect: Story = {
  args: {
    children: "Hover me to see the effect",
    hoverEffect: true,
  },
};

export const AllVariants: Story = {
  render: (props) => (
    <div className="flex flex-wrap gap-24 items-center">
      <Card {...props} variant="default">
        Default Card
      </Card>
      <Card {...props} variant="condensed">
        Condensed Card
      </Card>
      <Card {...props} variant="default" hoverEffect>
        Default with Hover
      </Card>
      <Card {...props} variant="condensed" hoverEffect>
        Condensed with Hover
      </Card>
    </div>
  ),
};

export const ContentShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-lg font-bold">Article Card</h2>
        <Card variant="default" hoverEffect>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-2">Glass Morphism Design</h3>
            <p className="text-sm mb-4 text-white/80">
              Published on January 1, 2024
            </p>
            <p className="mb-4">
              This card demonstrates the beautiful glass morphism effect with
              backdrop blur, subtle transparency, and smooth hover transitions.
              The design creates a modern, elegant interface that feels both
              sophisticated and accessible.
            </p>
            <div className="flex gap-4 justify-between items-center">
              <span className="text-sm text-white/60">3 min read</span>
              <button className="px-4 py-2 bg-white/20 text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-[10px] hover:bg-white/30">
                Read More
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-white text-lg font-bold">Profile Card</h2>
        <Card variant="default" hoverEffect>
          <div className="text-white">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold border border-white/30">
                JD
              </div>
              <div>
                <h4 className="text-base font-bold mb-1">John Doe</h4>
                <p className="text-sm text-white/80">Software Engineer</p>
                <p className="text-sm text-white/80">john.doe@example.com</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-white text-lg font-bold">Stats Cards</h2>
        <div className="flex gap-4 flex-wrap">
          <Card variant="condensed" hoverEffect>
            <div className="text-white text-center">
              <div className="text-2xl font-bold mb-2">1,234</div>
              <div className="text-sm text-white/80">Total Users</div>
            </div>
          </Card>
          <Card variant="condensed" hoverEffect>
            <div className="text-white text-center">
              <div className="text-2xl font-bold mb-2">567</div>
              <div className="text-sm text-white/80">Active Users</div>
            </div>
          </Card>
          <Card variant="condensed" hoverEffect>
            <div className="text-white text-center">
              <div className="text-2xl font-bold mb-2">89%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ),
};

export const GridLayout: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-white text-lg font-bold">Card Grid</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 max-w-[800px]">
        {Array.from({ length: 6 }, (_, i) => (
          <Card
            key={i}
            hoverEffect
            variant={i % 2 === 0 ? "default" : "condensed"}
          >
            <div className="text-white text-center">Card {i + 1}</div>
          </Card>
        ))}
      </div>
    </div>
  ),
};
