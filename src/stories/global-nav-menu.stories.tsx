import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlobalNavMenu } from "../components/GlobalNavMenu";
import { Button } from "../components/shadcn/button";
import { List } from "@phosphor-icons/react";

const meta = {
  title: "movement-design-system/GlobalNavMenu",
  component: GlobalNavMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    showVideoSection: {
      control: "boolean",
      description: "Whether to show the video placeholder section (desktop only)",
    },
    showAllianceSection: {
      control: "boolean",
      description: "Whether to show the Move Alliance section (desktop only)",
    },
    movePrice: {
      control: "text",
      description: "Move price to display",
    },
  },
} satisfies Meta<typeof GlobalNavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default GlobalNavMenu with all features enabled
 */
export const Default: Story = {
  args: {
    showVideoSection: true,
    showAllianceSection: true,
    movePrice: "$0.03",
    onItemClick: (item) => console.log("Clicked:", item.id),
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center justify-between">
        <GlobalNavMenu {...args} />
        <span className="text-white text-sm">Click the hamburger icon to open menu</span>
      </header>
    </div>
  ),
};

/**
 * With custom trigger button
 */
export const CustomTrigger: Story = {
  args: {
    showVideoSection: true,
    showAllianceSection: true,
    trigger: (
      <Button variant="outline" size="sm">
        <List size={16} weight="bold" className="mr-2" />
        Menu
      </Button>
    ),
  },
  render: (args) => (
    <div className="min-h-[200px] bg-background p-4">
      <header className="flex items-center justify-between">
        <GlobalNavMenu {...args} />
        <span className="text-sm text-muted-foreground">Custom trigger button</span>
      </header>
    </div>
  ),
};

/**
 * Without video section
 */
export const NoVideoSection: Story = {
  args: {
    showVideoSection: false,
    showAllianceSection: true,
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center">
        <GlobalNavMenu {...args} />
        <span className="text-white text-sm ml-4">No video section</span>
      </header>
    </div>
  ),
};

/**
 * Without alliance section
 */
export const NoAllianceSection: Story = {
  args: {
    showVideoSection: true,
    showAllianceSection: false,
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center">
        <GlobalNavMenu {...args} />
        <span className="text-white text-sm ml-4">No alliance section</span>
      </header>
    </div>
  ),
};

/**
 * Minimal - No extra sections
 */
export const Minimal: Story = {
  args: {
    showVideoSection: false,
    showAllianceSection: false,
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center">
        <GlobalNavMenu {...args} />
        <span className="text-white text-sm ml-4">Minimal - just the apps</span>
      </header>
    </div>
  ),
};

/**
 * Custom navigation items
 */
export const CustomItems: Story = {
  args: {
    items: [
      {
        id: "bridge",
        title: "BRIDGE",
        description: "Transfer assets across chains",
        href: "/bridge",
      },
      {
        id: "delegated-staking",
        title: "STAKE",
        description: "Delegate and earn rewards",
        href: "/stake",
      },
      {
        id: "explorer",
        title: "EXPLORER",
        description: "View network activity",
        href: "/explorer",
      },
    ],
    showVideoSection: false,
    showAllianceSection: false,
    onItemClick: (item) => alert(`Navigate to: ${item.href || item.id}`),
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center">
        <GlobalNavMenu {...args} />
        <span className="text-white text-sm ml-4">Custom items (3 apps)</span>
      </header>
    </div>
  ),
};

/**
 * With click handlers
 */
export const WithClickHandlers: Story = {
  args: {
    items: [
      {
        id: "bridge",
        title: "BRIDGE",
        description: "Move assets seamlessly across chains",
        onClick: () => alert("Navigate to Bridge app"),
      },
      {
        id: "delegated-staking",
        title: "DELEGATED STAKING",
        description: "Earn rewards by delegating your stake",
        onClick: () => alert("Navigate to Staking app"),
      },
      {
        id: "name-service",
        title: "NAME SERVICE",
        description: "Register human-readable names",
        onClick: () => alert("Navigate to Name Service"),
      },
      {
        id: "parthenon",
        title: "PARTHENON",
        description: "Movement governance platform",
        onClick: () => alert("Navigate to Parthenon"),
      },
      {
        id: "explorer",
        title: "EXPLORER",
        description: "Inspect on-chain activity",
        onClick: () => alert("Navigate to Explorer"),
      },
      {
        id: "move-docs",
        title: "MOVE DOCS",
        description: "Documentation and guides",
        onClick: () => alert("Navigate to Move Docs"),
      },
    ],
    showVideoSection: true,
    showAllianceSection: true,
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center">
        <GlobalNavMenu {...args} />
        <span className="text-white text-sm ml-4">Click items to see alerts</span>
      </header>
    </div>
  ),
};

/**
 * Mobile viewport demonstration
 */
export const MobileView: Story = {
  args: {
    showVideoSection: true,
    showAllianceSection: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center justify-between">
        <GlobalNavMenu {...args} />
        <span className="text-white text-xs">Mobile view</span>
      </header>
    </div>
  ),
};

/**
 * Tablet viewport demonstration
 */
export const TabletView: Story = {
  args: {
    showVideoSection: true,
    showAllianceSection: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center justify-between">
        <GlobalNavMenu {...args} />
        <span className="text-white text-sm">Tablet view</span>
      </header>
    </div>
  ),
};

/**
 * In a header context with branding
 */
export const InHeaderContext: Story = {
  args: {
    showVideoSection: true,
    showAllianceSection: true,
  },
  render: (args) => (
    <div className="min-h-screen bg-black">
      {/* Example header */}
      <header className="h-16 border-b border-white/10 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <GlobalNavMenu {...args} triggerClassName="text-white hover:bg-white/10" />
          <span className="text-white font-bold">Movement Network</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-white border-white/20">
            Connect Wallet
          </Button>
        </div>
      </header>

      {/* Page content placeholder */}
      <main className="p-8">
        <h1 className="text-2xl font-bold text-white mb-4">Welcome to Movement</h1>
        <p className="text-white/60">
          Click the hamburger menu in the top left to open the global navigation.
        </p>
      </main>
    </div>
  ),
};

/**
 * With custom Move price
 */
export const CustomMovePrice: Story = {
  args: {
    showVideoSection: true,
    showAllianceSection: true,
    movePrice: "$0.12",
  },
  render: (args) => (
    <div className="min-h-[200px] bg-black p-4">
      <header className="flex items-center">
        <GlobalNavMenu {...args} />
        <span className="text-white text-sm ml-4">Custom MOVE price displayed</span>
      </header>
    </div>
  ),
};
