import type { Meta, StoryObj } from "@storybook/react-vite";
import { List, ListItem } from "../components/shadcn/list";

const meta = {
  title: "movement-design-system/List",
  component: List,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      control: "select",
      options: ["tight", "normal", "relaxed", "loose"],
      description: "Spacing between list items",
    },
    bulletVariant: {
      control: "select",
      options: ["circle", "diamond", "triangle"],
      description: "Default bullet style for all items",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the list items and bullets",
    },
    ordered: {
      control: "boolean",
      description: "Use ordered list (ol) instead of unordered (ul)",
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleBullets: Story = {
  args: {
    bulletVariant: "circle",
    size: "md",
    spacing: "normal",
  },
  render: (args) => (
    <List {...args}>
      <ListItem>First item with circle bullet</ListItem>
      <ListItem>Second item with circle bullet</ListItem>
      <ListItem>Third item with circle bullet</ListItem>
      <ListItem>Fourth item with longer text to demonstrate how the bullet aligns with multi-line content</ListItem>
    </List>
  ),
};

export const DiamondBullets: Story = {
  args: {
    bulletVariant: "diamond",
    size: "md",
    spacing: "normal",
  },
  render: (args) => (
    <List {...args}>
      <ListItem>First item with diamond bullet</ListItem>
      <ListItem>Second item with diamond bullet</ListItem>
      <ListItem>Third item with diamond bullet</ListItem>
      <ListItem>Fourth item with longer text to demonstrate how the bullet aligns with multi-line content</ListItem>
    </List>
  ),
};

export const TriangleBullets: Story = {
  args: {
    bulletVariant: "triangle",
    size: "md",
    spacing: "normal",
  },
  render: (args) => (
    <List {...args}>
      <ListItem>First item with triangle bullet</ListItem>
      <ListItem>Second item with triangle bullet</ListItem>
      <ListItem>Third item with triangle bullet</ListItem>
      <ListItem>Fourth item with longer text to demonstrate how the bullet aligns with multi-line content</ListItem>
    </List>
  ),
};

export const AllBulletVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Circle Bullets
        </h3>
        <List bulletVariant="circle">
          <ListItem>List item 1</ListItem>
          <ListItem>List item 2</ListItem>
          <ListItem>List item 3</ListItem>
        </List>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Diamond Bullets
        </h3>
        <List bulletVariant="diamond">
          <ListItem>List item 1</ListItem>
          <ListItem>List item 2</ListItem>
          <ListItem>List item 3</ListItem>
        </List>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Triangle Bullets
        </h3>
        <List bulletVariant="triangle">
          <ListItem>List item 1</ListItem>
          <ListItem>List item 2</ListItem>
          <ListItem>List item 3</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const MixedBullets: Story = {
  render: () => (
    <List bulletVariant="circle">
      <ListItem>First item with default circle bullet</ListItem>
      <ListItem bulletVariant="diamond">Second item with diamond bullet</ListItem>
      <ListItem bulletVariant="triangle">Third item with triangle bullet</ListItem>
      <ListItem>Fourth item back to default circle bullet</ListItem>
    </List>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Small Size
        </h3>
        <List bulletVariant="circle" size="sm">
          <ListItem>Small list item with circle</ListItem>
          <ListItem bulletVariant="diamond">Small list item with diamond</ListItem>
          <ListItem bulletVariant="triangle">Small list item with triangle</ListItem>
        </List>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Medium Size (Default)
        </h3>
        <List bulletVariant="circle" size="md">
          <ListItem>Medium list item with circle</ListItem>
          <ListItem bulletVariant="diamond">Medium list item with diamond</ListItem>
          <ListItem bulletVariant="triangle">Medium list item with triangle</ListItem>
        </List>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Large Size
        </h3>
        <List bulletVariant="circle" size="lg">
          <ListItem>Large list item with circle</ListItem>
          <ListItem bulletVariant="diamond">Large list item with diamond</ListItem>
          <ListItem bulletVariant="triangle">Large list item with triangle</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Tight Spacing
        </h3>
        <List bulletVariant="circle" spacing="tight">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Normal Spacing (Default)
        </h3>
        <List bulletVariant="circle" spacing="normal">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Relaxed Spacing
        </h3>
        <List bulletVariant="circle" spacing="relaxed">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Loose Spacing
        </h3>
        <List bulletVariant="circle" spacing="loose">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="max-w-xl">
      <List bulletVariant="circle" spacing="relaxed">
        <ListItem>
          This is a longer list item that demonstrates how the bullet aligns properly
          with multi-line content. The text wraps naturally and the bullet stays at
          the top of the item.
        </ListItem>
        <ListItem bulletVariant="diamond">
          Another long item with a diamond bullet. Notice how the bullet alignment
          remains consistent regardless of the bullet variant used.
        </ListItem>
        <ListItem bulletVariant="triangle">
          A third item with a triangle bullet showing that all three bullet variants
          maintain proper alignment even with longer content that spans multiple lines.
        </ListItem>
        <ListItem>
          Back to the default circle bullet for the final item, demonstrating the
          flexibility of the component to mix bullet styles within the same list.
        </ListItem>
      </List>
    </div>
  ),
};

export const NestedLists: Story = {
  render: () => (
    <List bulletVariant="circle" spacing="relaxed">
      <ListItem>
        Parent item with circle bullet
        <List bulletVariant="diamond" spacing="normal" className="mt-2">
          <ListItem>Nested item with diamond bullet</ListItem>
          <ListItem>Another nested item</ListItem>
        </List>
      </ListItem>
      <ListItem>
        Another parent item
        <List bulletVariant="triangle" spacing="normal" className="mt-2">
          <ListItem>Nested item with triangle bullet</ListItem>
          <ListItem>Another nested item</ListItem>
        </List>
      </ListItem>
      <ListItem>Final parent item without nesting</ListItem>
    </List>
  ),
};

export const OrderedList: Story = {
  args: {
    ordered: true,
    bulletVariant: "circle",
    size: "md",
    spacing: "normal",
  },
  render: (args) => (
    <List {...args}>
      <ListItem>First ordered item</ListItem>
      <ListItem>Second ordered item</ListItem>
      <ListItem>Third ordered item</ListItem>
      <ListItem>Fourth ordered item</ListItem>
    </List>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Getting Started</h2>
        <List bulletVariant="circle" spacing="relaxed" size="md">
          <ListItem>
            Install the required dependencies using your package manager
          </ListItem>
          <ListItem>
            Configure your environment variables in the .env file
          </ListItem>
          <ListItem>
            Run the development server with npm run dev
          </ListItem>
          <ListItem>
            Open your browser and navigate to localhost:3000
          </ListItem>
        </List>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
        <List bulletVariant="diamond" spacing="relaxed" size="md">
          <ListItem>
            Three customizable bullet variants: circle, diamond, and triangle
          </ListItem>
          <ListItem>
            Flexible sizing options to match your design needs
          </ListItem>
          <ListItem>
            Adjustable spacing between items for different use cases
          </ListItem>
          <ListItem>
            Support for nested lists with independent styling
          </ListItem>
        </List>
      </div>
    </div>
  ),
};

