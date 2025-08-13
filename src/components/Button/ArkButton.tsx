"use client";

import { ark } from "@ark-ui/react/factory";
import { ComponentPropsWithoutRef, ComponentType, forwardRef, JSX, ReactNode } from "react";
import { css, cva, cx, type RecipeVariantProps } from "styled-system/css";

import { focusRing } from "@/recipes";

import { ButtonContentWithSpinner } from "./shared";

export type BaseButtonProps = Omit<
  ComponentPropsWithoutRef<typeof ark.button>,
  "asChild" | "aria-label"
>;
export type ButtonVariants = NonNullable<RecipeVariantProps<typeof buttonStyles>>;

export interface ButtonProps extends BaseButtonProps {
  /** The button's label. This will be replaced with a spinner when `loading` is set to true. */
  children: ReactNode;
  /** The style variant of the button */
  variant?: ButtonVariants["variant"];
  /** The size of the button */
  size?: ButtonVariants["size"];
  /** When `true`, the button will fill the width of its parent. */
  fullWidth?: boolean;
  /** An icon component to be positioned to the left of the button label. */
  LeadIcon?: ComponentType<{ className?: string }>;
  /** An icon component to be positioned to the right of the button label. */
  TailIcon?: ComponentType<{ className?: string }>;
  /** When true, the contents of the button will be replaced with a spinner and the button will be disabled. */
  loading?: boolean;
  /**
   * An aria-label to override the label passed via the `children` prop.
   * Useful for situations where `children` is not a string
   */
  ariaLabel?: string;
  /**
   * A function that allows you to replace the default `button` element with another HTML element
   * or custom component. Useful for rendering a link that looks like a button.
   * @example
   * ```tsx
   * <Button render={(children) => <a href="https://google.com">{children}</a>}>
   *   Google
   * <Button/>
   * ```
   */
  render?: (children: ReactNode) => JSX.Element;
}

