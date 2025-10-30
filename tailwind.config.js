import shadcnPreset from './tailwind.preset.js'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [shadcnPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}

