/**
 * Theme Tokens
 * Light and dark theme semantic tokens for React Native and other non-CSS environments.
 * These match the CSS custom properties defined in src/theme.css
 * Color source: movement-design-tokens-FULL/design-tokens/brand/brand-colors.json
 */

/**
 * Brand color palette (static, doesn't change between themes)
 */
export const colors = {
  moveusMarigold: {
    50: "#fffbeb",
    100: "#fff2bd",
    200: "#ffea90",
    300: "#ffe162",
    400: "#ffd935",
    500: "#ddba22",
    600: "#bb9b13",
    700: "#997e08",
    800: "#776100",
    900: "#554500",
  },
  guildGreen: {
    50: "#f2fff8",
    100: "#ccffe3",
    200: "#a7ffce",
    300: "#81ffba",
    400: "#6ce2a1",
    500: "#58c589",
    600: "#47a872",
    700: "#368a5c",
    800: "#286d47",
    900: "#1b5033",
  },
  byzantineBlue: {
    50: "#c2ceff",
    100: "#859dff",
    200: "#5c7cff",
    300: "#335cff",
    400: "#0337ff",
    500: "#002cd6",
    600: "#0024ad",
    700: "#001b85",
    800: "#00135c",
    900: "#000c3d",
  },
  protocolPink: {
    50: "#fff1fc",
    100: "#ffc9f3",
    200: "#ffa0eb",
    300: "#ff77e2",
    400: "#eb66cf",
    500: "#ce52b4",
    600: "#b14199",
    700: "#94317f",
    800: "#762365",
    900: "#59184b",
  },
  oracleOrange: {
    50: "#ffefec",
    100: "#ffcdc2",
    200: "#ffab97",
    300: "#ff886d",
    400: "#FF6642",
    500: "#ea5330",
    600: "#c83e1e",
    700: "#a62c10",
    800: "#841d05",
    900: "#621300",
  },
  neutrals: {
    white: "#ffffff",
    black: "#000000",
    whiteAlpha: {
      50: "#ffffff0a",
      100: "#ffffff0f",
      200: "#ffffff14",
      300: "#ffffff29",
      400: "#ffffff3d",
      500: "#ffffff5c",
      600: "#ffffff7a",
      700: "#ffffffa3",
      800: "#ffffffcc",
      900: "#ffffffeb",
    },
    blackAlpha: {
      50: "#0000000a",
      100: "#0000000f",
      200: "#00000014",
      300: "#00000029",
      400: "#0000003d",
      500: "#0000005c",
      600: "#0000007a",
      700: "#000000a3",
      800: "#000000cc",
      900: "#000000eb",
    },
  },
  feedback: {
    success: {
      default: "#6ce2a1", // guild-green.400
      dark: "#368a5c", // guild-green.700
      light: "#ccffe3", // guild-green.100
    },
    error: {
      default: "#D82C2D",
      dark: "#b61a1c",
      light: "#ffc2c2",
    },
    warning: {
      default: "#ea5330", // oracle-orange.500
      dark: "#c83e1e", // oracle-orange.600
      light: "#ffcdc2", // oracle-orange.100
    },
  },
} as const;

export type Colors = typeof colors;

/**
 * Light theme semantic tokens
 */
