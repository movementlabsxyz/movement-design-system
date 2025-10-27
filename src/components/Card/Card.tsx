import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const cardStyles = cva(
  [
    "relative",
    "border-none",
    "transition-[0.3s]",
    "ease-out",
    "box-border",
    "rounded",
    "bg-gradient-to-br",
    "from-white/10",
    "to-white/0",
    "backdrop-blur-[21px]",
    // Pseudo-element for border effect handled via CSS
    "before:content-['']",
    "before:absolute",
    "before:inset-0",
    "before:rounded",
    "before:p-px",
    "before:bg-[radial-gradient(59.92%_76.24%_at_50%_50%,#81FFBA_0%,rgba(129,255,186,0.00)_100%),radial-gradient(59.97%_79.12%_at_50%_50%,#81FFBA_18.75%,rgba(129,255,186,0.00)_100%),radial-gradient(76.68%_94.29%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%)]",
    "before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
    "before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
    "before:[-webkit-mask-composite:xor]",
    "before:[mask-composite:exclude]",
    "before:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default: ["p-6"],
        condensed: ["p-3"],
      },
      hoverEffect: {
        true: [
          "cursor-pointer",
          "hover:bg-gradient-to-br",
          "hover:from-white/40",
          "hover:to-white/0",
          "hover:backdrop-blur-[21px]",
          "hover:before:bg-[radial-gradient(59.92%_76.24%_at_50%_50%,#FFD935_0%,rgba(21,21,21,0.00)_100%),radial-gradient(59.97%_79.12%_at_50%_50%,#FFD935_18.75%,rgba(255,217,53,0.00)_100%),radial-gradient(76.68%_94.29%_at_50%_50%,#FFF_0%,rgba(255,255,255,0.00)_100%)]",
        ],
        false: [],
      },
    },
    defaultVariants: {
      variant: "default",
      hoverEffect: false,
    },
  }
);

export type CardVariant = VariantProps<typeof cardStyles>["variant"];

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  /** The style variant of the card. */
  variant?: CardVariant;
  /** Class name for applying additional styles to the card */
  className?: string;
  /** Children to be rendered inside the card */
  children: ReactNode;
  /** Whether to enable hover effects */
  hoverEffect?: boolean;
}

/** A simple wrapper component that renders its children inside a card. */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = "default", children, className, hoverEffect = false, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cardStyles({ variant, hoverEffect }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
