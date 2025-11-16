
# Movement Design Token System

This repository includes:
- Brand tokens
- Semantic tokens (base + per component)
- Component tokens
- Primitives (spacing, radii, typography, shadows, etc.)
- Theme files for Industries & Labs (light + dark)
- Resolved tokens for engineering
- Tailwind token example

## Semantic Brand

- `design-tokens/semantic/semantic-brand.json` defines brand-level roles:
  - `semantic.brand.primary.*`
  - `semantic.brand.secondary.*`
  - `semantic.brand.accent.*`
  - `semantic.brand.surface.*`
  - `semantic.brand.icon.*`
  - `semantic.brand.industries.primary.*`
  - `semantic.brand.labs.primary.*`

By default, `semantic.brand.primary.*` points at the Industries primary ramp.
Labs-specific mappings are available via `semantic.brand.labs.primary.*`.
