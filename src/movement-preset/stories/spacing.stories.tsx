import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Title,
  Subtitle,
  Description,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

const meta: Meta = {
  title: "Theme/Spacing & Scales",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};
export default meta;

type Story = StoryObj;

const spacingScale = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px",
  28: "112px",
  32: "128px",
  36: "144px",
  40: "160px",
  44: "176px",
  48: "192px",
  52: "208px",
  56: "224px",
  60: "240px",
  64: "256px",
  72: "288px",
  80: "320px",
  96: "384px",
  100: "400px",
  px: "1px",
};

const borderRadiusScale = {
  sm: "2px",
  DEFAULT: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",
  full: "9999px",
};

const borderWidthScale = {
  0: "0px",
  DEFAULT: "1px",
  2: "2px",
  4: "4px",
  8: "8px",
};

const zIndexScale = {
  hide: "-1",
  auto: "auto",
  base: "0",
  docked: "10",
  dropdown: "1000",
  sticky: "1100",
  banner: "1200",
  overlay: "1300",
  modal: "1400",
  popover: "1500",
  skipLink: "1600",
  toast: "1700",
  tooltip: "1800",
};

/** Tokens for use with spacing and size related properties like `margin`, `padding`, `height`, `width`, etc. */
export const Spacing: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      <div className="grid grid-cols-[60px_60px_1fr] items-center gap-2 w-full">
        <span className="text-sm font-medium">Name</span>
        <span className="text-sm font-medium">Value</span>
        <span className="text-sm font-medium">Preview</span>
      </div>
      {Object.entries(spacingScale).map(([name, value]) => (
        <div
          key={name}
          className="grid grid-cols-[60px_60px_1fr] items-center gap-2 w-full"
        >
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm font-medium">{value}</span>
          <div
            className="h-2 bg-moveus-marigold-400"
            style={{ width: value }}
          />
        </div>
      ))}
    </div>
  ),
};

/** Tokens for use with the `borderRadius`/`rounded` property. */
export const BorderRadius: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8">
      {Object.entries(borderRadiusScale).map(([name, radius]) => (
        <div
          key={name}
          className="flex items-center justify-center h-32 w-32 bg-moveus-marigold-400 text-black text-sm font-medium"
          style={{ borderRadius: radius }}
        >
          {name}
          <br />
          {radius}
        </div>
      ))}
    </div>
  ),
};

/** Tokens for use with the `borderWidth` property. */
export const BorderWidths: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      {Object.entries(borderWidthScale).map(([name, borderWidth]) => (
        <div
          key={name}
          className="flex items-center justify-center h-32 w-32 bg-background text-foreground text-sm font-medium border-moveus-marigold-400"
          style={{ borderWidth }}
        >
          {name}
          <br />
          {borderWidth}
        </div>
      ))}
    </div>
  ),
};

/** Tokens for use with the `zIndex` property. */
export const ZIndex: Story = {
  render: () => (
    <div className="flex items-center gap-8 flex-wrap">
      {Object.entries(zIndexScale).map(([name, zIndexValue]) => (
        <div
          key={name}
          className="flex items-center justify-center h-32 w-32 bg-moveus-marigold-400 text-black text-sm font-medium rounded-full"
          style={{ zIndex: zIndexValue }}
        >
          {name}
          <br />({zIndexValue})
        </div>
      ))}
    </div>
  ),
};

/** Box shadow tokens for use with the `shadow` property. */
export const Shadows: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8 p-8">
      <div className="flex items-center justify-center h-32 w-32 bg-white text-black text-sm font-medium shadow-xs">
        xs
      </div>
      <div className="flex items-center justify-center h-32 w-32 bg-white text-black text-sm font-medium shadow-sm">
        sm
      </div>
      <div className="flex items-center justify-center h-32 w-32 bg-white text-black text-sm font-medium shadow">
        DEFAULT
      </div>
      <div className="flex items-center justify-center h-32 w-32 bg-white text-black text-sm font-medium shadow-md">
        md
      </div>
      <div className="flex items-center justify-center h-32 w-32 bg-white text-black text-sm font-medium shadow-lg">
        lg
      </div>
      <div className="flex items-center justify-center h-32 w-32 bg-white text-black text-sm font-medium shadow-xl">
        xl
      </div>
      <div className="flex items-center justify-center h-32 w-32 bg-white text-black text-sm font-medium shadow-2xl">
        2xl
      </div>
      <div className="flex items-center justify-center h-32 w-32 bg-white text-black text-sm font-medium shadow-inner">
        inner
      </div>
    </div>
  ),
};
