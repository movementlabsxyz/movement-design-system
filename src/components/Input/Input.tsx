"use client";

import { ComponentType, forwardRef, useState } from "react";

import { cn } from "../../lib/utils";
import { useDebounce } from "../../hooks";

type InputAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "color" | "height" | "width" | "size"
>;

export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "error" | "success";

export interface InputProps extends InputAttributes {
  /** The size of the input */
  size?: InputSize;
  /** The validation state of the input */
  state?: InputState;
  /** An icon component to be positioned to the left of the input text (e.g. a search icon) */
  LeadIcon?: ComponentType<{ className?: string }>;
  /** An icon component to be positioned to the right of the input text (e.g. a search icon) */
  TailIcon?: ComponentType<{ className?: string }>;
  /** Class name for applying additional styles to the input's wrapper element */
  className?: string;
}

/**
 * An element for accepting text-based input from the user.
 * It accepts all the attributes that an `input` element does (except color, height, and width).
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      state = "default",
      LeadIcon,
      TailIcon,
      className,
      onMouseDown,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);

    // Ever so slightly debounce the keyboard focus flag to prevent the focus ring from flashing
    // during the single render between the focus handler and mouse down handler's completion
    const debouncedIsKeyboardFocus = useDebounce(isKeyboardFocus, 10);

    const sizeStyles = {
      sm: "px-3 py-2 min-h-10 text-[18px]",
      md: "px-4 py-3 min-h-12 text-[24px]",
      lg: "px-5 py-4 min-h-56 text-[24px]",
    };

    const stateStyles = {
      default: cn(
        "bg-white/5",
        "border border-guild-green-300/30",
        "hover:border-guild-green-300/50",
        "focus-within:border-guild-green-300"
      ),
      error: cn(
        "bg-white/5",
        "border border-oracle-orange-400/50",
        "hover:border-oracle-orange-400/70",
        "focus-within:border-oracle-orange-400/80"
      ),
      success: cn(
        "bg-white/5",
        "border border-guild-green-300/50",
        "hover:border-guild-green-300/70",
        "focus-within:border-guild-green-300/80"
      ),
    };

    const iconSizeStyles = {
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-7 w-7",
    };

    return (
      <div
        className={cn(
          "relative flex items-center gap-3 rounded-lg backdrop-blur-[21px] transition-all duration-200 ease-in-out overflow-hidden",
          sizeStyles[size],
          stateStyles[state],
          debouncedIsKeyboardFocus &&
            "border-guild-green-300/80 shadow-[0_0_0_2px_rgba(129,255,186,0.2)]",
          className
        )}
      >
        {!!LeadIcon && (
          <LeadIcon
            className={cn("text-white/60 flex-shrink-0", iconSizeStyles[size])}
          />
        )}
        <input
          ref={ref}
          onMouseDown={(e) => {
            // Wait until next tick to set keyboard focus to false to prevent a race condition with
            // the focus handler that initially sets it to true
            window.setTimeout(() => setIsKeyboardFocus(false), 0);
            onMouseDown?.(e);
          }}
          onFocus={(e) => {
            // Assume the focus was initiated by a keyboard until a mouse down handler proves it false
            setIsKeyboardFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsKeyboardFocus(false);
            onBlur?.(e);
          }}
          className={cn(
            "flex-1 border-none outline-none bg-transparent text-white font-body font-regular leading-[1.3]",
            "placeholder:text-white/36",
            "disabled:text-white/20 disabled:cursor-not-allowed"
          )}
          {...props}
        />
        {!!TailIcon && (
          <TailIcon
            className={cn("text-white/60 flex-shrink-0", iconSizeStyles[size])}
          />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
