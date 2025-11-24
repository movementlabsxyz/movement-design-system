# Gradient Recipes Summary

## ✅ Created Files

### 1. Core Implementation
**`src/lib/gradient-styles.ts`**
- Main gradient styles file
- Contains two gradient recipes: `mintCyan` and `glassOverlay`
- Exports: `gradientBackgroundStyles`, `gradientBackgroundClasses`, `getGradientClass()`

### 2. Storybook Stories
**`src/theme-stories/gradients.stories.tsx`**
- Interactive Storybook documentation
- Stories: `MintCyan`, `GlassOverlay`, `UsageExample`, `AllGradients`
- Location in Storybook: **theme/Gradients**

### 3. Recipe Documentation
**`src/recipes-hooks-utils/recipes/gradientBackgroundStyles.mdx`**
- Comprehensive MDX documentation
- Usage examples with code snippets
- Best practices and tips
- Location in Storybook: **Recipes/gradientBackgroundStyles**

### 4. Quick Reference Guides
- **`GRADIENT_RECIPES.md`** - Main reference guide
- **`GRADIENT_RECIPES_SUMMARY.md`** - This file

## 🎨 Gradient Definitions

### Mint Cyan
```css
background: linear-gradient(130deg, #81FFBA 33.64%, #00FFF9 79.2%);
```
**Use Cases:** CTAs, highlights, primary accents, buttons

### Glass Overlay
```css
background: linear-gradient(0deg, rgba(4, 5, 27, 0.20) 0%, rgba(4, 5, 27, 0.20) 100%), 
            linear-gradient(153deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), 
            radial-gradient(100% 100% at 120.34% 112.85%, rgba(129, 255, 186, 0.40) 0%, rgba(0, 27, 133, 0.40) 100%);
```
**Use Cases:** Glassmorphic designs, modals, cards, overlays

## 📦 Exports

All gradient utilities are exported from the main package:

```typescript
import {
  gradientBackgroundStyles,     // CSS string
  gradientBackgroundClasses,     // { mintCyan: string, glassOverlay: string }
  getGradientClass,              // (variant) => string
} from "@movementlabsxyz/movement-design-system";
```

Also exported from `src/index.ts` for internal use.

## 🔧 Usage Examples

### Quick Start
```tsx
import { gradientBackgroundClasses } from "@movementlabsxyz/movement-design-system";

// Use directly
<div className={gradientBackgroundClasses.mintCyan}>
  Content
</div>
```

### With Utility Function
```tsx
import { getGradientClass } from "@movementlabsxyz/movement-design-system";

function Card({ variant }: { variant: 'mintCyan' | 'glassOverlay' }) {
  return <div className={getGradientClass(variant)}>Content</div>;
}
```

### CTA Button Example
```tsx
import { gradientBackgroundClasses, cn } from "@movementlabsxyz/movement-design-system";

<button 
  className={cn(
    gradientBackgroundClasses.mintCyan,
    "px-6 py-3 rounded-lg text-white font-semibold",
    "transition-transform hover:scale-105"
  )}
>
  Get Started
</button>
```

## ✅ Build Status

- ✅ TypeScript compilation successful
- ✅ Vite build successful
- ✅ Storybook build successful
- ✅ No linting errors
- ✅ Exports added to main index.ts

## 📚 Documentation Locations

1. **Storybook Interactive Docs**
   - Run: `pnpm run storybook`
   - Navigate to: **theme/Gradients**

2. **Recipe Documentation**
   - Location: **Recipes/gradientBackgroundStyles**
   - File: `src/recipes-hooks-utils/recipes/gradientBackgroundStyles.mdx`

3. **Quick Reference**
   - `GRADIENT_RECIPES.md` in project root

## 🎯 Next Steps

1. **View in Storybook**
   ```bash
   pnpm run storybook
   ```
   Navigate to **theme/Gradients** to see live examples

2. **Use in Your Components**
   Import and use the gradient classes in your React components

3. **Customize**
   Modify `src/lib/gradient-styles.ts` to add more gradients or adjust existing ones

## 📝 Notes

- All gradients are CSS-only (no JavaScript overhead)
- Fully typed with TypeScript
- Follows existing project patterns (similar to `border-styles.ts`)
- Compatible with Tailwind CSS classes via `cn()` utility
- Works in both light and dark modes

## 🔍 File Changes

**New Files Created:**
- `src/lib/gradient-styles.ts`
- `src/theme-stories/gradients.stories.tsx`
- `src/recipes-hooks-utils/recipes/gradientBackgroundStyles.mdx`
- `GRADIENT_RECIPES.md`
- `GRADIENT_RECIPES_SUMMARY.md`

**Modified Files:**
- `src/index.ts` (added gradient exports)

**Build Outputs:**
- `dist/lib/gradient-styles.d.ts`
- `dist/lib/gradient-styles.d.ts.map`
- Storybook static files include gradient stories

