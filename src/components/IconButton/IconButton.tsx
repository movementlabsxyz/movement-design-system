import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/shadcn/button";

function IconButton({
  className,
  variant,
  size = "icon",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
    />
  );
}

export { IconButton };
