import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface DottedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
  variant?: "dots" | "grid" | "gradient";
}

export function DottedBackground({
  children,
  className,
  dotColor,
  dotSize = 1,
  gap = 20,
  variant = "dots",
}: DottedBackgroundProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the actual dot color based on theme
  const getThemeAwareDotColor = () => {
    if (dotColor) return dotColor;
    // Default: use contrasting color based on theme
    return resolvedTheme === "dark"
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.1)";
  };

  const getBackgroundStyle = () => {
    const effectiveDotColor = getThemeAwareDotColor();

    switch (variant) {
      case "dots":
        return {
          backgroundImage: `radial-gradient(circle, ${effectiveDotColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${gap}px ${gap}px`,
        };
      case "grid":
        return {
          backgroundImage: `
            linear-gradient(${effectiveDotColor} 1px, transparent 1px),
            linear-gradient(90deg, ${effectiveDotColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gap}px ${gap}px`,
        };
      case "gradient":
        return resolvedTheme === "dark"
          ? {
              background: `
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 77, 109, 0.3), transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(99, 102, 241, 0.2), transparent 50%)
              `,
            }
          : {
              background: `
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2), transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 77, 109, 0.2), transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(99, 102, 241, 0.15), transparent 50%)
              `,
            };
      default:
        return {};
    }
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn(
          "bg-background relative min-h-[400px] w-full rounded-lg p-8",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-background relative min-h-[400px] w-full rounded-lg p-8",
        resolvedTheme === "dark"
          ? "bg-gradient-to-br from-slate-900 to-slate-800"
          : "bg-gradient-to-br from-slate-100 to-slate-200",
        className,
      )}
      style={getBackgroundStyle()}
    >
      {children}
    </div>
  );
}

