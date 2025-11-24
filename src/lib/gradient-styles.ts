/**
 * Shared gradient background styles
 * Reusable gradient recipes for backgrounds
 */

export const gradientBackgroundStyles = `
  .gradient-mint-cyan {
    background: linear-gradient(130deg, #81FFBA 33.64%, #00FFF9 79.2%);
  }

  .gradient-glass-overlay {
    background: linear-gradient(0deg, rgba(4, 5, 27, 0.20) 0%, rgba(4, 5, 27, 0.20) 100%), 
                linear-gradient(153deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), 
                radial-gradient(100% 100% at 120.34% 112.85%, rgba(129, 255, 186, 0.40) 0%, rgba(0, 27, 133, 0.40) 100%);
  }
`;

/**
 * Class names for applying gradient backgrounds
 */
export const gradientBackgroundClasses = {
  mintCyan: "gradient-mint-cyan",
  glassOverlay: "gradient-glass-overlay",
} as const;

/**
 * Utility function to apply gradient background classes
 */
export const getGradientClass = (variant: keyof typeof gradientBackgroundClasses) => {
  return gradientBackgroundClasses[variant];
};

