import { Toast as ArkToast } from "@ark-ui/react/toast";
import { ComponentType } from "react";
import { cva } from "class-variance-authority";
import { InfoIcon, WarningIcon, CheckIcon, XIcon } from "@phosphor-icons/react";

import { cn } from "../../lib/utils";
import { type ToastProps, type ToastVariant } from "./types";

/**
 * A message that appears on the screen to provide feedback on an action, or provide a notification
 * of an event that has occurred.
 */
export function Toast({ variant, title, description, id }: ToastProps) {
  const Icon = iconMap[variant];
  return (
    <ArkToast.Root className={toastRecipe({ variant })} id={id}>
      <Icon className={iconRecipe({ variant })} />
      <div className="flex flex-col gap-1">
        {title && (
          <ArkToast.Title className={titleRecipe({ variant })}>
            {title}
          </ArkToast.Title>
        )}
        <ArkToast.Description className={descriptionRecipe({ variant })}>
          {typeof description === "function" ? description() : description}
        </ArkToast.Description>
      </div>
      <ArkToast.CloseTrigger className="self-start cursor-pointer">
        <XIcon
          className={cn(
            "h-4 w-4 m-[2px]",
            variant === "success" ? "text-black" : "text-white"
          )}
        />
      </ArkToast.CloseTrigger>
    </ArkToast.Root>
  );
}

const iconMap: Record<ToastVariant, ComponentType<{ className?: string }>> = {
  info: InfoIcon,
  error: WarningIcon,
  warning: WarningIcon,
  success: CheckIcon,
};

// Toast recipe using CVA
const toastRecipe = cva(
  [
    "grid",
    "grid-cols-[auto_minmax(0,1fr)_auto]",
    "rounded-[4px]",
    "p-3",
    "pb-4",
    "max-w-full",
    "md:max-w-[356px]",
    "w-full",
    "md:w-[calc(100vw-48px)]",
    "relative",
    "[scale:var(--scale)]",
    "[translate:var(--x)_var(--y)_0]",
    "[opacity:var(--opacity)]",
    "[will-change:translate,opacity,scale]",
    "[z-index:var(--z-index)]",
    "transition-[translate,scale,opacity]",
    "duration-100",
    "ease-default",
    "data-[state=open]:animate-slideInFromBottom",
    "data-[state=closed]:animate-slideOutToBottom",
    "md:rounded",
  ],
  {
    variants: {
      variant: {
        info: ["text-black", "bg-guild-green-400"],
        error: ["text-white", "bg-[#D82C2D]"],
        warning: ["text-white", "bg-[#D82C2D]"],
        success: ["text-black", "bg-guild-green-400"],
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

// Icon recipe using CVA
const iconRecipe = cva(["h-5", "w-5", "gap-0", "md:gap-2"], {
  variants: {
    variant: {
      info: ["text-current"],
      error: ["text-current"],
      warning: ["text-current"],
      success: ["text-black"],
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

// Title recipe using CVA
const titleRecipe = cva(["text-sm", "font-medium"], {
  variants: {
    variant: {
      info: [],
      error: [],
      warning: [],
      success: ["font-bold", "text-black", "leading-[1.5]"],
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

// Description recipe using CVA
const descriptionRecipe = cva(["text-sm"], {
  variants: {
    variant: {
      info: [],
      error: [],
      warning: [],
      success: ["font-regular", "text-black", "leading-[1.4]"],
    },
  },
  defaultVariants: {
    variant: "info",
  },
});
