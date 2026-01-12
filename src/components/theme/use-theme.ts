/**
 * Re-export useTheme hook from next-themes for convenience.
 *
 * @example
 * ```tsx
 * import { useTheme } from "@/components/theme/use-theme";
 *
 * function MyComponent() {
 *   const { theme, setTheme, resolvedTheme } = useTheme();
 *
 *   return (
 *     <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
 *       Toggle theme
 *     </button>
 *   );
 * }
 * ```
 */
export { useTheme } from "next-themes";
