import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

import { Button } from "../Button";
import { WalletModal } from "./WalletModal";

const meta: Meta<typeof WalletModal> = {
  title: "Components/WalletModal",
  component: WalletModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <AptosWalletAdapterProvider
      autoConnect={true}
      onError={(error) => {
        console.log('Wallet error:', error);
        // Suppress provider conflict errors
        if (
          error?.message?.includes?.('setting the global Ethereum provider')
        ) {
          return;
        }
      }}
    >
        <Story />
      </AptosWalletAdapterProvider>
    ),
  ],
  argTypes: {
    onClose: {
      action: "closed",
      description: "Callback when the modal should close",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Connect Wallet</Button>
        {isOpen && <WalletModal onClose={() => setIsOpen(false)} />}
      </>
    );
  },
};
