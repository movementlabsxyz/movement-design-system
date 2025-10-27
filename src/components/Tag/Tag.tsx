import { ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { type TagVariant, type TagColor, type TagSize } from "./types";

// Mock icon components for tag
const IconStar = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconX = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);

export interface TagProps {
  /** The content of the tag */
  children: ReactNode;
  /** The visual variant of the tag */
  variant?: TagVariant;
  /** The color scheme of the tag */
  color?: TagColor;
  /** The size of the tag */
  size?: TagSize;
  /** Whether the tag has an icon */
  hasIcon?: boolean;
  /** Whether the tag can be dismissed */
  isDismissible?: boolean;
  /** Callback when the tag is dismissed */
  onDismiss?: () => void;
  /** Additional CSS classes */
  className?: string;
}

// Tag recipe using CVA
const tagRecipe = cva(
  [
    "inline-flex",
    "items-center",
    "rounded",
    "font-body",
    "font-regular",
    "leading-none",
    "cursor-default",
    "transition-all",
    "duration-200",
    "ease-in-out",
  ],
  {
    variants: {
      variant: {
        outline: ["border", "bg-transparent"],
        solid: ["border"],
      },
      color: {
        yellow: ["text-guild-green-300", "border-guild-green-300"],
        blue: ["text-byzantine-blue-500", "border-byzantine-blue-500"],
        pink: ["text-protocol-pink-500", "border-protocol-pink-500"],
        red: ["text-oracle-orange-500", "border-oracle-orange-500"],
        green: ["text-guild-green-500", "border-guild-green-500"],
      },
      size: {
        sm: ["px-2", "py-1", "text-xs", "gap-1"],
        md: ["px-3", "py-1.5", "text-sm", "gap-2"],
        lg: ["px-4", "py-2", "text-base", "gap-2"],
        xl: ["px-5", "py-2.5", "text-lg", "gap-3"],
      },
    },
    compoundVariants: [
      // Solid variant with different text colors
      {
        variant: "solid",
        color: "yellow",
        className: ["text-black", "border-black", "bg-guild-green-300"],
      },
      {
        variant: "solid",
        color: "blue",
        className: ["text-white", "border-black", "bg-byzantine-blue-500"],
      },
      {
        variant: "solid",
        color: "pink",
        className: ["text-white", "border-black", "bg-protocol-pink-500"],
      },
      {
        variant: "solid",
        color: "red",
        className: ["text-white", "border-black", "bg-oracle-orange-500"],
      },
      {
        variant: "solid",
        color: "green",
        className: ["text-white", "border-black", "bg-guild-green-500"],
      },
    ],
    defaultVariants: {
      variant: "outline",
      color: "yellow",
      size: "md",
    },
  }
);

// Tag icon recipe using CVA
const tagIconRecipe = cva(["flex-shrink-0"], {
  variants: {
    variant: {
      outline: [],
      solid: [],
    },
    color: {
      yellow: [],
      blue: [],
      pink: [],
      red: [],
      green: [],
    },
    size: {
      sm: ["w-3", "h-3"],
      md: ["w-4", "h-4"],
      lg: ["w-5", "h-5"],
      xl: ["w-6", "h-6"],
    },
  },
  compoundVariants: [
    // Solid variant with different icon colors
    {
      variant: "solid",
      color: "yellow",
      className: ["text-black"],
    },
    {
      variant: "solid",
      color: "blue",
      className: ["text-white"],
    },
    {
      variant: "solid",
      color: "pink",
      className: ["text-white"],
    },
    {
      variant: "solid",
      color: "red",
      className: ["text-white"],
    },
    {
      variant: "solid",
      color: "green",
      className: ["text-white"],
    },
  ],
  defaultVariants: {
    variant: "outline",
    color: "yellow",
    size: "md",
  },
});

// Tag close button recipe using CVA
const tagCloseRecipe = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "cursor-pointer",
    "rounded-sm",
    "transition-all",
    "duration-200",
    "ease-in-out",
    "hover:bg-current",
    "hover:opacity-10",
  ],
  {
    variants: {
      variant: {
        outline: [],
        solid: [],
      },
      color: {
        yellow: [],
        blue: [],
        pink: [],
        red: [],
        green: [],
      },
      size: {
        sm: ["w-3", "h-3"],
        md: ["w-4", "h-4"],
        lg: ["w-5", "h-5"],
        xl: ["w-6", "h-6"],
      },
    },
    compoundVariants: [
      // Solid variant with different close button colors
      {
        variant: "solid",
        color: "yellow",
        className: ["text-black"],
      },
      {
        variant: "solid",
        color: "blue",
        className: ["text-white"],
      },
      {
        variant: "solid",
        color: "pink",
        className: ["text-white"],
      },
      {
        variant: "solid",
        color: "red",
        className: ["text-white"],
      },
      {
        variant: "solid",
        color: "green",
        className: ["text-white"],
      },
    ],
    defaultVariants: {
      variant: "outline",
      color: "yellow",
      size: "md",
    },
  }
);

/** A tag component for displaying labels or categories */
export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      children,
      variant = "outline",
      color = "yellow",
      size = "md",
      hasIcon = false,
      isDismissible = false,
      onDismiss,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(tagRecipe({ variant, color, size }), className)}
      >
        {hasIcon && (
          <IconStar className={tagIconRecipe({ variant, color, size })} />
        )}
        <span>{children}</span>
        {isDismissible && (
          <button
            type="button"
            className={tagCloseRecipe({ variant, color, size })}
            onClick={onDismiss}
            aria-label="Remove tag"
          >
            <IconX />
          </button>
        )}
      </div>
    );
  }
);
Tag.displayName = "Tag";
