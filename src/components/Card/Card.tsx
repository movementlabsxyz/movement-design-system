import { cx } from "styled-system/css";
import { cardStyles } from "./card.styles";

interface CardProps {
  children: React.ReactNode;
  height?: string;
  width?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
}

export default function Card({
  children,
  height,
  width,
  hoverEffect = false,
  onClick,
  className,
  variant = "default",
  size = "md",
  loading = false,
}: CardProps) {
  return (
    <div
      className={cx(
        cardStyles({
          variant,
          size,
          hoverable: hoverEffect,
          loading,
        }),
        className
      )}
      style={{
        height: height || "auto",
        width: width || "auto",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
