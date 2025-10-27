import { forwardRef } from "react";

import { cn } from "../../lib/utils";
import { BaseButton, type CommonButtonProps } from "./BaseButton";

/** A specialized bridge button component with unique styling and hover effects. */
export const BridgeButton = forwardRef<HTMLButtonElement, CommonButtonProps>(
  ({ disabled, fullWidth, iconSize = "md", className, ...props }, ref) => {
    const bridgeButtonStyles = cn(
      "p-4",
      "bg-guild-green-300",
      "text-black",
      "border-none",
      "rounded-lg",
      "text-[18px]",
      "font-bold",
      "transition-all",
      "duration-200",
      "ease-in-out",
      "[box-shadow:8px_8px_0_0_#0337FF]",
      disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      !disabled && [
        "hover:-translate-y-0.5",
        "hover:bg-moveus-marigold-400",
        "hover:[box-shadow:-8px_-8px_0_0_#0337FF]",
        "active:translate-y-0",
        "focus:outline-2",
        "focus:outline-byzantine-blue-400",
        "focus:outline-offset-2",
      ],
      fullWidth && "w-full",
      className
    );

    return (
      <BaseButton
        ref={ref}
        customStyles={bridgeButtonStyles}
        textTransform="uppercase"
        fontWeight="bold"
        fullWidth={fullWidth}
        iconSize={iconSize}
        disabled={disabled}
        {...props}
      />
    );
  }
);
BridgeButton.displayName = "BridgeButton";
