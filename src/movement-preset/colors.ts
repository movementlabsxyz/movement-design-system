import { SemanticTokens, Tokens } from "@pandacss/dev";

export const colors = {
  white: { value: "#ffffff" },
  black: { value: "#000000" },
  transparent: { value: "#FFFFFF00" },

  // Brand colors from core.json
  "moveus-marigold": {
    50: { value: "#fffbeb" },
    100: { value: "#fff2bd" },
    200: { value: "#ffea90" },
    300: { value: "#ffe162" },
    400: { value: "#ffd935" },
    500: { value: "#ddba22" },
    600: { value: "#bb9b13" },
    700: { value: "#997e08" },
    800: { value: "#776100" },
    900: { value: "#554500" },
  },
  "guild-green": {
    50: { value: "#f2fff8" },
    100: { value: "#ccffe3" },
    200: { value: "#a7ffce" },
    300: { value: "#81ffba" },
    400: { value: "#6ce2a1" },
    500: { value: "#58c589" },
    600: { value: "#47a872" },
    700: { value: "#368a5c" },
    800: { value: "#286d47" },
    900: { value: "#1b5033" },
  },
  "byzantine-blue": {
    50: { value: "#c2ceff" },
    100: { value: "#859dff" },
    200: { value: "#5c7cff" },
    300: { value: "#335cff" },
    400: { value: "#0337ff" },
    500: { value: "#002cd6" },
    600: { value: "#0024ad" },
    700: { value: "#001b85" },
    800: { value: "#00135c" },
    900: { value: "#000c3d" },
  },
  "protocol-pink": {
    50: { value: "#fff1fc" },
    100: { value: "#ffc9f3" },
    200: { value: "#ffa0eb" },
    300: { value: "#ff77e2" },
    400: { value: "#eb66cf" },
    500: { value: "#ce52b4" },
    600: { value: "#b14199" },
    700: { value: "#94317f" },
    800: { value: "#762365" },
    900: { value: "#59184b" },
  },
  "oracle-orange": {
    50: { value: "#ffefec" },
    100: { value: "#ffcdc2" },
    200: { value: "#ffab97" },
    300: { value: "#ff886d" },
    400: { value: "#FF6642" },
    500: { value: "#ea5330" },
    600: { value: "#c83e1e" },
    700: { value: "#a62c10" },
    800: { value: "#841d05" },
    900: { value: "#621300" },
  },

  // Neutrals with alpha variants
  neutrals: {
    white: { value: "#ffffff" },
    black: { value: "#000000" },
    whiteAlpha: {
      50: { value: "#ffffff0a" },
      100: { value: "#ffffff0f" },
      200: { value: "#ffffff14" },
      300: { value: "#ffffff29" },
      400: { value: "#ffffff3d" },
      500: { value: "#ffffff5c" },
      600: { value: "#ffffff7a" },
      700: { value: "#ffffffa3" },
      800: { value: "#ffffffcc" },
      900: { value: "#ffffffeb" },
    },
    blackAlpha: {
      50: { value: "#0000000a" },
      100: { value: "#0000000f" },
      200: { value: "#00000014" },
      300: { value: "#00000029" },
      400: { value: "#0000003d" },
      500: { value: "#0000005c" },
      600: { value: "#0000007a" },
      700: { value: "#000000a3" },
      800: { value: "#000000cc" },
      900: { value: "#000000eb" },
    },
  },

  // Feedback colors
  feedback: {
    success: {
      default: { value: "{colors.guild-green.400}" },
      dark: { value: "{colors.guild-green.700}" },
      light: { value: "{colors.guild-green.100}" },
    },
    error: {
      default: { value: "#D82C2D" },
      dark: { value: "#b61a1c" },
      light: { value: "#ffc2c2" },
    },
    warning: {
      default: { value: "{colors.oracle-orange.500}" },
      dark: { value: "{colors.oracle-orange.600}" },
      light: { value: "{colors.oracle-orange.100}" },
    },
  },
} satisfies Tokens["colors"];

export const opacity = {
  1: { value: "10%" },
  2: { value: "20%" },
  3: { value: "30%" },
  4: { value: "40%" },
  5: { value: "50%" },
  8: { value: "80%" },
  9: { value: "90%" },
  10: { value: "100%" },
} satisfies Tokens["opacity"];

