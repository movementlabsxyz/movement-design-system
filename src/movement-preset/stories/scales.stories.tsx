import type { Meta, StoryObj } from "@storybook/react-vite";
import { center, flex, stack } from "styled-system/patterns";

import { borderWidths, radii, spacing, zIndex } from "../scales";

const meta: Meta = {
  title: "Theme/Scales",
};
export default meta;

type Story = StoryObj;

/** Tokens for use with the `borderRadius`/`rounded` property. */
export const Radii: Story = {
  render: () => (
    <div className={flex({ wrap: "wrap", align: "center", gap: "8" })}>
      {Object.entries(radii).map(([name, radius]) => (
        <div
          key={name}
          className={center({
            h: "120",
            w: "120",
            bg: "moveus-marigold.400",
            color: "black",
            textStyle: "label.md",
          })}
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
    <div className={flex({ align: "center", gap: "8" })}>
      {Object.entries(borderWidths).map(([name, borderWidth]) => (
        <div
          key={name}
          className={center({
            h: "120",
            w: "120",
            bg: "background.primary",
            color: "text.primary",
            textStyle: "label.md",
            borderColor: "moveus-marigold.400",
          })}
          style={{ borderWidth: borderWidth.value }}
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
    <div className={flex({ wrap: "wrap", align: "flex-end", gap: "8" })}>
      {Object.entries(spacing).map(([name, spacingValue]) => (
        <div
          key={name}
          className={stack({ align: "center", textStyle: "label.md" })}
        >
          <div
            className={center({
              w: "8",
              bg: "moveus-marigold.400",
              color: "black",
            })}
            style={{ height: spacingValue.value }}
          />
          {name}
        </div>
      ))}
    </div>
  ),
};

/** Tokens for use with the `zIndex` property. */
export const ZIndex: Story = {
  render: () => (
    <div className={flex({ align: "center", gap: "8", wrap: "wrap" })}>
      {Object.entries(zIndex).map(([name, zIndexValue]) => (
        <div
          key={name}
          className={center({
            h: "120",
            w: "120",
            bg: "moveus-marigold.400",
            color: "black",
            textStyle: "label.md",
            rounded: "200",
          })}
          style={{ zIndex: zIndexValue.value }}
        >
          {name} ({zIndexValue.value})
        </div>
      ))}
    </div>
  ),
};
