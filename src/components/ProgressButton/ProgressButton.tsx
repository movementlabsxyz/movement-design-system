import * as React from "react";
import { Button } from "../shadcn/button";
import { cn } from "@/lib/utils";

interface ProgressButtonProps extends React.ComponentProps<typeof Button> {
  /** Progress percentage (0-100) */
  percent?: number;
  /** Whether to show the progress animation and active hover state */
  loading?: boolean;
}

/**
 * ProgressButton - A button component that displays animated progress
 *
 * @usage Important Notes:
 * - **onClick side effects must be handled by the developer**
 * - The button remains clickable during loading to support "click to cancel" patterns
 * - The button is NOT automatically disabled during loading to avoid disabled styling
 * - Developers should prevent re-triggering side effects by checking loading state in onClick handler
 *
 * @example
 * ```tsx
 * const [loading, setLoading] = useState(false);
 * const [percent, setPercent] = useState(0);
 *
 * const handleClick = () => {
 *   // Prevent re-trigger if already loading
 *   if (loading) return;
 *
 *   setLoading(true);
 *   // ... your async operation
 * };
 *
 * <ProgressButton loading={loading} percent={percent} onClick={handleClick}>
 *   {loading ? "Processing..." : "Submit"}
 * </ProgressButton>
 * ```
 *
 * @example Click to Cancel Pattern
 * ```tsx
 * const handleClick = () => {
 *   if (loading) {
 *     // Cancel operation
 *     cancelOperation();
 *     setLoading(false);
 *   } else {
 *     // Start operation
 *     startOperation();
 *     setLoading(true);
 *   }
 * };
 * ```
 */
function ProgressButton({
  percent = 0,
  loading = false,
  children,
  className,
  ...props
}: ProgressButtonProps) {
  return (
    <Button
      variant="glow"
      className={cn(
        "relative",
        loading &&
          "bg-moveus-marigold-400 -translate-y-px shadow-[-8px_-8px_0_0_#0337FF]!",
        className,
      )}
      {...props}
    >
      {loading && (
        <span
          className="absolute top-0 left-0 z-0 h-full bg-[#81FFBA] transition-[width] duration-300 ease-in-out"
          style={{
            width: `${percent}%`,
            willChange: "width",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Button>
  );
}

export { ProgressButton };