/** An interactive element that accepts all the attributes that a `button` element does. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      LeadIcon,
      TailIcon,
      loading,
      disabled,
      ariaLabel,
      children,
      render,
      className,
      ...props
    },
    ref,
  ) => {
    const resolvedAriaLabel = ariaLabel || (typeof children === "string" ? children : undefined);

    const childrenToRender = (
      <ButtonContentWithSpinner
        loading={loading}
        size={size}
        variant={variant}
        className={css({ gap: size === "sm" ? "8" : "12", h: "full" })}
      >
        {LeadIcon && <LeadIcon className={iconStyles({ size })} />}
        <span className={labelStyles({ size })}>{children}</span>
        {TailIcon && <TailIcon className={iconStyles({ size })} />}
      </ButtonContentWithSpinner>
    );

    return (
      <ark.button
        ref={ref}
        data-loading={loading || undefined}
        disabled={disabled || loading}
        aria-label={resolvedAriaLabel}
        className={cx(
          buttonStyles({ variant, size }),
          fullWidth && css({ w: "full" }),
          focusRing(),
          className,
        )}
        asChild={!!render}
        {...props}
      >
        {render ? render(childrenToRender) : childrenToRender}
      </ark.button>
    );
  },
);
Button.displayName = "Button";

export const buttonStyles = cva({
  base: {
    display: "inline-block",
    outline: "none",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    borderStyle: "solid",
    borderWidth: "100",
    rounded: "primary",
    cursor: "pointer",
    _disabled: { cursor: "not-allowed", "&[data-loading=true]": { cursor: "wait" } },
    "&:active:not(:disabled)": {
      backgroundClip: "padding-box",
    },
    "&:hover:not(:disabled), &:disabled:not([data-loading=true])": {
      // Limit the background to the padding area so that it doesn't stack with the border-color
      // Since the border-color has transparency for some variants, we don't want the colors
      // to mix and create a darker border.
      backgroundClip: "padding-box",
    },
    transition:
      "[background-color {durations.100} ease, border-color {durations.100} ease, color {durations.100} ease]",
  },

  variants: {
    variant: {
      outline: {
        bg: "transparent",
        borderColor: "button.outline.border",
        color: "button.outline.text",
        "&:hover:not(:disabled)": {
          bg: "transparent",
          borderColor: "button.outline.hover.border",
          color: "button.outline.hover.text",
        },
        "&:active:not(:disabled)": {
          bg: "transparent",
          borderColor: "button.outline.pressed.border",
          color: "button.outline.pressed.text",
        },
        "&:disabled:not([data-loading=true])": {
          bg: "button.outline.disabled.background",
          borderColor: "button.outline.disabled.border",
          color: "button.outline.disabled.text",
        },
      },
      primary: {
        bg: "button.primary.background",
        borderColor: "button.primary.background",
        color: "button.primary.text",
        "&:hover:not(:disabled)": {
          bg: "button.primary.hover.background",
          borderColor: "button.primary.hover.background",
          color: "button.primary.hover.text",
        },
        "&:active:not(:disabled)": {
          bg: "button.primary.pressed.background",
          borderColor: "button.primary.pressed.background",
          color: "button.primary.pressed.text",
        },
        "&:disabled:not([data-loading=true])": {
          bg: "button.primary.disabled.background",
          borderColor: "button.primary.disabled.background",
          color: "button.primary.disabled.text",
        },
      },
      secondary: {
        bg: "button.secondary.background",
        borderColor: "button.secondary.background",
        color: "button.secondary.text",
        "&:hover:not(:disabled)": {
          bg: "button.secondary.hover.background",
          borderColor: "button.secondary.hover.background",
          color: "button.secondary.hover.text",
        },
        "&:active:not(:disabled)": {
          bg: "button.secondary.pressed.background",
          borderColor: "button.secondary.pressed.background",
          color: "button.secondary.pressed.text",
        },
        "&:disabled:not([data-loading=true])": {
          bg: "button.secondary.disabled.background",
          borderColor: "button.secondary.disabled.background",
          color: "button.secondary.disabled.text",
        },
      },
      destructive: {
        bg: "button.destructive.background",
        borderColor: "button.destructive.background",
        color: "button.destructive.text",
        "&:hover:not(:disabled)": {
          bg: "button.destructive.hover.background",
          borderColor: "button.destructive.hover.background",
          color: "button.destructive.hover.text",
        },
        "&:active:not(:disabled)": {
          bg: "button.destructive.pressed.background",
          borderColor: "button.destructive.pressed.background",
          color: "button.destructive.pressed.text",
        },
        "&:disabled:not([data-loading=true])": {
          bg: "button.destructive.disabled.background",
          borderColor: "button.destructive.disabled.background",
          color: "button.destructive.disabled.text",
        },
      },
      text: {
        bg: "transparent",
        borderColor: "transparent",
        color: "button.text.text",
        "&:hover:not(:disabled)": {
          color: "button.text.hover.text",
        },
        "&:active:not(:disabled)": {
          color: "button.text.pressed.text",
        },
        "&:disabled:not([data-loading=true])": {
          color: "button.text.disabled.text",
        },
      },
      destructiveText: {
        bg: "transparent",
        borderColor: "transparent",
        color: "button.text.destructive.text",
        "&:hover:not(:disabled)": {
          color: "button.text.destructive.hover.text",
        },
        "&:active:not(:disabled)": {
          color: "button.text.destructive.pressed.text",
        },
        "&:disabled:not([data-loading=true])": {
          color: "button.text.destructive.disabled.text",
        },
      },
    },
    size: {
      // Since our Figma uses inner borders and CSS doesn't natively support that,
      // we're subtracting the border width from the padding
      sm: {
        px: "[calc({spacing.16} - {borderWidths.100})]",
        h: "32",
      },
      md: {
        px: "[calc({spacing.20} - {borderWidths.100})]",
        h: "[36px]",
      },
      lg: {
        px: "[calc({spacing.20} - {borderWidths.100})]",
        h: "[44px]",
      },
    },
  },
});

const iconStyles = cva({
  base: {},
  variants: {
    size: {
      sm: { h: "16", w: "16" },
      md: { h: "16", w: "16" },
      lg: { h: "20", w: "20" },
    },
  },
});

const labelStyles = cva({
  base: {},
  variants: {
    size: {
      sm: { textStyle: "capsized.body.sm" },
      md: { textStyle: "capsized.body.sm" },
      lg: { textStyle: "capsized.body.md" },
    },
  },
});
