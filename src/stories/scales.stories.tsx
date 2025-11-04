import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  borderWidths,
  radii,
  spacing,
  zIndex,
  shadows,
  sizes,
} from "../lib/scales";

const meta: Meta = {
  title: "Theme/Scales",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};
export default meta;

type Story = StoryObj;

/** Tokens for use with the `borderRadius`/`rounded` property. */
export const Radii: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8">
      {Object.entries(radii).map(([name, radius]) => (
        <div
          key={name}
          className="flex h-[120px] w-[120px] items-center justify-center bg-moveus-marigold-400 text-black font-medium"
          style={{ borderRadius: radius.value }}
        >
          {name}
        </div>
      ))}
    </div>
  ),
};

/** Tokens for use with the `borderWidth` property. */
export const BorderWidths: Story = {
  render: () => (
    <div className="flex items-center gap-8 flex-wrap">
      {Object.entries(borderWidths).map(([name, borderWidth]) => (
        <div
          key={name}
          className="flex h-[120px] w-[120px] items-center justify-center bg-background text-foreground font-medium border-moveus-marigold-400"
          style={{ borderWidth: borderWidth.value, borderStyle: "solid" }}
        >
          {name}
        </div>
      ))}
    </div>
  ),
};

/** Tokens for use with spacing and size related properties like `margin`, `padding`, `height`, `width`, etc. */
export const Spacing: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      <div className="grid grid-cols-[60px_60px_1fr] items-center gap-2 w-full">
        <span className="font-medium text-sm">Name</span>
        <span className="font-medium text-sm">Value</span>
        <span className="font-medium text-sm">Preview</span>
      </div>
      {Object.entries(spacing).map(([name, spacingValue]) => (
        <div
          key={name}
          className="grid grid-cols-[60px_60px_1fr] items-center gap-2 w-full"
        >
          <span className="text-sm">{name}</span>
          <span className="text-sm">{spacingValue.value}</span>
          <div
            className="h-8 bg-moveus-marigold-400 flex items-center justify-center text-black text-xs"
            style={{ width: spacingValue.value }}
          />
        </div>
      ))}
    </div>
  ),
};

/** Tokens for use with the `size` property. Includes spacing values plus semantic sizes. */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      <div className="grid grid-cols-[80px_120px_1fr] items-center gap-2 w-full">
        <span className="font-medium text-sm">Name</span>
        <span className="font-medium text-sm">Value</span>
        <span className="font-medium text-sm">Description</span>
      </div>
      {Object.entries(sizes).map(([name, sizeValue]) => {
        const isNumeric = ![
          "prose",
          "full",
          "min",
          "max",
          "fit",
          "px",
        ].includes(name);
        return (
          <div
            key={name}
            className="grid grid-cols-[80px_120px_1fr] items-center gap-2 w-full"
          >
            <span className="text-sm font-mono">{name}</span>
            <span className="text-sm">{sizeValue.value}</span>
            <span className="text-sm text-muted-foreground">
              {!isNumeric && name === "prose" && "Readable text width"}
              {!isNumeric && name === "full" && "100% of parent"}
              {!isNumeric && name === "min" && "Minimum content size"}
              {!isNumeric && name === "max" && "Maximum content size"}
              {!isNumeric && name === "fit" && "Fit to content"}
              {!isNumeric && name === "px" && "Single pixel"}
              {isNumeric && "Fixed size"}
            </span>
          </div>
        );
      })}
    </div>
  ),
};

/** Tokens for use with the `boxShadow`/`shadow` property. */
export const Shadows: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8">
      {Object.entries(shadows).map(([name, shadow]) => (
        <div
          key={name}
          className="flex h-[120px] w-[120px] items-center justify-center bg-background text-foreground font-medium rounded-lg"
          style={{ boxShadow: shadow.value }}
        >
          {name}
        </div>
      ))}
    </div>
  ),
};

/** Tokens for use with the `zIndex` property. */
export const ZIndex: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      {Object.entries(zIndex).map(([name, zIndexValue]) => (
        <div
          key={name}
          className="flex h-[120px] w-[120px] items-center justify-center bg-moveus-marigold-400 text-black font-medium rounded-full text-center p-2"
          style={{ zIndex: zIndexValue.value }}
        >
          <div>
            <div className="text-sm">{name}</div>
            <div className="text-xs">({String(zIndexValue.value)})</div>
          </div>
        </div>
      ))}
    </div>
  ),
};
