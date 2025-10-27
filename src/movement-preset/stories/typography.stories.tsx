import {
  Subtitle,
  Description,
  Controls,
  Stories,
  Title,
} from "@storybook/addon-docs/blocks";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Theme/Typography",
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

const TextExample = ({
  className,
  label,
}: {
  className: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <p className={className}>The quick brown fox jumps over the lazy dog.</p>
      <code className="text-xs text-moveus-marigold-200">{label}</code>
    </div>
  );
};

/** TWK Everett Bold text used for large headings. */
export const HeadingLarge: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-heading font-bold text-[48px] leading-[100%]"
        label="heading-large.5xl (48px)"
      />
      <TextExample
        className="font-heading font-bold text-[40px] leading-[100%]"
        label="heading-large.4xl (40px)"
      />
      <TextExample
        className="font-heading font-bold text-[32px] leading-[100%]"
        label="heading-large.3xl (32px)"
      />
      <TextExample
        className="font-heading font-bold text-[30px] leading-[100%]"
        label="heading-large.2xl (30px)"
      />
      <TextExample
        className="font-heading font-bold text-[28px] leading-[100%]"
        label="heading-large.xl (28px)"
      />
      <TextExample
        className="font-heading font-bold text-[24px] leading-[100%]"
        label="heading-large.lg (24px)"
      />
      <TextExample
        className="font-heading font-bold text-[20px] leading-[100%]"
        label="heading-large.md (20px)"
      />
      <TextExample
        className="font-heading font-bold text-[18px] leading-[100%]"
        label="heading-large.sm (18px)"
      />
      <TextExample
        className="font-heading font-bold text-[16px] leading-[100%]"
        label="heading-large.xs (16px)"
      />
    </div>
  ),
};

/** TWK Everett Bold text used for small headings. */
export const HeadingSmall: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-heading font-bold text-[20px] leading-[100%]"
        label="heading-small.xl (20px)"
      />
      <TextExample
        className="font-heading font-bold text-[18px] leading-[100%]"
        label="heading-small.lg (18px)"
      />
      <TextExample
        className="font-heading font-bold text-[16px] leading-[100%]"
        label="heading-small.md (16px)"
      />
      <TextExample
        className="font-heading font-bold text-[14px] leading-[100%]"
        label="heading-small.sm (14px)"
      />
      <TextExample
        className="font-heading font-bold text-[12px] leading-[100%]"
        label="heading-small.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Bold text. */
export const MonoBold: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-bold text-[20px] leading-[100%]"
        label="mono-bold.xl (20px)"
      />
      <TextExample
        className="font-mono font-bold text-[18px] leading-[100%]"
        label="mono-bold.lg (18px)"
      />
      <TextExample
        className="font-mono font-bold text-[16px] leading-[100%]"
        label="mono-bold.md (16px)"
      />
      <TextExample
        className="font-mono font-bold text-[14px] leading-[100%]"
        label="mono-bold.sm (14px)"
      />
      <TextExample
        className="font-mono font-bold text-[12px] leading-[100%]"
        label="mono-bold.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Medium text. */
export const MonoMedium: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-medium text-[20px] leading-[100%]"
        label="mono-medium.xl (20px)"
      />
      <TextExample
        className="font-mono font-medium text-[18px] leading-[100%]"
        label="mono-medium.lg (18px)"
      />
      <TextExample
        className="font-mono font-medium text-[16px] leading-[100%]"
        label="mono-medium.md (16px)"
      />
      <TextExample
        className="font-mono font-medium text-[14px] leading-[100%]"
        label="mono-medium.sm (14px)"
      />
      <TextExample
        className="font-mono font-medium text-[12px] leading-[100%]"
        label="mono-medium.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Regular text. */
export const MonoRegular: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-regular text-[20px] leading-[100%]"
        label="mono-regular.xl (20px)"
      />
      <TextExample
        className="font-mono font-regular text-[18px] leading-[100%]"
        label="mono-regular.lg (18px)"
      />
      <TextExample
        className="font-mono font-regular text-[16px] leading-[100%]"
        label="mono-regular.md (16px)"
      />
      <TextExample
        className="font-mono font-regular text-[14px] leading-[100%]"
        label="mono-regular.sm (14px)"
      />
      <TextExample
        className="font-mono font-regular text-[12px] leading-[100%]"
        label="mono-regular.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Light text. */