export const semanticColors = {
  // Semantic colors from semantic_labs.json
  primary: {
    base: { value: "{colors.moveus-marigold.400}" },
    darken: { value: "{colors.moveus-marigold.500}" },
    "darken-2": { value: "{colors.moveus-marigold.600}" },
    lighten: { value: "{colors.moveus-marigold.300}" },
    "lighten-2": { value: "{colors.moveus-marigold.200}" },
    "lighten-3": { value: "{colors.moveus-marigold.100}" },
  },
  secondary: {
    base: { value: "{colors.byzantine-blue.400}" },
    darken: { value: "{colors.byzantine-blue.500}" },
    "darken-2": { value: "{colors.byzantine-blue.800}" },
    lighten: { value: "{colors.byzantine-blue.300}" },
    "lighten-2": { value: "{colors.byzantine-blue.100}" },
  },
  accent: {
    base: { value: "{colors.protocol-pink.300}" },
    darken: { value: "{colors.protocol-pink.500}" },
    "darken-2": { value: "{colors.protocol-pink.700}" },
    lighten: { value: "{colors.protocol-pink.200}" },
    "lighten-2": { value: "{colors.protocol-pink.100}" },
  },
  background: {
    dark: {
      base: { value: "{colors.neutrals.black}" },
      lighten: { value: "{colors.neutrals.blackAlpha.900}" },
      "lighten-2": { value: "{colors.neutrals.blackAlpha.800}" },
      "lighten-3": { value: "{colors.neutrals.blackAlpha.600}" },
    },
    light: {
      base: { value: "{colors.neutrals.white}" },
      lighten: { value: "{colors.neutrals.whiteAlpha.200}" },
      "lighten-2": { value: "{colors.neutrals.whiteAlpha.300}" },
      "lighten-3": { value: "{colors.neutrals.whiteAlpha.400}" },
      "lighten-4": { value: "{colors.neutrals.whiteAlpha.600}" },
    },
    canvas: { value: { base: "{colors.white}", _dark: "{colors.dark.600}" } },
    primary: {
      value: { base: "{colors.light.100}", _dark: "{colors.dark.500}" },
    },
    secondary: {
      value: { base: "{colors.light.200}", _dark: "{colors.dark.400}" },
    },
    tertiary: {
      value: { base: "{colors.light.300}", _dark: "{colors.dark.300}" },
    },
    interactive: {
      DEFAULT: {
        value: { base: "{colors.light.500}", _dark: "{colors.dark.200}" },
      },
      hover: {
        value: { base: "{colors.light.300}", _dark: "{colors.dark.100}" },
      },
      active: {
        value: { base: "{colors.light.400}", _dark: "{colors.dark.300}" },
      },
      disabled: {
        value: { base: "{colors.light.300}", _dark: "{colors.dark.100}" },
      },
    },
  },
  foreground: {
    dark: {
      base: { value: "{colors.neutrals.white}" },
      lighten: { value: "{colors.neutrals.whiteAlpha.700}" },
      "lighten-2": { value: "{colors.neutrals.whiteAlpha.600}" },
    },
    light: {
      base: { value: "{colors.neutrals.black}" },
      lighten: { value: "{colors.neutrals.blackAlpha.700}" },
    },
  },
  feedback: {
    info: {
      base: { value: "{primary.base}" },
      darken: { value: "{primary.darken}" },
      fg: { value: "{foreground.light.base}" },
    },
    success: {
      base: { value: "{colors.feedback.success.default}" },
      darken: { value: "{colors.feedback.success.dark}" },
      fg: { value: "{foreground.light.base}" },
    },
    error: {
      base: { value: "{colors.feedback.error.default}" },
      darken: { value: "{colors.feedback.error.dark}" },
      fg: { value: "{foreground.dark.base}" },
    },
    warning: {
      base: { value: "{colors.feedback.warning.default}" },
      darken: { value: "{colors.feedback.warning.dark}" },
      fg: { value: "{foreground.dark.base}" },
    },
    base: { value: "{background.light.base}" },
    fg: { value: "{foreground.light.base}" },
  },
  text: {
    base: { value: "{foreground.dark.base}" },
    contrast: { value: "{foreground.light.base}" },
    button: { value: "{foreground.light.base}" },
    primary: {
      value: { base: "{colors.dark.500}", _dark: "{colors.light.200}" },
    },
    secondary: {
      value: { base: "{colors.mid.600}", _dark: "{colors.mid.100}" },
    },
    tertiary: {
      value: { base: "{colors.mid.400}", _dark: "{colors.mid.300}" },
    },
    link: {
      DEFAULT: {
        value: { base: "{colors.mid.400}", _dark: "{colors.mid.100}" },
      },
      hover: {
        value: { base: "{colors.dark.200}", _dark: "{colors.light.100}" },
      },
    },
    label: {
      value: { base: "{colors.dark.500}", _dark: "{colors.light.200}" },
    },
    success: {
      value: { base: "{colors.accent.400}", _dark: "{colors.accent.300}" },
    },
    error: { value: { base: "{colors.red.300}", _dark: "{colors.red.200}" } },
    warning: {
      value: { base: "{colors.yellow.300}", _dark: "{colors.yellow.100}" },
    },
    disabled: {
      value: { base: "{colors.mid.100}", _dark: "{colors.mid.400}" },
    },
  },
  disabled: {
    base: { value: "{colors.neutrals.whiteAlpha.600}" },
  },

  // Legacy semantic colors for backward compatibility
  system: {
    error: { value: { base: "{colors.red.300}", _dark: "{colors.red.200}" } },
    warning: {
      value: { base: "{colors.yellow.300}", _dark: "{colors.yellow.100}" },
    },
    success: {
      value: { base: "{colors.accent.400}", _dark: "{colors.accent.300}" },
    },
  },

  border: {
    primary: {
      value: { base: "{colors.light.400}", _dark: "{colors.dark.100}" },
    },
    secondary: {
      value: { base: "{colors.light.300}", _dark: "{colors.dark.200}" },
    },
    tertiary: {
      value: { base: "{colors.light.200}", _dark: "{colors.dark.400}" },
    },
    focus: { value: "#0D9BDB" },
  },

  icon: {
    primary: {
      value: { base: "{colors.dark.500}", _dark: "{colors.light.200}" },
    },
    secondary: {
      value: { base: "{colors.mid.600}", _dark: "{colors.mid.100}" },
    },
    tertiary: {
      value: { base: "{colors.mid.400}", _dark: "{colors.mid.300}" },
    },
  },

  spinner: {
    primary: {
      arc: {
        value: { base: "{colors.accent.200}", _dark: "{colors.accent.200}" },
      },
      track: {
        value: {
          base: "{colors.accent.200/40}",
          _dark: "{colors.accent.200/40}",
        },
      },
    },
    secondary: {
      arc: {
        value: { base: "{colors.dark.500}", _dark: "{colors.light.200}" },
      },
      track: {
        value: { base: "{colors.dark.500/20}", _dark: "{colors.light.200/20}" },
      },
    },
    destructive: {
      arc: { value: { base: "{colors.red.200}", _dark: "{colors.red.200}" } },
      track: {
        value: { base: "{colors.red.200/20}", _dark: "{colors.red.200/20}" },
      },
    },
    onPrimary: {
      arc: { value: "{colors.dark.500}" },
      track: { value: "{colors.dark.500/20}" },
    },
  },

  skeleton: {
    DEFAULT: { value: "{colors.background.tertiary}" },
    shimmer1: { value: "{colors.transparent}" },
    shimmer2: {
      value: { base: "{colors.white/20}", _dark: "{colors.dark.600/20}" },
    },
    shimmer3: {
      value: { base: "{colors.white/50}", _dark: "{colors.dark.600/50}" },
    },
  },

  card: {
    background: { value: "{colors.background.primary}" },
    border: {
      DEFAULT: { value: "{colors.border.primary}" },
      hover: {
        value: { base: "{colors.light.300}", _dark: "{colors.mid.600}" },
      },
    },
  },

  button: {
    outline: {
      DEFAULT: {
        text: {
          value: { base: "{colors.dark.500}", _dark: "{colors.light.300}" },
        },
        border: {
          value: {
            base: "{colors.light.600}",
            _dark: "{colors.border.primary}",
          },
        },
        brackets: {
          value: { base: "{colors.light.600}", _dark: "{colors.mid.600}" },
        },
      },
      hover: {
        text: {
          value: { base: "{colors.dark.500}", _dark: "{colors.light.300}" },
        },
        border: {
          value: { base: "{colors.mid.100/70}", _dark: "{colors.mid.600}" },
        },
      },
      pressed: {
        text: {
          value: { base: "{colors.dark.500}", _dark: "{colors.light.300}" },
        },
        border: {
          value: { base: "{colors.mid.200}", _dark: "{colors.mid.500}" },
        },
      },
      disabled: {
        background: { value: "{colors.background.interactive.disabled}" },
        text: { value: "{colors.text.disabled}" },
        border: {
          value: {
            base: "{colors.light.600}",
            _dark: "{colors.border.primary}",
          },
        },
      },
    },
    primary: {
      DEFAULT: {
        background: { value: "{colors.accent.200}" },
        text: { value: "{colors.dark.500}" },
      },
      hover: {
        background: { value: "{colors.accent.100}" },
        text: { value: "{colors.dark.500}" },
      },
      pressed: {
        background: { value: "{colors.accent.400}" },
        text: { value: "{colors.dark.500}" },
      },
      disabled: {
        background: { value: "{colors.background.interactive.disabled}" },
        text: { value: "{colors.text.disabled}" },
      },
    },
    secondary: {
      DEFAULT: {
        background: {
          value: { base: "{colors.light.400}", _dark: "{colors.dark.200}" },
        },
        text: {
          value: { base: "{colors.dark.500}", _dark: "{colors.light.300}" },
        },
      },
      hover: {
        background: {
          value: { base: "{colors.light.300}", _dark: "{colors.dark.100}" },
        },
        text: {
          value: { base: "{colors.dark.500}", _dark: "{colors.light.300}" },
        },
      },
      pressed: {
        background: {
          value: { base: "{colors.light.500}", _dark: "{colors.dark.300}" },
        },
        text: {
          value: { base: "{colors.dark.500}", _dark: "{colors.light.300}" },
        },
      },
      disabled: {
        background: {
          value: { base: "{colors.light.300}", _dark: "{colors.dark.500}" },
        },
        text: { value: "{colors.text.disabled}" },
      },
    },
    destructive: {
      DEFAULT: {
        background: { value: "{colors.red.200}" },
        text: { value: "{colors.dark.500}" },
      },
      hover: {
        background: { value: "{colors.red.100}" },
        text: { value: "{colors.dark.500}" },
      },
      pressed: {
        background: { value: "{colors.red.300}" },
        text: { value: "{colors.dark.500}" },
      },
      disabled: {
        background: { value: "{colors.red.200/40}" },
        text: { value: "{colors.dark.500}" },
      },
    },
    text: {
      DEFAULT: {
        text: {
          value: { base: "{colors.dark.500}", _dark: "{colors.mid.200}" },
        },
      },
      hover: {
        text: {
          value: { base: "{colors.mid.600}", _dark: "{colors.light.100}" },
        },
      },
      pressed: {
        text: {
          value: { base: "{colors.mid.600}", _dark: "{colors.light.100}" },
        },
      },
      disabled: {
        text: { value: "{colors.text.disabled}" },
      },
      destructive: {
        DEFAULT: {
          text: { value: "{colors.red.200}" },
        },
        hover: {
          text: { value: "{colors.red.100}" },
        },
        pressed: {
          text: { value: "{colors.red.300}" },
        },
        disabled: {
          text: { value: "{colors.red.200/50}" },
        },
      },
    },
  },

  dialog: {
    backdrop: { value: "{colors.dark.600/80}" },
  },

  menu: {
    background: {
      value: { base: "{colors.light.200}", _dark: "{colors.dark.300}" },
    },
    border: {
      value: { base: "{colors.light.300}", _dark: "{colors.dark.200}" },
    },
  },

  formControl: {
    background: {
      DEFAULT: { value: "{colors.background.interactive}" },
      hover: { value: "{colors.background.interactive.hover}" },
      active: { value: "{colors.background.interactive.active}" },
      disabled: { value: "{colors.background.interactive.disabled}" },
    },
    border: {
      active: {
        value: { base: "{colors.accent.400}", _dark: "{colors.accent.300}" },
      },
      error: { value: "{colors.system.error}" },
      warning: { value: "{colors.system.warning}" },
      success: { value: "{colors.system.success}" },
    },
  },

  pill: {
    text: { value: "{colors.text.secondary}" },
    border: { value: "{colors.border.secondary}" },
  },

  tabs: {
    border: {
      DEFAULT: { value: "{colors.border.secondary}" },
      active: {
        DEFAULT: {
          value: { base: "{colors.dark.500}", _dark: "{colors.light.300}" },
        },
        secondary: { value: "{colors.system.success}" },
      },
    },
  },

  tooltip: {
    background: {
      value: { base: "{colors.light.600}", _dark: "{colors.dark.100}" },
    },
    text: { value: "{colors.text.primary}" },
  },

  toast: {
    background: { value: "{colors.background.interactive}" },
    text: { value: "{colors.text.primary}" },
    icon: { close: { value: "{colors.icon.tertiary}" } },
  },

  checkbox: {
    background: {
      DEFAULT: { value: "{colors.button.primary.background}" },
      hover: { value: "{colors.button.primary.hover.background}" },
      disabled: { value: "{colors.button.primary.disabled.background}" },
    },
    border: {
      DEFAULT: {
        value: { base: "{colors.mid.100}", _dark: "{colors.mid.600}" },
      },
      hover: {
        value: { base: "{colors.light.600}", _dark: "{colors.mid.300}" },
      },
    },
    check: {
      DEFAULT: { value: "{colors.button.primary.text}" },
      disabled: { value: "{colors.button.primary.disabled.text}" },
    },
  },

  progress: {
    track: {
      DEFAULT: { value: "{colors.background.interactive}" },
      danger: {
        value: { base: "{colors.red.300/25}", _dark: "{colors.red.200/25}" },
      },
      small: {
        value: { base: "{colors.light.500}", _dark: "{colors.dark.400}" },
      },
    },
    range: {
      primary: {
        value: { base: "{colors.accent.300}", _dark: "{colors.accent.200}" },
      },
      secondary: {
        value: { base: "{colors.mid.200}", _dark: "{colors.mid.300}" },
      },
      warning: {
        value: { base: "{colors.yellow.300}", _dark: "{colors.yellow.200}" },
      },
      danger: {
        value: { base: "{colors.red.300}", _dark: "{colors.red.200}" },
      },
    },
  },

  alert: {
    DEFAULT: {
      background: {
        value: { base: "{colors.light.600}", _dark: "{colors.dark.200}" },
      },
      text: {
        value: {
          base: "{colors.text.primary}",
          _dark: "{colors.text.primary}",
        },
      },
    },
    error: {
      background: {
        value: { base: "{colors.red.100}", _dark: "{colors.dark.200}" },
      },
      text: {
        value: { base: "{colors.text.primary}", _dark: "{colors.red.200}" },
      },
    },
    warning: {
      background: {
        value: { base: "{colors.yellow.200}", _dark: "{colors.dark.200}" },
      },
      text: {
        value: { base: "{colors.text.primary}", _dark: "{colors.yellow.100}" },
      },
    },
    success: {
      background: {
        value: { base: "{colors.accent.200}", _dark: "{colors.dark.200}" },
      },
      text: {
        value: { base: "{colors.text.primary}", _dark: "{colors.accent.100}" },
      },
    },
  },

  toggle: {
    background: {
      DEFAULT: {
        value: { base: "{colors.light.200}", _dark: "{colors.dark.500}" },
      },
      hover: {
        value: { base: "{colors.light.300}", _dark: "{colors.dark.400}" },
      },
      active: {
        value: { base: "{colors.light.600}", _dark: "{colors.dark.300}" },
      },
    },
    text: {
      DEFAULT: {
        value: { base: "{colors.mid.400}", _dark: "{colors.mid.200}" },
      },
      hover: {
        value: { base: "{colors.mid.500}", _dark: "{colors.light.200}" },
      },
      active: { value: "{colors.text.primary}" },
    },
  },
} satisfies SemanticTokens["colors"];
