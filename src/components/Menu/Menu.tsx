import { Menu as ArkMenu } from "@ark-ui/react/menu";
import { ComponentType, ReactNode, forwardRef } from "react";

import { cn } from "../../lib/utils";

// Mock icon components for menu items
const IconChevronRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
);

const IconCheck = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export interface MenuItemProps {
  /** The content to display in the menu item */
  children: ReactNode;
  /** Whether the menu item is disabled */
  disabled?: boolean;
  /** Whether the menu item is selected */
  selected?: boolean;
  /** An icon to display before the content */
  icon?: ComponentType<{ className?: string }>;
  /** An icon to display after the content */
  endIcon?: ComponentType<{ className?: string }>;
  /** Click handler for the menu item */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export interface MenuSeparatorProps {
  /** Additional CSS classes */
  className?: string;
}

export interface MenuProps {
  /** The trigger element that opens the menu */
  trigger: ReactNode;
  /** Menu items to display */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether the menu is disabled */
  disabled?: boolean;
}

/** A menu item component for displaying interactive options */
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      children,
      disabled,
      selected,
      icon: Icon,
      endIcon: EndIcon,
      onClick,
      className,
    },
    ref
  ) => {
    return (
      <ArkMenu.Item
        ref={ref}
        disabled={disabled}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-sm cursor-pointer transition-all duration-200 ease-in-out text-black/90 text-sm font-medium hover:bg-black/10",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent",
          selected && "bg-moveus-marigold-100 text-moveus-marigold-800",
          className
        )}
        onClick={onClick}
        value={children as string}
      >
        {selected && <IconCheck className="w-4 h-4 text-moveus-marigold-600" />}
        {!selected && Icon && <Icon className="w-4 h-4 text-black/60" />}
        <span>{children}</span>
        {EndIcon && <EndIcon className="w-4 h-4 text-black/40 ml-auto" />}
      </ArkMenu.Item>
    );
  }
);
MenuItem.displayName = "MenuItem";

/** A separator component for dividing menu sections */
export const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>(
  ({ className }, ref) => {
    return (
      <div ref={ref} className={cn("h-px bg-black/20 mx-1 my-1", className)} />
    );
  }
);
MenuSeparator.displayName = "MenuSeparator";

/** A menu component that displays a list of interactive options */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ trigger, children, className, disabled }, ref) => {
    return (
      <ArkMenu.Root>
        <ArkMenu.Trigger asChild disabled={disabled}>
          {trigger}
        </ArkMenu.Trigger>
        <ArkMenu.Positioner>
          <ArkMenu.Content
            ref={ref}
            className={cn(
              "bg-white border border-black/20 rounded-md shadow-lg min-w-[200px] p-1 z-dropdown",
              className
            )}
          >
            <ArkMenu.ItemGroup>
              <ArkMenu.ItemGroupLabel className="hidden" />
              {children}
            </ArkMenu.ItemGroup>
          </ArkMenu.Content>
        </ArkMenu.Positioner>
      </ArkMenu.Root>
    );
  }
);
Menu.displayName = "Menu";
