import type { StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/shadcn/card";
import { Typography } from "@/components/shadcn/typography";
import { CryptoAmountInput } from "@/components/shadcn/crypto-amount-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { Button } from "@/components/shadcn/button";
import { Plant } from "@phosphor-icons/react";

/**
 * StakeForm Block
 *
 * A comprehensive form component for staking MOVE tokens with validator selection.
 * Uses design system components: Card, Typography, CryptoAmountInput, Select, and Button.
 */

const meta = {
  title: "Blocks/Stake Form",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

function StakeFormExample() {
  const [amount, setAmount] = useState("");
  const [validator, setValidator] = useState("");
  const availableBalance = "128.01839";

  const handleMaxClick = () => {
    setAmount(availableBalance);
  };

  const handleStake = () => {
    console.log("Stake:", amount, "MOVE to", validator);
  };

  return (
    <Card variant="glow" className="w-[436px] gap-6">
      <CardHeader className="px-6">
        <Typography
          variant="mono"
          className="text-2xl leading-[1.4] font-medium tracking-[0.02em] text-white uppercase"
        >
          Stake your move
        </Typography>
      </CardHeader>

      <CardContent className="flex flex-col gap-6 px-6">
        {/* Amount Input */}
        <CryptoAmountInput
          value={amount}
          onChange={setAmount}
          balance={availableBalance}
          token="MOVE"
          onMaxClick={handleMaxClick}
          className="!w-full"
        />

        {/* Validator Section */}
        <div className="flex items-center gap-6">
          <Typography
            variant="mono"
            className="text-base leading-[1.4] font-medium tracking-[0.04em] text-white/64 uppercase"
          >
            Validator
          </Typography>
          <Select value={validator} onValueChange={setValidator}>
            <SelectTrigger className="w-[216px]">
              <SelectValue placeholder="Select Validator" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="movement">Movement Validator</SelectItem>
              <SelectItem value="validator-1">Validator 1</SelectItem>
              <SelectItem value="validator-2">Validator 2</SelectItem>
              <SelectItem value="validator-3">Validator 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stake Button */}
        <div className="relative h-20 w-full">
          <Button
            onClick={handleStake}
            disabled={!amount || !validator}
            className={cn(
              "absolute top-2 right-2 left-2 h-16",
              "bg-guild-green-300 text-byzantine-blue-500 rounded-lg",
              "shadow-[8px_8px_0_0_#0337FF]",
              "hover:-translate-y-0.5 hover:shadow-[10px_10px_0_0_#0337FF]",
              "active:translate-y-0.5 active:shadow-[6px_6px_0_0_#0337FF]",
              "transition-all duration-200",
              "flex items-center justify-center gap-2",
              "font-mono text-2xl leading-none font-bold tracking-[-0.04em] uppercase",
            )}
          >
            <Plant className="size-8" weight="fill" />
            <span>stake now</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export const Default: Story = {
  render: () => <StakeFormExample />,
};
