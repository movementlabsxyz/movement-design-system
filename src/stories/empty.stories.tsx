import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "../components/ui/empty";
import { Button } from "../components/ui/button";
import { FileQuestion, Inbox } from "lucide-react";

const meta = {
  title: "UI/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty className="w-96">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          We couldn't find what you're looking for. Try adjusting your search.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Go back</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <Empty className="w-96">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileQuestion />
        </EmptyMedia>
        <EmptyTitle>No files</EmptyTitle>
        <EmptyDescription>
          You don't have any files yet. Upload your first file to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload file</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const Simple: Story = {
  render: () => (
    <Empty className="w-96">
      <EmptyHeader>
        <EmptyTitle>Empty state</EmptyTitle>
        <EmptyDescription>This is an empty state component.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};
