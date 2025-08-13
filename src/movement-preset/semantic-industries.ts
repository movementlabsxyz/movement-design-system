import { SemanticTokens } from "@pandacss/dev";
import { movementPreset } from "./index";
const colors = movementPreset.theme?.tokens?.colors;

export const semanticIndustries = {
  primary: {
  base: { value: {colors.guild-green.300} },
  darken: { value: {colors.guild-green.500} },
  darken-2: { value: {colors.guild-green.600} },
  lighten: { value: {colors.guild-green.200} },
  lighten-2: { value: {colors.guild-green.100} }
  },
  secondary: {
  base: { value: {colors.byzantine-blue.400} },
  darken: { value: {colors.byzantine-blue.500} },
  darken-2: { value: {colors.byzantine-blue.800} },
  lighten: { value: {colors.byzantine-blue.300} },
  lighten-2: { value: {colors.byzantine-blue.100} }
  },
  accent: {
  base: { value: {colors.protocol-pink.300} },
  darken: { value: {colors.protocol-pink.500} },
  darken-2: { value: {colors.protocol-pink.700} },
  lighten: { value: {colors.protocol-pink.200} },
  lighten-2: { value: {colors.protocol-pink.100} }
  },
  background: {
  dark: {
  base: { value: {colors.neutrals.black} },
  lighten: { value: {colors.neutrals.blackAlpha.900} },
  lighten-2: { value: {colors.neutrals.blackAlpha.800} },
  lighten-3: { value: {colors.neutrals.blackAlpha.600} }
  },
  light: {
  base: { value: {colors.neutrals.white} },
  lighten: { value: {colors.neutrals.whiteAlpha.200} },
  lighten-2: { value: {colors.neutrals.whiteAlpha.300} },
  lighten-3: { value: {colors.neutrals.whiteAlpha.400} },
  lighten-4: { value: {colors.neutrals.whiteAlpha.600} }
  }
  },
  foreground: {
  dark: {
  base: { value: {colors.neutrals.white} },
  lighten: { value: {colors.neutrals.whiteAlpha.700} },
  lighten-2: { value: {colors.neutrals.whiteAlpha.600} }
  },
  light: {
  base: { value: {colors.neutrals.black} },
  lighten: { value: {colors.neutrals.blackAlpha.700} }
  }
  },
  feedback: {
  info: {
  base: { value: {primary.base} },
  darken: { value: {primary.darken} },
  fg: { value: {feedback.fg} }
  },
  success: {
  base: { value: {colors.feedback.success.default} },
  darken: { value: {colors.feedback.success.dark} },
  fg: { value: {secondary.darken-2} }
  },
  error: {
  base: { value: {colors.feedback.error.default} },
  darken: { value: {colors.feedback.error.dark} },
  fg: { value: {foreground.dark.base} }
  },
  warning: {
  base: { value: {colors.feedback.warning.default} },
  darken: { value: {colors.feedback.warning.dark} },
  fg: { value: {foreground.dark.base} }
  },
  base: { value: {background.light.base} },
  fg: { value: {foreground.light.base} }
  },
  text: {
  base: { value: {foreground.dark.base} },
  contrast: { value: {foreground.light.base} },
  button: { value: {secondary.darken-2} }
  },
  disabled: {
  base: { value: {colors.neutrals.whiteAlpha.600} }
  }
} satisfies SemanticTokens["colors"];