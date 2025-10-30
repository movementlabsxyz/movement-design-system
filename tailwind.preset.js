import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          '--radius': '0.625rem',
          '--background': 'oklch(1 0 0)',
          '--foreground': 'oklch(0.145 0 0)',
          '--card': 'oklch(1 0 0)',
          '--card-foreground': 'oklch(0.145 0 0)',
          '--popover': 'oklch(1 0 0)',
          '--popover-foreground': 'oklch(0.145 0 0)',
          '--primary': 'oklch(0.205 0 0)',
          '--primary-foreground': 'oklch(0.985 0 0)',
          '--secondary': 'oklch(0.97 0 0)',
          '--secondary-foreground': 'oklch(0.205 0 0)',
          '--muted': 'oklch(0.97 0 0)',
          '--muted-foreground': 'oklch(0.556 0 0)',
          '--accent': 'oklch(0.97 0 0)',
          '--accent-foreground': 'oklch(0.205 0 0)',
          '--destructive': 'oklch(0.577 0.245 27.325)',
          '--border': 'oklch(0.922 0 0)',
          '--input': 'oklch(0.922 0 0)',
          '--ring': 'oklch(0.708 0 0)',
          '--chart-1': 'oklch(0.646 0.222 41.116)',
          '--chart-2': 'oklch(0.6 0.118 184.704)',
          '--chart-3': 'oklch(0.398 0.07 227.392)',
          '--chart-4': 'oklch(0.828 0.189 84.429)',
          '--chart-5': 'oklch(0.769 0.188 70.08)',
          '--sidebar': 'oklch(0.985 0 0)',
          '--sidebar-foreground': 'oklch(0.145 0 0)',
          '--sidebar-primary': 'oklch(0.205 0 0)',
          '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
          '--sidebar-accent': 'oklch(0.97 0 0)',
          '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
          '--sidebar-border': 'oklch(0.922 0 0)',
          '--sidebar-ring': 'oklch(0.708 0 0)',
        },
        '.dark': {
          '--background': 'oklch(0.145 0 0)',
          '--foreground': 'oklch(0.985 0 0)',
          '--card': 'oklch(0.205 0 0)',
          '--card-foreground': 'oklch(0.985 0 0)',
          '--popover': 'oklch(0.205 0 0)',
          '--popover-foreground': 'oklch(0.985 0 0)',
          '--primary': 'oklch(0.922 0 0)',
          '--primary-foreground': 'oklch(0.205 0 0)',
          '--secondary': 'oklch(0.269 0 0)',
          '--secondary-foreground': 'oklch(0.985 0 0)',
          '--muted': 'oklch(0.269 0 0)',
          '--muted-foreground': 'oklch(0.708 0 0)',
          '--accent': 'oklch(0.269 0 0)',
          '--accent-foreground': 'oklch(0.985 0 0)',
          '--destructive': 'oklch(0.704 0.191 22.216)',
          '--border': 'oklch(1 0 0 / 10%)',
          '--input': 'oklch(1 0 0 / 15%)',
          '--ring': 'oklch(0.556 0 0)',
          '--chart-1': 'oklch(0.488 0.243 264.376)',
          '--chart-2': 'oklch(0.696 0.17 162.48)',
          '--chart-3': 'oklch(0.769 0.188 70.08)',
          '--chart-4': 'oklch(0.627 0.265 303.9)',
          '--chart-5': 'oklch(0.645 0.246 16.439)',
          '--sidebar': 'oklch(0.205 0 0)',
          '--sidebar-foreground': 'oklch(0.985 0 0)',
          '--sidebar-primary': 'oklch(0.488 0.243 264.376)',
          '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
          '--sidebar-accent': 'oklch(0.269 0 0)',
          '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
          '--sidebar-border': 'oklch(1 0 0 / 10%)',
          '--sidebar-ring': 'oklch(0.556 0 0)',
        },
        '*': {
          'border-color': 'hsl(var(--border))',
          'outline-color': 'hsl(var(--ring) / 50%)',
        },
        'body': {
          'background-color': 'hsl(var(--background))',
          'color': 'hsl(var(--foreground))',
        },
      })
    }),
  ],
}

