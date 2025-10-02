import type { Meta, StoryObj } from "@storybook/react";
import {
  AptosLogoIcon,
  AvalancheIcon,
  BinanceIcon,
  BnbLogoIcon,
  BnbIcon,
  BscIcon,
  CoinbaseIcon,
  DaiIcon,
  EnzobtcIcon,
  EthLogoIcon,
  EthIcon,
  EzEthIcon,
  EzethIcon,
  HusdIcon,
  IndustriesIcon,
  KelpIconIcon,
  LbtcIcon,
  MetamaskIcon,
  MoveIconIcon,
  MoveLogoIcon,
  NightlyIcon,
  PetraIcon,
  PolygonIcon,
  RabbyIcon,
  RazorIcon,
  RsethIcon,
  SenderIcon,
  SolanaLogoIcon,
  SolvbtcIcon,
  StbtcIcon,
  SusdaIcon,
  UsdaIcon,
  UsdcIcon,
  UsdeIcon,
  UsdtIcon,
  UsdyIcon,
  WbtcIcon,
  WeethIcon,
  WethIcon,
  WstethIcon,
} from "./AllAssetIcons";

const meta: Meta = {
  title: "Components/Asset Icons",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "All asset icons are available as individual components. These include cryptocurrency logos, wallet icons, and other blockchain-related assets.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/** Popular crypto assets */
export const PopularCrypto: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <EthIcon size={64} />
      <UsdcIcon size={32} />
      <UsdtIcon size={32} />
      <WbtcIcon size={32} />
      <DaiIcon size={32} />
      <WethIcon size={32} />
    </div>
  ),
};

/** Wallet icons */
export const Wallets: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <MetamaskIcon size={32} />
      <RabbyIcon size={32} />
      <PetraIcon size={32} />
      <NightlyIcon size={32} />
      <SenderIcon size={32} />
    </div>
  ),
};

/** Blockchain networks */
export const Networks: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <EthIcon size={32} />
      <PolygonIcon size={32} />
      <BscIcon size={32} />
      <AvalancheIcon size={32} />
      <AptosLogoIcon size={32} />
    </div>
  ),
};
