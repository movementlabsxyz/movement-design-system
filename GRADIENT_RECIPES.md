# Gradient Recipes

This document describes the gradient background recipes available in the Movement Design System.

## Quick Reference

### Available Gradients

1. **Mint Cyan** (`mintCyan`)
   - Vibrant linear gradient from mint green to cyan
   - Use: CTAs, highlights, primary accents
   - CSS: `linear-gradient(130deg, #81FFBA 33.64%, #00FFF9 79.2%)`

2. **Glass Overlay** (`glassOverlay`)
   - Multi-layered gradient with dark overlays and radial colors
   - Use: Glassmorphic designs, modals, cards
   - CSS: `linear-gradient(0deg, rgba(4, 5, 27, 0.20) 0%, rgba(4, 5, 27, 0.20) 100%), linear-gradient(153deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(100% 100% at 120.34% 112.85%, rgba(129, 255, 186, 0.40) 0%, rgba(0, 27, 133, 0.40) 100%)`

## Installation & Usage

### Import

```typescript
import { 
  gradientBackgroundStyles,     // CSS string for global injection
  gradientBackgroundClasses,     // Class name constants
  getGradientClass               // Utility function
} from "@movementlabsxyz/movement-design-system";
```

### Usage Patterns

#### 1. Direct Class Names

```tsx
import { gradientBackgroundClasses } from "@movementlabsxyz/movement-design-system";

<div className={gradientBackgroundClasses.mintCyan}>
  Content here
</div>
```

#### 2. Utility Function

```tsx
import { getGradientClass } from "@movementlabsxyz/movement-design-system";

<div className={getGradientClass('mintCyan')}>
  Content here
</div>
```

#### 3. Global Injection

```tsx
// In your app entry point
import { gradientBackgroundStyles } from "@movementlabsxyz/movement-design-system";

const styleTag = document.createElement('style');
styleTag.innerHTML = gradientBackgroundStyles;
document.head.appendChild(styleTag);

// Then use directly
<div className="gradient-mint-cyan">Content</div>
```

## Examples

### Simple Button

```tsx
import { gradientBackgroundClasses, cn } from "@movementlabsxyz/movement-design-system";

<button className={cn(
  gradientBackgroundClasses.mintCyan,
  "px-6 py-3 rounded-lg text-white font-bold"
)}>
  Click Me
</button>
```

### Glassmorphic Card

```tsx
import { gradientBackgroundClasses } from "@movementlabsxyz/movement-design-system";

<div className={cn(
  gradientBackgroundClasses.glassOverlay,
  "p-8 rounded-2xl backdrop-blur-xl border border-white/10"
)}>
  <h2>Glassmorphic Design</h2>
  <p>Beautiful overlay effects</p>
</div>
```

### Dynamic Gradient Selection

```tsx
import { getGradientClass } from "@movementlabsxyz/movement-design-system";

function Card({ variant }: { variant: 'mintCyan' | 'glassOverlay' }) {
  return (
    <div className={getGradientClass(variant)}>
      Content
    </div>
  );
}
```

## Storybook Documentation

View these gradients in Storybook:
- Navigate to **theme/Gradients**
- See all available gradients with live previews
- Copy code examples
- View usage patterns

## File Structure

```
src/lib/
  └── gradient-styles.ts          # Gradient definitions and exports

src/theme-stories/
  └── gradients.stories.tsx       # Storybook stories

src/recipes-hooks-utils/recipes/
  └── gradientBackgroundStyles.mdx # Detailed documentation
```

## TypeScript Support

All exports are fully typed:

```typescript
type GradientVariant = keyof typeof gradientBackgroundClasses;
// "mintCyan" | "glassOverlay"

const gradientBackgroundClasses: {
  readonly mintCyan: "gradient-mint-cyan";
  readonly glassOverlay: "gradient-glass-overlay";
}

function getGradientClass(variant: GradientVariant): string;
```

## Best Practices

1. **Contrast**: Ensure text has sufficient contrast on gradient backgrounds
2. **Performance**: These are CSS-only, no JS overhead
3. **Consistency**: Use these recipes instead of inline gradients
4. **Accessibility**: Test with screen readers and high contrast modes
5. **Responsive**: Gradients scale automatically

## Contributing

To add new gradient recipes:

1. Add the CSS to `gradientBackgroundStyles` in `src/lib/gradient-styles.ts`
2. Add the class name to `gradientBackgroundClasses`
3. Update the TypeScript types
4. Create a story in `src/theme-stories/gradients.stories.tsx`
5. Document in `src/recipes-hooks-utils/recipes/gradientBackgroundStyles.mdx`

