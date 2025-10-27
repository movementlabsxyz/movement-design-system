import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import {
  ComponentType,
  ReactNode,
  forwardRef,
  useRef,
  useState,
  useEffect,
} from "react";

import { cn } from "../../lib/utils";

// Mock icon component for drawer
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

export interface DrawerHeaderProps {
  /** The title of the drawer */
  title: string;
  /** An optional icon to display before the title */
  icon?: ComponentType<{ className?: string }>;
  /** Additional CSS classes */
  className?: string;
}

export interface DrawerBodyProps {
  /** The content of the drawer body */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface DrawerFooterProps {
  /** The content of the drawer footer */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface DrawerProps {
  /** Whether the drawer is open */
  open: boolean;
  /** Callback when the drawer should close */
  onClose: () => void;
  /** The content of the drawer */
  children: ReactNode;
  /** The placement of the drawer */
  placement?: "top" | "bottom" | "left" | "right";
  /** The size of the drawer */
  size?: "sm" | "md" | "lg" | "xl" | "full";

  /** Whether the drawer can be closed by clicking the backdrop */
  closeOnBackdropClick?: boolean;
  /** Whether the drawer can be closed by pressing the escape key */
  closeOnEscape?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const getPlacementStyles = (placement: string) => {
  switch (placement) {
    case "top":
      return "top-0 left-0 right-0 rounded-b-lg -translate-y-full animate-slideInFromTop data-[state=closed]:animate-slideOutToTop";
    case "bottom":
      return "bottom-0 left-0 right-0 rounded-t-lg translate-y-full animate-slideInFromBottom data-[state=closed]:animate-slideOutToBottom";
    case "left":
      return "top-0 left-0 bottom-0 rounded-r-lg -translate-x-full animate-slideInFromLeft data-[state=closed]:animate-slideOutToLeft";
    case "right":
    default:
      return "top-0 right-0 bottom-0 rounded-l-lg animate-slideInFromRight data-[state=closed]:animate-slideOutToRight";
  }
};

const getSizeStyles = (size: string, placement: string) => {
  const sizeMap = {
    sm: { h: "h-[300px]", w: "w-[300px]" },
    md: { h: "h-[400px]", w: "w-[400px]" },
    lg: { h: "h-[500px]", w: "w-[500px]" },
    xl: { h: "h-[600px]", w: "w-[600px]" },
    full: { h: "h-screen", w: "w-screen" },
  };

  const dimensions = sizeMap[size as keyof typeof sizeMap] || sizeMap.md;

  if (placement === "top" || placement === "bottom") {
    return dimensions.h;
  } else {
    return dimensions.w;
  }
};

const getDragHandlePosition = (placement: string) => {
  switch (placement) {
    case "top":
      return "bottom-2 left-1/2 -translate-x-1/2 w-10 h-1";
    case "bottom":
      return "top-2 left-1/2 -translate-x-1/2 w-10 h-1";
    case "left":
      return "right-2 top-1/2 -translate-y-1/2 w-1 h-10";
    case "right":
    default:
      return "left-2 top-1/2 -translate-y-1/2 w-1 h-10";
  }
};

/** Drawer header component with title and close button */
export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ title, icon: Icon, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 p-6 pb-4 border-b border-black/20 flex-shrink-0",
          className
        )}
      >
        {Icon && <Icon className="w-5 h-5 text-black/60" />}
        <h2 className="text-lg font-semibold text-black/90 flex-1">{title}</h2>
        <ArkDialog.CloseTrigger className="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer text-black/60 transition-all duration-200 ease-in-out hover:bg-black/10 hover:text-black/80">
          <IconX className="w-5 h-5" />
        </ArkDialog.CloseTrigger>
      </div>
    );
  }
);
DrawerHeader.displayName = "DrawerHeader";

/** Drawer body component for main content */
export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 overflow-auto flex-1", className)}>
        {children}
      </div>
    );
  }
);
DrawerBody.displayName = "DrawerBody";

