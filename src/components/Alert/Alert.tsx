import { ComponentType, ReactNode, forwardRef } from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { type AlertVariant } from "./types";

// Mock icon components for alert
const IconInfo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);

const IconWarning = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L1 21h22L12 2zm0 3.17L19.83 19H4.17L12 5.17zM11 16h2v2h-2zm0-6h2v4h-2z" />
  </svg>
);

const IconError = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const IconSuccess = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
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

export interface AlertProps {
  /** The variant of the alert */
  variant?: AlertVariant;
  /** The title of the alert */
  title?: string;
  /** The content of the alert */
  children: ReactNode;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Callback when the alert is dismissed */
  onDismiss?: () => void;
  /** An optional icon to display before the content */
  icon?: ComponentType<{ className?: string }>;
  /** Additional CSS classes */
  className?: string;
}

// Alert recipe using CVA
const alertRecipe = cva(
  ["flex", "items-start", "gap-3", "p-4", "rounded-lg", "relative"],
  {
    variants: {
      variant: {
        info: ["text-black", "bg-guild-green-300"],
        error: ["text-white", "bg-moveus-marigold-400"],
        warning: ["text-white", "bg-moveus-marigold-400"],
        success: ["text-black", "bg-guild-green-400"],
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

// Alert icon recipe using CVA
const alertIconRecipe = cva(["flex-shrink-0", "mt-0.5"]);

// Alert content recipe using CVA
const alertContentRecipe = cva(["flex-1", "min-w-0"]);

// Alert title recipe using CVA
const alertTitleRecipe = cva(["text-sm", "font-semibold", "mb-1"]);

// Alert description recipe using CVA
const alertDescriptionRecipe = cva(["text-sm", "opacity-90"]);

// Alert dismiss button recipe using CVA
const alertDismissButtonRecipe = cva([
  "flex-shrink-0",
  "flex",
  "items-center",
  "justify-center",
  "w-6",
  "h-6",
  "rounded-md",
  "cursor-pointer",
  "opacity-70",
  "transition-all",
  "duration-200",
  "ease-in-out",
  "hover:opacity-100",
  "hover:bg-current",
]);

const iconMap: Record<AlertVariant, ComponentType<{ className?: string }>> = {
  info: IconInfo,
  warning: IconWarning,
  error: IconError,
  success: IconSuccess,
};

/** An alert component for displaying important messages */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "info",
      title,
      children,
      dismissible = false,
      onDismiss,
      icon,
      className,
    },
    ref
  ) => {
    const Icon = icon || iconMap[variant];

    return (
      <div ref={ref} className={cn(alertRecipe({ variant }), className)}>
        <Icon className={alertIconRecipe()} />
        <div className={alertContentRecipe()}>
          {title && <div className={alertTitleRecipe()}>{title}</div>}
          <div className={alertDescriptionRecipe()}>{children}</div>
        </div>
        {dismissible && (
          <button
            type="button"
            className={alertDismissButtonRecipe()}
            onClick={onDismiss}
            aria-label="Dismiss alert"
          >
            <IconX />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";
