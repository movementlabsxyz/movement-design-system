"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ThemeSwitcherProps {
  /** Additional class names */
  className?: string;
  /** Size of the icons. Defaults to 16 */
  iconSize?: number;
  /** Show labels next to icons */
  showLabels?: boolean;
}

/**
 * A theme switcher component that allows users to toggle between light, dark, and system themes.
 *
 * @example
 * ```tsx
 * import { ThemeSwitcher } from "@/components/theme/theme-switcher";
 *
 * function Header() {
 *   return (
 *     <header>
 *       <ThemeSwitcher />
 *     </header>
 *   );
 * }
 * ```
 */
export function ThemeSwitcher({
  className,
  iconSize = 16,
  showLabels = false,
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <div
        className={cn(
          "bg-muted inline-flex items-center gap-1 rounded-lg p-1",
          className,
        )}
      >
        <div className="h-8 w-8 rounded-md" />
        <div className="h-8 w-8 rounded-md" />
        <div className="h-8 w-8 rounded-md" />
      </div>
    );
  }

  const themes = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ] as const;

  return (
    <div
      className={cn(
        "bg-muted inline-flex items-center gap-1 rounded-lg p-1",
        className,
      )}
      role="radiogroup"
      aria-label="Theme selection"
    >
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={theme === value}
          aria-label={`${label} theme`}
          onClick={() => setTheme(value)}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors",
            "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            theme === value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:bg-background/50 hover:text-foreground",
          )}
        >
          <Icon size={iconSize} />
          {showLabels && <span>{label}</span>}
        </button>
      ))}
    </div>
  );
}

/**
 * A simple toggle button that cycles through themes: light -> dark -> system -> light
 */
export function ThemeToggle({
  className,
  iconSize = 16,
}: {
  className?: string;
  iconSize?: number;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "border-input bg-background inline-flex h-9 w-9 items-center justify-center rounded-md border",
          className,
        )}
        aria-label="Toggle theme"
      >
        <div className="h-4 w-4" />
      </button>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  // Show the icon based on resolved theme (what's actually displayed)
  const Icon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cn(
        "border-input bg-background inline-flex h-9 w-9 items-center justify-center rounded-md border",
        "hover:bg-accent hover:text-accent-foreground transition-colors",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
      aria-label={`Current theme: ${theme}. Click to cycle themes.`}
    >
      <Icon size={iconSize} />
    </button>
  );
}
