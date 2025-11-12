# Input Component Documentation

Enhanced Input component based on Figma Design System specifications.

## Features

### Core Features
- ✅ Multiple size variants (sm, md, lg)
- ✅ Left and right icon support
- ✅ Clearable functionality with auto-showing X button
- ✅ Error state styling
- ✅ Glass/backdrop blur effect
- ✅ Custom cursor color (guild-green-300)
- ✅ Controlled and uncontrolled modes
- ✅ Full keyboard accessibility

### Design Specifications
Based on Figma design: `Forms/Input/typeable`

## Size Variants

| Size | Height | Border Radius | Font Size | Use Case |
|------|--------|---------------|-----------|----------|
| `sm` | 40px | 8px (rounded-lg) | 18px | Compact forms, table inputs |
| `md` | 56px | 16px (rounded-2xl) | 20px | Standard forms |
| `lg` | 64px | 16px (rounded-2xl) | 24px | Prominent inputs, hero sections |

## Props

```typescript
interface InputProps {
  // Size variant
  size?: "sm" | "md" | "lg";
  
  // Variant (styling)
  variant?: "default" | "error";
  
  // Icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  
  // Clearable functionality
  clearable?: boolean;
  onClear?: () => void;
  
  // Error state
  error?: boolean;
  
  // Standard input props
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // ... all other HTML input attributes
}
```

## Usage Examples

### Basic Input

```tsx
import { Input } from "@/components/shadcn/input";

// Glass effect is the default styling
<Input 
  placeholder="Enter amount..." 
  size="lg"
/>

// Also works without explicit size
<Input 
  placeholder="Enter text..." 
/>
```

### With Left Icon (Search)

```tsx
import { Input } from "@/components/shadcn/input";
import { Search } from "lucide-react";

<Input 
  placeholder="Search" 
  leftIcon={<Search className="size-6" />}
  size="lg"
/>
```

### Clearable Input (Controlled)

```tsx
import { Input } from "@/components/shadcn/input";
import { useState } from "react";

function MyForm() {
  const [value, setValue] = useState("");

  return (
    <Input 
      placeholder="Type something..." 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue("")}
      clearable
      size="lg"
    />
  );
}
```

### Clearable Input (Uncontrolled)

```tsx
<Input 
  placeholder="Type something..." 
  defaultValue="Initial value"
  clearable
  size="lg"
/>
```

### Error State

```tsx
<div className="space-y-2">
  <Label>Amount</Label>
  <Input 
    placeholder="0" 
    error
    defaultValue="Invalid"
    size="lg"
  />
  <p className="text-sm text-destructive">Please enter a valid amount</p>
</div>
```

### With Both Icons

```tsx
import { User, Lock } from "lucide-react";

<Input 
  placeholder="Username" 
  leftIcon={<User className="size-6" />}
  rightIcon={<Lock className="size-6" />}
  size="lg"
/>
```

## States

### Default
Empty input with placeholder text in white/36 opacity.

### Hover
No visual change (border remains consistent).

### Focus
- Green cursor (guild-green-300: #81ffba)
- Border color remains consistent for glass effect
- Caret color changes to accent green

### Filled
- Shows clear button if `clearable` prop is true
- Clear button replaces right icon if present

### Error
- Red border (destructive color: #d82c2d)
- Red text color
- Red cursor/caret
- Typically accompanied by error message below

### Disabled
- Reduced opacity (50%)
- Cursor not allowed
- Pointer events disabled

## Styling Details

### Glass Effect
The glass effect is the default styling for all inputs:

```css
backdrop-blur-[21px]
border-2 border-white/24
bg-transparent
```

This creates a frosted glass appearance that works beautifully on dark backgrounds or with the `DottedBackground` component.

### Typography
- **Small**: 18px, font-normal
- **Medium**: 20px, font-normal  
- **Large**: 24px, font-light (weight: 350)

### Colors
- **Placeholder**: `rgba(255, 255, 255, 0.36)` - white/36
- **Text**: `#ffffff` - white
- **Cursor**: `#81ffba` - guild-green-300
- **Border (default)**: `rgba(255, 255, 255, 0.24)` - white/24
- **Border (error)**: `#d82c2d` - destructive

### Spacing
- **Horizontal padding**: 16px
- **Vertical padding**: varies by size
- **Gap between elements**: 12px
- **Icon size (sm/md)**: 20px (size-5)
- **Icon size (lg)**: 24px (size-6)

## Accessibility

- Full keyboard navigation support
- Clear button has `tabIndex={-1}` to keep it out of tab order
- Input maintains focus after clearing
- Uses semantic HTML `<input>` element
- Supports all ARIA attributes via props

## Integration with Forms

Works seamlessly with:
- React Hook Form
- Formik
- Native HTML forms
- Shadcn Form components

### Example with React Hook Form

```tsx
import { useForm } from "react-hook-form";
import { Input } from "@/components/shadcn/input";
import { Search } from "lucide-react";

function SearchForm() {
  const { register, setValue } = useForm();

  return (
    <form>
      <Input
        {...register("query")}
        placeholder="Search"
        leftIcon={<Search className="size-6" />}
        clearable
        onClear={() => setValue("query", "")}
        size="lg"
      />
    </form>
  );
}
```

## Best Practices

1. **Use appropriate sizes**: 
   - `sm` for dense interfaces
   - `md` for standard forms
   - `lg` for hero sections or prominent CTAs

2. **Clear button**: Enable `clearable` for search inputs and filters

3. **Error handling**: Always pair error state with descriptive message

4. **Icons**: Use consistent icon sizes (size-6 for lg, size-5 for sm/md)

5. **Labels**: Always include labels for accessibility

6. **Glass effect**: Works best with `DottedBackground` component or dark backgrounds

## Related Components

- `Label` - For input labels
- `DottedBackground` - For showcasing glass effect
- `Form` - Form field wrapper with validation
- `Field` - Alternative form field wrapper

## Design System Compliance

This component matches the Figma design specifications from:
- File: "Design System"
- Component: "Forms/Input/typeable"
- States: default, hover, focus, error
- Variants: all size variants implemented

## Storybook

See comprehensive examples in Storybook:
- `input.stories.tsx` - All component variations
- Stories include: size variants, states, icons, clearable, error handling

