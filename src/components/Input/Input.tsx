"use client";

import { ComponentType, forwardRef, useState } from "react";
import { css, cx } from "styled-system/css";

import { useDebounce } from "@/hooks";
import { focusWithinRing, formControl, FormControlVariants } from "@/recipes";

type InputAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "color" | "height" | "width" | "size"
>;

export interface InputProps extends InputAttributes {
  /** The size of the input */
  size?: FormControlVariants["size"];
  /** The validation state of the input */
  state?: FormControlVariants["state"];
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
    ref,
  ) => {
    const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);

    // Ever so slightly debounce the keyboard focus flag to prevent the focus ring from flashing
    // during the single render between the focus handler and mouse down handler's completion
    const debouncedIsKeyboardFocus = useDebounce(isKeyboardFocus, 10);

    return (
      <div
        className={cx(
          formControl({ size, state }),
          debouncedIsKeyboardFocus && focusWithinRing(),
          className,
        )}
      >
        {!!LeadIcon && <LeadIcon className={iconStyles} />}
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
          className={css({ flex: "1", border: "none" })}
          {...props}
        />
        {!!TailIcon && <TailIcon className={iconStyles} />}
      </div>
    );
  },
);
Input.displayName = "Input";

const iconStyles = css({
  h: "16",
  w: "16",
  color: "icon.secondary",
});
