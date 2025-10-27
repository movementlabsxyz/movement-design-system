import { forwardRef } from "react";
import { type VariantProps } from "class-variance-authority";

import { buttonStyles } from "./button.styles";
import { BaseButton, type CommonButtonProps } from "./BaseButton";

export type ButtonVariants = VariantProps<typeof buttonStyles>;

export interface ButtonProps
  extends Omit<CommonButtonProps, "iconSize" | "color"> {
  /** The style variant of the button */
  variant?: ButtonVariants["variant"];
  /** The color theme of the button */
  color?: ButtonVariants["color"];
  /** The size of the button */
  size?: ButtonVariants["size"];
  /** The border radius of the button */
  radius?: ButtonVariants["radius"];
  /** Icon size for LeadIcon and TailIcon */
  iconSize?: "sm" | "md" | "lg";
}

/** An interactive button component with comprehensive styling options. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "filled",
      color = "yellow",
      size = "md",
      radius = "md",
      gap = size === "sm" ? "8" : "12",
      iconSize = size,
      ...props
    },
    ref
  ) => {
    const buttonCustomStyles = buttonStyles({ variant, color, size, radius });

    return (
      <BaseButton
        ref={ref}
        customStyles={buttonCustomStyles}
        gap={gap}
        iconSize={iconSize ?? "md"}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
