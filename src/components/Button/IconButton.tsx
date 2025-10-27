import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { BaseButton, type CommonButtonProps } from "./BaseButton";

const iconButtonStyles = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "cursor-pointer",
    "transition-all",
    "duration-200",
    "ease-in-out",
    "outline-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
    "focus:outline-2",
    "focus:outline-byzantine-blue-400",
    "focus:outline-offset-2",
  ],
  {
    variants: {
      size: {
        sm: ["w-8", "h-8", "p-2"],
        md: ["w-10", "h-10", "p-2"],
        lg: ["w-12", "h-12", "p-3"],
      },
      variant: {
        filled: [
          "bg-transparent",
          "border",
          "border-transparent",
          "hover:bg-black/10",
          "active:bg-black/20",
        ],
        outlined: [
          "bg-transparent",
          "border",
          "border-black/30",
          "hover:bg-black/10",
          "hover:border-black/40",
          "active:bg-black/20",
          "active:border-black/50",
        ],
        text: [
          "bg-transparent",
          "border",
          "border-transparent",
          "hover:bg-black/10",
          "active:bg-black/20",
        ],
        ghost: [
          "bg-transparent",
          "border",
          "border-transparent",
          "hover:bg-black/10",
          "active:bg-black/20",
        ],
      },
      color: {
        primary: [
          "text-moveus-marigold-400",
          "hover:text-moveus-marigold-500",
          "active:text-moveus-marigold-600",
        ],
        secondary: [
          "text-byzantine-blue-400",
          "hover:text-byzantine-blue-500",
          "active:text-byzantine-blue-600",
        ],
        neutral: [
          "text-black/70",
          "hover:text-black/80",
          "active:text-black/90",
        ],
        danger: [
          "text-oracle-orange-400",
          "hover:text-oracle-orange-600",
          "active:text-oracle-orange-600",
        ],
        success: [
          "text-guild-green-400",
          "hover:text-guild-green-600",
          "active:text-guild-green-600",
        ],
        warning: [
          "text-moveus-marigold-400",
          "hover:text-moveus-marigold-600",
          "active:text-moveus-marigold-600",
        ],
      },
      radius: {
        sm: ["rounded"],
        md: ["rounded-lg"],
        lg: ["rounded-xl"],
        full: ["rounded-full"],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "filled",
      color: "primary",
      radius: "md",
    },
  }
);

export interface IconButtonProps
  extends Omit<CommonButtonProps, "iconSize" | "color"> {
  /** The size of the icon button */
  size?: VariantProps<typeof iconButtonStyles>["size"];
  /** The variant style of the button */
  variant?: VariantProps<typeof iconButtonStyles>["variant"];
  /** The color theme of the button */
  color?: VariantProps<typeof iconButtonStyles>["color"];
  /** The border radius of the button */
  radius?: VariantProps<typeof iconButtonStyles>["radius"];
}

/** A specialized button component designed for icon-only content with various styling options. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      size = "md",
      variant = "filled",
      color = "primary",
      radius = "md",
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <BaseButton
        ref={ref}
        customStyles={cn(
          iconButtonStyles({ size, variant, color, radius }),
          className
        )}
        textTransform="none"
        fontWeight="normal"
        iconSize={size ?? "md"}
        {...props}
      >
        {children}
      </BaseButton>
    );
  }
);
IconButton.displayName = "IconButton";
