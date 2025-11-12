/**
 * Shared gradient border styles using CSS mask technique
 * These create a 1px border with gradient or solid colors
 */

export const gradientBorderStyles = `
  .gradient-border-glow::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(136deg, #81FFBA 0%, #00FFF9 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .gradient-border-error::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: #D82C2D;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

/**
 * Glass background styles with backdrop blur
 */
export const glassBackgroundStyles = `
  .glass-background-dark {
    background: linear-gradient(153deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0) 100%);
    backdrop-filter: blur(21px);
    border: 1px solid rgba(255, 255, 255, 0.24);
  }

  .glass-background-light {
    background: linear-gradient(153deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(21px);
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
`;

/**
 * Class names for applying gradient borders
 */
export const gradientBorderClasses = {
  glow: "gradient-border-glow",
  error: "gradient-border-error",
} as const;

/**
 * Class names for applying glass backgrounds
 */
export const glassBackgroundClasses = {
  dark: "glass-background-dark",
  light: "glass-background-light",
} as const;
