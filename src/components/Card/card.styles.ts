import { css, cva } from "styled-system/css";

// Base card styles
export const cardStyles = cva({
  base: {
    borderRadius: "16px",
    border: "1px solid #FFF",
    background:
      "linear-gradient(153deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
    backdropFilter: "blur(21px)",
    transition: "all 0.2s ease",
    position: "relative",
    overflow: "hidden",
  },
  variants: {
    variant: {
      default: {},
      elevated: {
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        _hover: {
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        },
      },
      outlined: {
        background: "transparent",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        _hover: {
          borderColor: "rgba(255, 255, 255, 0.6)",
          background: "rgba(255, 255, 255, 0.05)",
        },
      },
    },
    size: {
      sm: {
        minH: "120px",
        maxW: "200px",
      },
      md: {
        minH: "200px",
        maxW: "300px",
      },
      lg: {
        minH: "300px",
        maxW: "400px",
      },
      xl: {
        minH: "400px",
        maxW: "500px",
      },
    },
    hoverable: {
      true: {
        cursor: "pointer",
        _hover: {
          background:
            "linear-gradient(153deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
          transform: "translateY(-2px)",
          boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1)",
        },
      },
      false: {},
    },
    loading: {
      true: {
        "&::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          backgroundSize: "200px 100%",
          animation: "cardShimmer 1.5s infinite",
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    hoverable: false,
    loading: false,
  },
});

// Card content styles
export const cardContentStyles = css({
  padding: "1rem",
  color: "white",
});

export const cardHeaderStyles = css({
  padding: "1rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  background: "rgba(255, 255, 255, 0.05)",
});

export const cardBodyStyles = css({
  padding: "1rem",
  flex: "1",
});

export const cardFooterStyles = css({
  padding: "1rem",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  background: "rgba(255, 255, 255, 0.05)",
});

// Card grid styles
export const cardGridStyles = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1rem",
  padding: "1rem",
});

// Focus styles for accessibility
export const cardFocusStyles = css({
  _focus: {
    outline: "2px solid rgba(255, 255, 255, 0.5)",
    outlineOffset: "2px",
  },
});

// Dark theme adjustments
export const cardDarkThemeStyles = css({
  "@media (prefers-color-scheme: dark)": {
    borderColor: "rgba(255, 255, 255, 0.2)",
    "&:hover": {
      borderColor: "rgba(255, 255, 255, 0.4)",
    },
  },
});