export const MonoLight: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-light text-[20px] leading-[100%]"
        label="mono-light.xl (20px)"
      />
      <TextExample
        className="font-mono font-light text-[18px] leading-[100%]"
        label="mono-light.lg (18px)"
      />
      <TextExample
        className="font-mono font-light text-[16px] leading-[100%]"
        label="mono-light.md (16px)"
      />
      <TextExample
        className="font-mono font-light text-[14px] leading-[100%]"
        label="mono-light.sm (14px)"
      />
      <TextExample
        className="font-mono font-light text-[12px] leading-[100%]"
        label="mono-light.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Hairline text. */
export const MonoHairline: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-hairline text-[20px] leading-[100%]"
        label="mono-hairline.xl (20px)"
      />
      <TextExample
        className="font-mono font-hairline text-[18px] leading-[100%]"
        label="mono-hairline.lg (18px)"
      />
      <TextExample
        className="font-mono font-hairline text-[16px] leading-[100%]"
        label="mono-hairline.md (16px)"
      />
      <TextExample
        className="font-mono font-hairline text-[14px] leading-[100%]"
        label="mono-hairline.sm (14px)"
      />
      <TextExample
        className="font-mono font-hairline text-[12px] leading-[100%]"
        label="mono-hairline.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Thin text. */
export const MonoThin: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-thin text-[20px] leading-[100%]"
        label="mono-thin.xl (20px)"
      />
      <TextExample
        className="font-mono font-thin text-[18px] leading-[100%]"
        label="mono-thin.lg (18px)"
      />
      <TextExample
        className="font-mono font-thin text-[16px] leading-[100%]"
        label="mono-thin.md (16px)"
      />
      <TextExample
        className="font-mono font-thin text-[14px] leading-[100%]"
        label="mono-thin.sm (14px)"
      />
      <TextExample
        className="font-mono font-thin text-[12px] leading-[100%]"
        label="mono-thin.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Ultralight text. */
export const MonoUltralight: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-ultralight text-[20px] leading-[100%]"
        label="mono-ultralight.xl (20px)"
      />
      <TextExample
        className="font-mono font-ultralight text-[18px] leading-[100%]"
        label="mono-ultralight.lg (18px)"
      />
      <TextExample
        className="font-mono font-ultralight text-[16px] leading-[100%]"
        label="mono-ultralight.md (16px)"
      />
      <TextExample
        className="font-mono font-ultralight text-[14px] leading-[100%]"
        label="mono-ultralight.sm (14px)"
      />
      <TextExample
        className="font-mono font-ultralight text-[12px] leading-[100%]"
        label="mono-ultralight.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Extrabold text. */
export const MonoExtrabold: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-extrabold text-[20px] leading-[100%]"
        label="mono-extrabold.xl (20px)"
      />
      <TextExample
        className="font-mono font-extrabold text-[18px] leading-[100%]"
        label="mono-extrabold.lg (18px)"
      />
      <TextExample
        className="font-mono font-extrabold text-[16px] leading-[100%]"
        label="mono-extrabold.md (16px)"
      />
      <TextExample
        className="font-mono font-extrabold text-[14px] leading-[100%]"
        label="mono-extrabold.sm (14px)"
      />
      <TextExample
        className="font-mono font-extrabold text-[12px] leading-[100%]"
        label="mono-extrabold.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Super text. */
export const MonoSuper: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-super text-[20px] leading-[100%]"
        label="mono-super.xl (20px)"
      />
      <TextExample
        className="font-mono font-super text-[18px] leading-[100%]"
        label="mono-super.lg (18px)"
      />
      <TextExample
        className="font-mono font-super text-[16px] leading-[100%]"
        label="mono-super.md (16px)"
      />
      <TextExample
        className="font-mono font-super text-[14px] leading-[100%]"
        label="mono-super.sm (14px)"
      />
      <TextExample
        className="font-mono font-super text-[12px] leading-[100%]"
        label="mono-super.xs (12px)"
      />
    </div>
  ),
};

/** TWK Everett Mono Black text. */
export const MonoBlack: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-mono font-black text-[20px] leading-[100%]"
        label="mono-black.xl (20px)"
      />
      <TextExample
        className="font-mono font-black text-[18px] leading-[100%]"
        label="mono-black.lg (18px)"
      />
      <TextExample
        className="font-mono font-black text-[16px] leading-[100%]"
        label="mono-black.md (16px)"
      />
      <TextExample
        className="font-mono font-black text-[14px] leading-[100%]"
        label="mono-black.sm (14px)"
      />
      <TextExample
        className="font-mono font-black text-[12px] leading-[100%]"
        label="mono-black.xs (12px)"
      />
    </div>
  ),
};

