"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ThemeProviderProps {
  children: React.ReactNode;
  /** Default theme. Defaults to "dark" */
  defaultTheme?: "light" | "dark" | "system";
  /** Storage key for persisting theme. Defaults to "theme" */
  storageKey?: string;
  /** Disable transitions on theme change to prevent flicker */
  disableTransitionOnChange?: boolean;
}

/**
 * Theme provider component that wraps the application to enable theme switching.
 * Uses next-themes under the hood with class-based dark mode strategy.
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from "@/components/theme/theme-provider";
 *
 * function App() {
 *   return (
 *     <ThemeProvider defaultTheme="system">
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "theme",
  disableTransitionOnChange = true,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      storageKey={storageKey}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
}