/** Drawer footer component for actions */
export const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-end gap-3 p-6 pt-4 border-t border-black/20 bg-black/5 flex-shrink-0",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
DrawerFooter.displayName = "DrawerFooter";

/** A drawer component for displaying slide-out content */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({
    open,
    onClose,
    children,
    placement = "right",
    size = "md",
    closeOnBackdropClick = true,
    closeOnEscape = true,
    className,
  }) => {
    const placementStyle = getPlacementStyles(placement);
    const sizeStyle = getSizeStyles(size, placement);

    // Drag-to-close functionality for mobile
    const contentRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [startPos, setStartPos] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Detect if device is mobile
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Reset drag state when drawer closes
    useEffect(() => {
      if (!open) {
        setDragOffset(0);
        setIsDragging(false);
        setHasInteracted(false);
      }
    }, [open]);

    const handleTouchStart = (e: React.TouchEvent) => {
      if (!isMobile) return;
      setHasInteracted(true);
      const touch = e.touches[0];
      if (placement === "left" || placement === "right") {
        setStartPos(touch.clientX);
      } else {
        setStartPos(touch.clientY);
      }
      setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isMobile || !isDragging) return;
      const touch = e.touches[0];
      let offset = 0;

      // Drawer should drag in the direction it came from (to close)
      if (placement === "right") {
        // Right drawer drags right (positive X) to close
        offset = Math.max(0, touch.clientX - startPos);
      } else if (placement === "left") {
        // Left drawer drags left (negative X) to close
        offset = Math.min(0, touch.clientX - startPos);
      } else if (placement === "bottom") {
        // Bottom drawer drags down (positive Y) to close
        offset = Math.max(0, touch.clientY - startPos);
      } else if (placement === "top") {
        // Top drawer drags up (negative Y) to close
        offset = Math.min(0, touch.clientY - startPos);
      }

      setDragOffset(offset);
    };

    const handleTouchEnd = () => {
      if (!isMobile || !isDragging) return;
      setIsDragging(false);

      // Threshold for closing (50px or 30% of drag distance)
      const threshold = 50;
      const shouldClose = Math.abs(dragOffset) > threshold;

      if (shouldClose) {
        onClose();
      } else {
        setDragOffset(0);
      }
    };

    const getDragTransform = () => {
      // If user has never interacted, let CSS animation handle initial open
      if (!hasInteracted) return {};

      // During drag or after interaction, use manual positioning
      if (placement === "left" || placement === "right") {
        return {
          transform: `translateX(${dragOffset}px)`,
          animation: "none", // Disable CSS animations when user has interacted
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        };
      } else {
        return {
          transform: `translateY(${dragOffset}px)`,
          animation: "none", // Disable CSS animations when user has interacted
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        };
      }
    };

    const dragHandlePosition = getDragHandlePosition(placement);

    return (
      <ArkDialog.Root
        open={open}
        onOpenChange={(details: { open: boolean }) => {
          if (!details.open) {
            // onClose();
          }
        }}
        // this is called AFTER drawer animation is complete
        onExitComplete={() => {
          onClose();
        }}
        closeOnEscape={closeOnEscape}
        closeOnInteractOutside={closeOnBackdropClick}
      >
        <ArkDialog.Backdrop className="fixed inset-0 bg-black/60 z-overlay animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <ArkDialog.Positioner>
          <ArkDialog.Content
            ref={contentRef}
            className={cn(
              "fixed bg-black/90 shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 ease-out z-modal",
              placementStyle,
              sizeStyle,
              className
            )}
            style={getDragTransform()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Drag handle for mobile */}
            <div
              className={cn(
                "absolute bg-black/30 rounded-full cursor-grab active:cursor-grabbing md:hidden",
                dragHandlePosition
              )}
              aria-label="Drag to close"
            />

            {children}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </ArkDialog.Root>
    );
  }
);
Drawer.displayName = "Drawer";
