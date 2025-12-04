# Movement Design System

[![npm version](https://img.shields.io/npm/v/@movementlabsxyz/movement-design-system.svg)](https://www.npmjs.com/package/@movementlabsxyz/movement-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready design system built with shadcn/ui components, Radix UI primitives, and Tailwind CSS v4. This library provides a complete set of accessible, customizable React components for building modern web applications.

**Version 1.0** - Stable API, production-ready, comprehensive documentation.

## ✨ Features

- 🎨 **50+ Components** - Buttons, forms, dialogs, navigation, data display, and more
- ♿ **Accessible** - Built on Radix UI primitives with ARIA support
- 🎭 **Customizable** - Full theme customization with CSS variables
- 🌗 **Dark Mode** - Built-in dark mode support
- 📦 **Tree Shakeable** - Only import what you need
- 🔷 **TypeScript** - Full type safety out of the box
- 📚 **Storybook** - Interactive component documentation
- ⚡ **Modern Stack** - Tailwind CSS v4, React 18+, shadcn/ui architecture

## 📦 Installation

```bash
npm install @movementlabsxyz/movement-design-system
# or
pnpm add @movementlabsxyz/movement-design-system
# or
yarn add @movementlabsxyz/movement-design-system
```

## Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install react react-dom tailwindcss
```

## Setup

### 1. Import Styles

Import the design system styles in your main app file:

```tsx
// src/main.tsx or src/App.tsx
import '@movementlabsxyz/movement-design-system/styles';
```

### 2. Configure Tailwind CSS

Create or update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@movementlabsxyz/movement-design-system/dist/**/*.{js,mjs}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
```

### 3. Add CSS Variables

Add these CSS variables to your `src/index.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
  }
}
```

## Usage

### Basic Example

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@movementlabsxyz/movement-design-system';

function App() {
  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Movement Design System</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Start building beautiful UIs with our component library.</p>
          <Button className="mt-4">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

### Form Example

```tsx
import { Button, Input, Label } from '@movementlabsxyz/movement-design-system';

function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <Button type="submit" className="w-full">Sign In</Button>
    </form>
  );
}
```

### Dialog Example

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button
} from '@movementlabsxyz/movement-design-system';

function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

## Available Components

### Layout
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `Separator`
- `AspectRatio`
- `Resizable`, `ResizablePanel`, `ResizableHandle`
- `ScrollArea`, `ScrollBar`
- `Sidebar` and related components

### Forms & Inputs
- `Input`, `InputGroup`
- `Textarea`
- `Button`, `ButtonGroup`
- `Checkbox`
- `RadioGroup`, `RadioGroupItem`
- `Select` and related components
- `Switch`
- `Slider`
- `Label`
- `Form` components
- `Calendar`
- `InputOTP`

### Navigation
- `NavigationMenu` and related components
- `Menubar` and related components
- `DropdownMenu` and related components
- `ContextMenu` and related components
- `Breadcrumb` and related components
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
- `Pagination` and related components

### Feedback
- `Alert`, `AlertTitle`, `AlertDescription`
- `AlertDialog` and related components
- `Dialog` and related components
- `Toast` (via Sonner)
- `Progress`
- `Spinner`
- `Skeleton`

### Data Display
- `Table` and related components
- `Badge`
- `Avatar`, `AvatarImage`, `AvatarFallback`
- `Tooltip` and related components
- `HoverCard` and related components
- `Accordion` and related components
- `Collapsible` and related components
- `Chart` components (via Recharts)
- `Command` and related components
- `Empty`

### Overlays
- `Sheet` and related components
- `Drawer` and related components
- `Popover` and related components

### Utilities
- `cn` - Utility function for class name merging
- `useMobile` - Hook to detect mobile devices

## TypeScript Support

This library is built with TypeScript and provides full type definitions. You'll get autocomplete and type checking out of the box.

```tsx
import type { VariantProps } from '@movementlabsxyz/movement-design-system';
import { Button, buttonVariants } from '@movementlabsxyz/movement-design-system';

// Get variant types
type ButtonVariants = VariantProps<typeof buttonVariants>;
```

## 📚 Documentation

### Interactive Storybook

Explore components with live examples and code snippets:

**[View Storybook Documentation →](https://movement-design-system-docs-git-shadcn-movement-labs.vercel.app/)**

### Local Development

Run Storybook locally:

```bash
# Clone the repository
git clone https://github.com/movementlabsxyz/movement-design-system.git
cd movement-design-system

# Install dependencies
pnpm install

# Start Storybook
pnpm storybook
```

## Development

### Project Structure

```
shadcn-storybook/
├── src/
│   ├── components/
│   │   └── ui/          # Component library
│   ├── lib/             # Utilities
│   ├── hooks/           # Custom hooks
│   ├── stories/         # Storybook stories
│   └── index.ts         # Main entry point
├── dist/                # Built library
└── package.json
```

### Building the Library

```bash
# Build for production
pnpm build:lib

# Build Vite bundle
pnpm build

# Generate TypeScript types
pnpm build:types
```

### Running Development

```bash
# Start Storybook
pnpm storybook

# Run tests
pnpm test

# Lint
pnpm lint
```

## 🤝 Contributing

We welcome contributions! If you find a bug or have a feature request, please open an issue on [GitHub](https://github.com/movementlabsxyz/movement-design-system/issues).

For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](https://opensource.org/licenses/MIT) © Movement Labs

## 🙏 Credits

Built with:
- [shadcn/ui](https://ui.shadcn.com/) - Component architecture
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling framework
- [Vite](https://vitejs.dev/) - Build tool
- [Storybook](https://storybook.js.org/) - Documentation
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 🔗 Links

- [Documentation](https://movement-design-system-docs-git-shadcn-movement-labs.vercel.app/)
- [GitHub Repository](https://github.com/movementlabsxyz/movement-design-system)
- [npm Package](https://www.npmjs.com/package/@movementlabsxyz/movement-design-system)
- [Issue Tracker](https://github.com/movementlabsxyz/movement-design-system/issues)

---

Made with ❤️ by [Movement Labs](https://movementlabs.xyz)