export const lightTheme = {
  // Semantic tokens - Backgrounds
  background: "#ffffff",
  backgroundAlt1: "#f5f5f5",
  backgroundAlt2: "#ebebeb",
  card: "#ffffff",
  popover: "#ffffff",
  muted: "#f5f5f5",

  // Semantic tokens - Foregrounds
  foreground: "#000000",
  cardForeground: "#000000",
  popoverForeground: "#000000",
  mutedForeground: "#666666",
  foregroundMuted: "rgba(0, 0, 0, 0.64)",
  foregroundSubtle: "rgba(0, 0, 0, 0.40)",

  // Semantic tokens - Brand colors
  primary: "#6ce2a1", // guild-green.400
  primaryForeground: "#000000",
  secondary: "#0337ff", // byzantine-blue.400
  secondaryForeground: "#ffffff",
  accent: "#ff77e2", // protocol-pink.300
  accentForeground: "#000000",

  // Semantic tokens - Feedback colors
  success: "#6ce2a1", // guild-green.400
  successForeground: "#000000",
  successLight: "#f2fff8", // guild-green.50
  warning: "#ffd935", // moveus-marigold.400
  warningForeground: "#000000",
  warningLight: "#ffefec", // oracle-orange.50
  error: "#D82C2D",
  errorForeground: "#ffffff",
  errorLight: "#ffeaea",
  info: "#0337ff", // byzantine-blue.400
  infoForeground: "#ffffff",
  infoLight: "#c2ceff", // byzantine-blue.50
  destructive: "#dc2626",
  destructiveForeground: "#ffffff",

  // Semantic tokens - Borders
  border: "rgba(0, 0, 0, 0.12)",
  borderStrong: "rgba(0, 0, 0, 0.24)",
  input: "rgba(0, 0, 0, 0.12)",
  ring: "#6ce2a1", // guild-green.400

  // Semantic tokens - Disabled state
  disabled: "rgba(0, 0, 0, 0.16)",

  // Semantic tokens - Sidebar
  sidebar: "#fafafa",
  sidebarForeground: "#000000",
  sidebarPrimary: "#6ce2a1",
  sidebarPrimaryForeground: "#000000",
  sidebarAccent: "#f5f5f5",
  sidebarAccentForeground: "#000000",
  sidebarBorder: "rgba(0, 0, 0, 0.10)",
  sidebarRing: "#6ce2a1",

  // Semantic tokens - Charts
  chart1: "#6ce2a1", // guild-green.400
  chart2: "#0337ff", // byzantine-blue.400
  chart3: "#ff77e2", // protocol-pink.300
  chart4: "#FF6642", // oracle-orange.400
  chart5: "#ffd935", // moveus-marigold.400

  // Raw color palette
  colors,
} as const;

/**
 * Dark theme semantic tokens
 */
export const darkTheme = {
  // Semantic tokens - Backgrounds
  background: "#000000",
  backgroundAlt1: "#0a0a0a",
  backgroundAlt2: "#141414",
  card: "#121212",
  popover: "#121212",
  muted: "#262626",

  // Semantic tokens - Foregrounds
  foreground: "#ffffff",
  cardForeground: "#ffffff",
  popoverForeground: "#ffffff",
  mutedForeground: "#a3a3a3",
  foregroundMuted: "rgba(255, 255, 255, 0.64)",
  foregroundSubtle: "rgba(255, 255, 255, 0.40)",

  // Semantic tokens - Brand colors (brighter variants for dark mode)
  primary: "#81ffba", // guild-green.300
  primaryForeground: "#000000",
  secondary: "#5c7cff", // byzantine-blue.200
  secondaryForeground: "#000000",
  accent: "#ff77e2", // protocol-pink.300
  accentForeground: "#000000",

  // Semantic tokens - Feedback colors (brighter for dark mode visibility)
  success: "#81ffba", // guild-green.300
  successForeground: "#000000",
  successLight: "#1b5033", // guild-green.900
  warning: "#ffd935", // moveus-marigold.400
  warningForeground: "#000000",
  warningLight: "#621300", // oracle-orange.900
  error: "#ff4d4d",
  errorForeground: "#ffffff",
  errorLight: "#3d1414",
  info: "#335cff", // byzantine-blue.300
  infoForeground: "#000000",
  infoLight: "#000c3d", // byzantine-blue.900
  destructive: "#e64545",
  destructiveForeground: "#ffffff",

  // Semantic tokens - Borders
  border: "rgba(255, 255, 255, 0.12)",
  borderStrong: "rgba(255, 255, 255, 0.24)",
  input: "rgba(255, 255, 255, 0.12)",
  ring: "#81ffba", // guild-green.300

  // Semantic tokens - Disabled state
  disabled: "rgba(255, 255, 255, 0.16)",

  // Semantic tokens - Sidebar
  sidebar: "#0d0d0d",
  sidebarForeground: "#ffffff",
  sidebarPrimary: "#81ffba",
  sidebarPrimaryForeground: "#000000",
  sidebarAccent: "#262626",
  sidebarAccentForeground: "#ffffff",
  sidebarBorder: "rgba(255, 255, 255, 0.10)",
  sidebarRing: "#81ffba",

  // Semantic tokens - Charts
  chart1: "#81ffba", // guild-green.300
  chart2: "#5c7cff", // byzantine-blue.200
  chart3: "#ff77e2", // protocol-pink.300
  chart4: "#FF6642", // oracle-orange.400
  chart5: "#ffd935", // moveus-marigold.400

  // Raw color palette
  colors,
} as const;

export type Theme = typeof lightTheme;

/**
 * All themes
 */
export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type ThemeName = keyof typeof themes;
