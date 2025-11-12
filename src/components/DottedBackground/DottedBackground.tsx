import { cn } from "@/lib/utils";

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
  dotColor = "rgba(255, 255, 255, 0.2)",
  dotSize = 1,
  gap = 20,
  variant = "dots",
}: DottedBackgroundProps) {
  const getBackgroundStyle = () => {
    switch (variant) {
      case "dots":
        return {
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${gap}px ${gap}px`,
        };
      case "grid":
        return {
          backgroundImage: `
            linear-gradient(${dotColor} 1px, transparent 1px),
            linear-gradient(90deg, ${dotColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gap}px ${gap}px`,
        };
      case "gradient":
        return {
          background: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 77, 109, 0.3), transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(99, 102, 241, 0.2), transparent 50%)
          `,
          backgroundColor: "#0a0a0a",
        };
      default:
        return {};
    }
  };

  return (
    <div
      className={cn(
        "relative min-h-[400px] w-full rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 p-8",
        className,
      )}
      style={getBackgroundStyle()}
    >
      {children}
    </div>
  );
}

