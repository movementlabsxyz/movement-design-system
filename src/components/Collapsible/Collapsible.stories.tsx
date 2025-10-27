import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import * as Collapsible from "./Collapsible";

const meta: Meta<typeof Collapsible.Root> = {
  title: "Components/Collapsible",
  component: Collapsible.Root,
};
export default meta;

type Story = StoryObj<typeof Collapsible.Root>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Collapsible.Trigger asChild>
          <Button>Toggle</Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div className="flex items-center justify-center h-60 bg-white/10">
            Content
          </div>
        </Collapsible.Content>
      </>
    ),
  },
};

export const DefaultOpen: Story = {
  args: {
    ...Default.args,
    defaultOpen: true,
  },
};