/** Neue Haas Unica Pro Heavy text. */
export const BodyHeavy: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-body font-black text-[20px] leading-[100%]"
        label="body-heavy.xl (20px)"
      />
      <TextExample
        className="font-body font-black text-[18px] leading-[100%]"
        label="body-heavy.lg (18px)"
      />
      <TextExample
        className="font-body font-black text-[16px] leading-[100%]"
        label="body-heavy.md (16px)"
      />
      <TextExample
        className="font-body font-black text-[14px] leading-[100%]"
        label="body-heavy.sm (14px)"
      />
      <TextExample
        className="font-body font-black text-[12px] leading-[100%]"
        label="body-heavy.xs (12px)"
      />
    </div>
  ),
};

/** Neue Haas Unica Pro Bold text. */
export const BodyBold: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-body font-bold text-[20px] leading-[100%]"
        label="body-bold.xl (20px)"
      />
      <TextExample
        className="font-body font-bold text-[18px] leading-[100%]"
        label="body-bold.lg (18px)"
      />
      <TextExample
        className="font-body font-bold text-[16px] leading-[100%]"
        label="body-bold.md (16px)"
      />
      <TextExample
        className="font-body font-bold text-[14px] leading-[100%]"
        label="body-bold.sm (14px)"
      />
      <TextExample
        className="font-body font-bold text-[12px] leading-[100%]"
        label="body-bold.xs (12px)"
      />
    </div>
  ),
};

/** Neue Haas Unica Pro Medium text. */
export const BodyMedium: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-body font-medium text-[20px] leading-[100%]"
        label="body-medium.xl (20px)"
      />
      <TextExample
        className="font-body font-medium text-[18px] leading-[100%]"
        label="body-medium.lg (18px)"
      />
      <TextExample
        className="font-body font-medium text-[16px] leading-[100%]"
        label="body-medium.md (16px)"
      />
      <TextExample
        className="font-body font-medium text-[14px] leading-[100%]"
        label="body-medium.sm (14px)"
      />
      <TextExample
        className="font-body font-medium text-[12px] leading-[100%]"
        label="body-medium.xs (12px)"
      />
    </div>
  ),
};

/** Neue Haas Unica Pro Light text. */
export const BodyLight: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-body font-light text-[20px] leading-[100%]"
        label="body-light.xl (20px)"
      />
      <TextExample
        className="font-body font-light text-[18px] leading-[100%]"
        label="body-light.lg (18px)"
      />
      <TextExample
        className="font-body font-light text-[16px] leading-[100%]"
        label="body-light.md (16px)"
      />
      <TextExample
        className="font-body font-light text-[14px] leading-[100%]"
        label="body-light.sm (14px)"
      />
      <TextExample
        className="font-body font-light text-[12px] leading-[100%]"
        label="body-light.xs (12px)"
      />
    </div>
  ),
};

/** Neue Haas Unica Pro Regular text. */
export const BodyRegular: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-body font-regular text-[20px] leading-[100%]"
        label="body-regular.xl (20px)"
      />
      <TextExample
        className="font-body font-regular text-[18px] leading-[100%]"
        label="body-regular.lg (18px)"
      />
      <TextExample
        className="font-body font-regular text-[16px] leading-[100%]"
        label="body-regular.md (16px)"
      />
      <TextExample
        className="font-body font-regular text-[14px] leading-[100%]"
        label="body-regular.sm (14px)"
      />
      <TextExample
        className="font-body font-regular text-[12px] leading-[100%]"
        label="body-regular.xs (12px)"
      />
    </div>
  ),
};

/** Tables/uppercase text. */
export const TablesUppercase: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextExample
        className="font-body font-regular text-[20px] leading-[100%] uppercase"
        label="tables-uppercase.xl (20px)"
      />
      <TextExample
        className="font-body font-regular text-[18px] leading-[100%] uppercase"
        label="tables-uppercase.lg (18px)"
      />
      <TextExample
        className="font-body font-regular text-[16px] leading-[100%] uppercase"
        label="tables-uppercase.md (16px)"
      />
      <TextExample
        className="font-body font-regular text-[14px] leading-[100%] uppercase"
        label="tables-uppercase.sm (14px)"
      />
      <TextExample
        className="font-body font-regular text-[12px] leading-[100%] uppercase"
        label="tables-uppercase.xs (12px)"
      />
    </div>
  ),
};
