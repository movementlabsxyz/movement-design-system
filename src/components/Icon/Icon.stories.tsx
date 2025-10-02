import type { Meta, StoryObj } from "@storybook/react";
import { HeartIcon, StarIcon, UserIcon, QuestionIcon, PiggyBankIcon } from "./Icon";
import {
  BitcoinIcon,
  EthereumIcon,
  SolanaIcon,
  USDCIcon,
  USDTIcon,
  MoveIcon,
} from "./CryptoIcons";

const meta: Meta = {
  title: "Components/Icons",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "All Phosphor icons are available directly from the design system. Import any icon you need and use it as a React component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/** Basic Phosphor icon usage */
export const Default: Story = {
  render: () => <PiggyBankIcon size={24}  />,
};

/** Different sizes */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <StarIcon size={12} />
      <StarIcon size={16} />
      <StarIcon size={20} />
      <StarIcon size={24} />
      <StarIcon size={32} />
      <StarIcon size={40} />
      <StarIcon size={48} />
    </div>
  ),
};

/** Different weights */
export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <HeartIcon weight="thin" size={24} />
      <HeartIcon weight="light" size={24} />
      <HeartIcon weight="regular" size={24} />
      <HeartIcon weight="bold" size={24} />
      <HeartIcon weight="fill" size={24} />
      <HeartIcon weight="duotone" size={24} />
    </div>
  ),
};

/** Different colors */
export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <HeartIcon color="red" size={24} />
      <HeartIcon color="blue" size={24} />
      <HeartIcon color="green" size={24} />
      <HeartIcon color="orange" size={24} />
      <HeartIcon color="purple" size={24} />
      <HeartIcon color="gray" size={24} />
    </div>
  ),
};

/** Custom crypto icons */
export const CryptoIconsStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <BitcoinIcon size={24} color="orange" />
      <EthereumIcon size={24} color="blue" />
      <SolanaIcon size={24} color="purple" />
      <USDCIcon size={24} color="green" />
      <USDTIcon size={24} color="teal" />
      <MoveIcon size={24} color="red" />
    </div>
  ),
};

/** Icon showcase */
export const Showcase: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <HeartIcon size={32} color="red" />
        <p>Heart</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <StarIcon size={32} color="gold" weight="fill" />
        <p>Star</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <UserIcon size={32} color="blue" />
        <p>User</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Settings</p>
      </div>
    </div>
  ),
};

/** Usage examples */
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3>Import and use directly:</h3>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "12px",
            borderRadius: "4px",
          }}
        >
          {`import { HeartIcon, StarIcon, UserIcon } from "@movementlabsxyz/movement-design-system";

<HeartIcon size={24} color="red" />
<StarIcon weight="fill" size={32} />
<UserIcon size={20} color="blue" />`}
        </pre>
      </div>

      <div>
        <h3>Available icons:</h3>
        <p>All 1,200+ Phosphor icons are available. Common ones include:</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <HeartIcon size={20} />
          <StarIcon size={20} />
          <UserIcon size={20} />
          <QuestionIcon size={20} />
        </div>
      </div>
    </div>
  ),
};
