# DottedBackground Component

A flexible background component for showcasing transparent and glass-effect components in Storybook.

## Features

- **Multiple Variants**: dots, grid, and gradient patterns
- **Customizable**: Adjust dot color, size, and spacing
- **Perfect for Glass Effects**: Ideal for showcasing backdrop-blur and transparency

## Usage

```tsx
import { DottedBackground } from "@/components/DottedBackground";
import { Input } from "@/components/shadcn/input";
import { Search } from "lucide-react";

function Example() {
  return (
    <DottedBackground variant="gradient">
      <Input 
        placeholder="Search" 
        leftIcon={<Search className="size-6" />}
      />
    </DottedBackground>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"dots"` \| `"grid"` \| `"gradient"` | `"dots"` | Background pattern type |
| `dotColor` | `string` | `"rgba(255, 255, 255, 0.2)"` | Color of dots/grid lines |
| `dotSize` | `number` | `1` | Size of the dots in pixels |
| `gap` | `number` | `20` | Spacing between dots/grid lines |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Content to render inside |

## Variants

### Dots
Subtle dotted pattern ideal for most use cases.

```tsx
<DottedBackground variant="dots">
  {/* Your content */}
</DottedBackground>
```

### Grid
Grid lines for a more structured look.

```tsx
<DottedBackground variant="grid">
  {/* Your content */}
</DottedBackground>
```

### Gradient
Colorful gradient background with a modern look.

```tsx
<DottedBackground variant="gradient">
  {/* Your content */}
</DottedBackground>
```

## Examples

See `src/stories/dotted-background.stories.tsx` for comprehensive examples including:
- Basic variants
- Custom styling
- Integration with glass-effect inputs
- Integration with glass-effect cards

