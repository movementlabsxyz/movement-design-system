import { ark } from "@ark-ui/react/factory";
import {
  ComponentPropsWithoutRef,
  ComponentType,
  forwardRef,
  JSX,
  ReactNode,
} from "react";
import { css, cx, type RecipeVariantProps } from "styled-system/css";

import { buttonStyles, iconStyles } from "./button.styles";

export type BaseButtonProps = Omit<
  ComponentPropsWithoutRef<typeof ark.button>,
  "asChild" | "aria-label"
>;
export type ButtonVariants = NonNullable<
  RecipeVariantProps<typeof buttonStyles>
>;

export interface ButtonProps extends BaseButtonProps {
  /** The button's label. */
  children: ReactNode;
  /** The style variant of the button */
  variant?: ButtonVariants["variant"];
  /** The color theme of the button */
  color?: ButtonVariants["color"];
  /** The size of the button */
  size?: ButtonVariants["size"];
  /** The border radius of the button */
  radius?: ButtonVariants["radius"];
  /** When `true`, the button will fill the width of its parent. */
  fullWidth?: boolean;
  /** An icon component to be positioned to the left of the button label. */
  LeadIcon?: ComponentType<{ className?: string }>;
  /** An icon component to be positioned to the right of the button label. */
  TailIcon?: ComponentType<{ className?: string }>;
  /** When true, the button will be disabled. */
  disabled?: boolean;
  /**
   * An aria-label to override the label passed via the `children` prop.
   * Useful for situations where `children` is not a string
   */
  ariaLabel?: string;
  /**
   * A function that allows you to replace the default `button` element with another HTML element
   * or custom component. Useful for rendering a link that looks like a button.
   */
  render?: (children: ReactNode) => JSX.Element;
}

/** An interactive button component with comprehensive styling options. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "filled",
      color = "yellow",
      size = "md",
      radius = "md",
      fullWidth = false,
      LeadIcon,
      TailIcon,
      disabled,
      ariaLabel,
      children,
      render,
      className,
      ...props
    },
    ref
  ) => {
    const resolvedAriaLabel =
      ariaLabel || (typeof children === "string" ? children : undefined);

    const childrenToRender = (
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: size === "sm" ? "8" : "12",
          h: "full",
          textTransform: "uppercase",
          fontWeight: "500",
        })}
      >
        {LeadIcon && <LeadIcon className={iconStyles({ size })} />}
        <span>{children}</span>
        {TailIcon && <TailIcon className={iconStyles({ size })} />}
      </div>
    );

    return (
      <ark.button
        ref={ref}
        disabled={disabled}
        aria-label={resolvedAriaLabel}
        className={cx(
          buttonStyles({ variant, color, size, radius }),
          fullWidth && css({ w: "full" }),
          className
        )}
        asChild={!!render}
        {...props}
      >
        {render ? render(childrenToRender) : childrenToRender}
      </ark.button>
    );
  }
);
Button.displayName = "Button";
