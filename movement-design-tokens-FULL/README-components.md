
This package contains generic semantic + component tokens for all core UI components.

Each component has:
- semantic.<component>.bg / fg / border / icon / state.*
- component.<component>.* aliases used for Figma bindings and implementation.

These files are intended to be merged into your main design-tokens folder
alongside semantic-base.json and semantic-button.json.

They currently use generic semantic roles:
- bg/base/alt-1/alt-2
- fg/base/muted/subtle
- border/default/strong
- feedback/success/error/warning/info

You can refine individual values per component in Tokens Studio
if you need to match the Figma visuals exactly.
