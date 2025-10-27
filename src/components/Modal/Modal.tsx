import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { ComponentType, ReactNode, forwardRef } from "react";

import { cn } from "../../lib/utils";

// Mock icon components for modal
const IconX = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);

export interface ModalHeaderProps {
  /** The title of the modal */
  title: string;
  /** An optional icon to display before the title */
  icon?: ComponentType<{ className?: string }>;
  /** Additional CSS classes */
  className?: string;
}

export interface ModalBodyProps {
  /** The content of the modal body */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface ModalFooterProps {
  /** The content of the modal footer */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when the modal should close */
  onClose: () => void;
  /** The content of the modal */
  children: ReactNode;
  /** The size of the modal */
  size?: "sm" | "md" | "lg" | "xl" | "full" | "dynamic";
  /** Whether the modal can be closed by clicking the backdrop */
  closeOnBackdropClick?: boolean;
  /** Whether the modal can be closed by pressing the escape key */
  closeOnEscape?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const sizeStyles = {
  sm: "max-w-[400px] w-full",
  md: "max-w-[500px] w-full",
  lg: "max-w-[700px] w-full",
  xl: "max-w-[900px] w-full",
  full: "max-w-[95vw] max-h-[95vh] w-full",
  dynamic: "max-w-full max-h-full w-auto",
};

/** Modal header component with title and close button */
export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ title, icon: Icon, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 p-6 pb-4 border-b border-black/20",
          className
        )}
      >
        {Icon && <Icon className="w-6 h-6 text-black/60" />}
        <h2 className="text-lg font-semibold text-black/90 flex-1">{title}</h2>
        <ArkDialog.CloseTrigger className="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer text-black/60 transition-all duration-200 ease-in-out hover:bg-black/10 hover:text-black/80">
          <IconX className="w-5 h-5" />
        </ArkDialog.CloseTrigger>
      </div>
    );
  }
);
ModalHeader.displayName = "ModalHeader";

/** Modal body component for main content */
export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 overflow-auto flex-1", className)}>
        {children}
      </div>
    );
  }
);
ModalBody.displayName = "ModalBody";

/** Modal footer component for actions */
export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-end gap-3 p-6 pt-4 border-t border-black/20 bg-black/5",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
ModalFooter.displayName = "ModalFooter";

/** A modal component for displaying overlay content */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      children,
      size = "md",
      closeOnBackdropClick = true,
      closeOnEscape = true,
      className,
    },
    ref
  ) => {
    return (
      <ArkDialog.Root
        open={open}
        onOpenChange={(details) => {
          if (!details.open) {
            onClose();
          }
        }}
        closeOnEscape={closeOnEscape}
        closeOnInteractOutside={closeOnBackdropClick}
      >
        <ArkDialog.Backdrop className="fixed inset-0 bg-black/60 z-overlay flex items-center justify-center p-4 w-screen h-screen" />
        <ArkDialog.Positioner>
          <ArkDialog.Content
            ref={ref}
            className={cn(
              "bg-transparent rounded-lg shadow-2xl max-h-[90vh] overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-modal",
              sizeStyles[size],
              className
            )}
          >
            {children}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </ArkDialog.Root>
    );
  }
);
Modal.displayName = "Modal";
