import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Title,
  Subtitle,
  Description,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

const meta: Meta = {
  title: "Theme/Colors",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};
export default meta;

type Story = StoryObj;

interface ColorSwatchProps {
  name: string;
  colorClass: string;
  hexValue: string;
}

const ColorSwatch = ({ name, colorClass, hexValue }: ColorSwatchProps) => (
  <div className="flex gap-4 items-center">
    <div className={`h-12 w-12 rounded-md flex-shrink-0 ${colorClass}`} />
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-gray-500">{hexValue}</p>
    </div>
  </div>
);

/** Primary brand colors that the theme is built on. */
export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-12 px-3 py-6">
      {/* Basic Colors */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Basic</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="white"
            colorClass="bg-white border border-gray-200"
            hexValue="#ffffff"
          />
          <ColorSwatch name="black" colorClass="bg-black" hexValue="#000000" />
          <ColorSwatch
            name="transparent"
            colorClass="bg-transparent border border-gray-200"
            hexValue="transparent"
          />
        </div>
      </div>

      {/* Moveus Marigold */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Moveus Marigold</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="moveus-marigold-50"
            colorClass="bg-moveus-marigold-50"
            hexValue="#fffbeb"
          />
          <ColorSwatch
            name="moveus-marigold-100"
            colorClass="bg-moveus-marigold-100"
            hexValue="#fff2bd"
          />
          <ColorSwatch
            name="moveus-marigold-200"
            colorClass="bg-moveus-marigold-200"
            hexValue="#ffea90"
          />
          <ColorSwatch
            name="moveus-marigold-300"
            colorClass="bg-moveus-marigold-300"
            hexValue="#ffe162"
          />
          <ColorSwatch
            name="moveus-marigold-400"
            colorClass="bg-moveus-marigold-400"
            hexValue="#ffd935"
          />
          <ColorSwatch
            name="moveus-marigold-500"
            colorClass="bg-moveus-marigold-500"
            hexValue="#ddba22"
          />
          <ColorSwatch
            name="moveus-marigold-600"
            colorClass="bg-moveus-marigold-600"
            hexValue="#bb9b13"
          />
          <ColorSwatch
            name="moveus-marigold-700"
            colorClass="bg-moveus-marigold-700"
            hexValue="#997e08"
          />
          <ColorSwatch
            name="moveus-marigold-800"
            colorClass="bg-moveus-marigold-800"
            hexValue="#776100"
          />
          <ColorSwatch
            name="moveus-marigold-900"
            colorClass="bg-moveus-marigold-900"
            hexValue="#554500"
          />
        </div>
      </div>

      {/* Guild Green */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Guild Green</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="guild-green-50"
            colorClass="bg-guild-green-50"
            hexValue="#f2fff8"
          />
          <ColorSwatch
            name="guild-green-100"
            colorClass="bg-guild-green-100"
            hexValue="#ccffe3"
          />
          <ColorSwatch
            name="guild-green-200"
            colorClass="bg-guild-green-200"
            hexValue="#a7ffce"
          />
          <ColorSwatch
            name="guild-green-300"
            colorClass="bg-guild-green-300"
            hexValue="#81ffba"
          />
          <ColorSwatch
            name="guild-green-400"
            colorClass="bg-guild-green-400"
            hexValue="#6ce2a1"
          />
          <ColorSwatch
            name="guild-green-500"
            colorClass="bg-guild-green-500"
            hexValue="#58c589"
          />
          <ColorSwatch
            name="guild-green-600"
            colorClass="bg-guild-green-600"
            hexValue="#47a872"
          />
          <ColorSwatch
            name="guild-green-700"
            colorClass="bg-guild-green-700"
            hexValue="#368a5c"
          />
          <ColorSwatch
            name="guild-green-800"
            colorClass="bg-guild-green-800"
            hexValue="#286d47"
          />
          <ColorSwatch
            name="guild-green-900"
            colorClass="bg-guild-green-900"
            hexValue="#1b5033"
          />
        </div>
      </div>

      {/* Byzantine Blue */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Byzantine Blue</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="byzantine-blue-50"
            colorClass="bg-byzantine-blue-50"
            hexValue="#c2ceff"
          />
          <ColorSwatch
            name="byzantine-blue-100"
            colorClass="bg-byzantine-blue-100"
            hexValue="#859dff"
          />
          <ColorSwatch
            name="byzantine-blue-200"
            colorClass="bg-byzantine-blue-200"
            hexValue="#5c7cff"
          />
          <ColorSwatch
            name="byzantine-blue-300"
            colorClass="bg-byzantine-blue-300"
            hexValue="#335cff"
          />
          <ColorSwatch
            name="byzantine-blue-400"
            colorClass="bg-byzantine-blue-400"
            hexValue="#0337ff"
          />
          <ColorSwatch
            name="byzantine-blue-500"
            colorClass="bg-byzantine-blue-500"
            hexValue="#002cd6"
          />
          <ColorSwatch
            name="byzantine-blue-600"
            colorClass="bg-byzantine-blue-600"
            hexValue="#0024ad"
          />
          <ColorSwatch
            name="byzantine-blue-700"
            colorClass="bg-byzantine-blue-700"
            hexValue="#001b85"
          />
          <ColorSwatch
            name="byzantine-blue-800"
            colorClass="bg-byzantine-blue-800"
            hexValue="#00135c"
          />
          <ColorSwatch
            name="byzantine-blue-900"
            colorClass="bg-byzantine-blue-900"
            hexValue="#000c3d"
          />
        </div>
      </div>

      {/* Protocol Pink */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Protocol Pink</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="protocol-pink-50"
            colorClass="bg-protocol-pink-50"
            hexValue="#fff1fc"
          />
          <ColorSwatch
            name="protocol-pink-100"
            colorClass="bg-protocol-pink-100"
            hexValue="#ffc9f3"
          />
          <ColorSwatch
            name="protocol-pink-200"
            colorClass="bg-protocol-pink-200"
            hexValue="#ffa0eb"
          />
          <ColorSwatch
            name="protocol-pink-300"
            colorClass="bg-protocol-pink-300"
            hexValue="#ff77e2"
          />
          <ColorSwatch
            name="protocol-pink-400"
            colorClass="bg-protocol-pink-400"
            hexValue="#eb66cf"
          />
          <ColorSwatch
            name="protocol-pink-500"
            colorClass="bg-protocol-pink-500"
            hexValue="#ce52b4"
          />
          <ColorSwatch
            name="protocol-pink-600"
            colorClass="bg-protocol-pink-600"
            hexValue="#b14199"
          />
          <ColorSwatch
            name="protocol-pink-700"
            colorClass="bg-protocol-pink-700"
            hexValue="#94317f"
          />
          <ColorSwatch
            name="protocol-pink-800"
            colorClass="bg-protocol-pink-800"
            hexValue="#762365"
          />
          <ColorSwatch
            name="protocol-pink-900"
            colorClass="bg-protocol-pink-900"
            hexValue="#59184b"
          />
        </div>
      </div>

      {/* Oracle Orange */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Oracle Orange</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="oracle-orange-50"
            colorClass="bg-oracle-orange-50"
            hexValue="#ffefec"
          />
          <ColorSwatch
            name="oracle-orange-100"
            colorClass="bg-oracle-orange-100"
            hexValue="#ffcdc2"
          />
          <ColorSwatch
            name="oracle-orange-200"
            colorClass="bg-oracle-orange-200"
            hexValue="#ffab97"
          />
          <ColorSwatch
            name="oracle-orange-300"
            colorClass="bg-oracle-orange-300"
            hexValue="#ff886d"
          />
          <ColorSwatch
            name="oracle-orange-400"
            colorClass="bg-oracle-orange-400"
            hexValue="#FF6642"
          />
          <ColorSwatch
            name="oracle-orange-500"
            colorClass="bg-oracle-orange-500"
            hexValue="#ea5330"
          />
          <ColorSwatch
            name="oracle-orange-600"
            colorClass="bg-oracle-orange-600"
            hexValue="#c83e1e"
          />
          <ColorSwatch
            name="oracle-orange-700"
            colorClass="bg-oracle-orange-700"
            hexValue="#a62c10"
          />
          <ColorSwatch
            name="oracle-orange-800"
            colorClass="bg-oracle-orange-800"
            hexValue="#841d05"
          />
          <ColorSwatch
            name="oracle-orange-900"
            colorClass="bg-oracle-orange-900"
            hexValue="#621300"
          />
        </div>
      </div>
    </div>
  ),
};

/**
 * Semantic colors are used for specific purposes in the UI like primary actions, destructive actions, etc.
 * These colors use CSS variables and support dark mode.
 */
export const SemanticColors: Story = {
  render: () => (
    <div className="flex flex-col gap-12 px-3 py-6">
      {/* Primary */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Primary</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="primary"
            colorClass="bg-primary"
            hexValue="hsl(var(--primary))"
          />
          <ColorSwatch
            name="primary-foreground"
            colorClass="bg-primary-foreground"
            hexValue="hsl(var(--primary-foreground))"
          />
        </div>
      </div>

      {/* Secondary */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Secondary</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="secondary"
            colorClass="bg-secondary"
            hexValue="hsl(var(--secondary))"
          />
          <ColorSwatch
            name="secondary-foreground"
            colorClass="bg-secondary-foreground"
            hexValue="hsl(var(--secondary-foreground))"
          />
        </div>
      </div>

      {/* Accent */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Accent</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="accent"
            colorClass="bg-accent"
            hexValue="hsl(var(--accent))"
          />
          <ColorSwatch
            name="accent-foreground"
            colorClass="bg-accent-foreground"
            hexValue="hsl(var(--accent-foreground))"
          />
        </div>
      </div>

      {/* Destructive */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Destructive</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="destructive"
            colorClass="bg-destructive"
            hexValue="hsl(var(--destructive))"
          />
          <ColorSwatch
            name="destructive-foreground"
            colorClass="bg-destructive-foreground"
            hexValue="hsl(var(--destructive-foreground))"
          />
        </div>
      </div>

      {/* Success */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Success</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="success"
            colorClass="bg-success"
            hexValue="hsl(var(--success))"
          />
          <ColorSwatch
            name="success-foreground"
            colorClass="bg-success-foreground"
            hexValue="hsl(var(--success-foreground))"
          />
        </div>
      </div>

      {/* Warning */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Warning</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="warning"
            colorClass="bg-warning"
            hexValue="hsl(var(--warning))"
          />
          <ColorSwatch
            name="warning-foreground"
            colorClass="bg-warning-foreground"
            hexValue="hsl(var(--warning-foreground))"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Info</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="info"
            colorClass="bg-info"
            hexValue="hsl(var(--info))"
          />
          <ColorSwatch
            name="info-foreground"
            colorClass="bg-info-foreground"
            hexValue="hsl(var(--info-foreground))"
          />
        </div>
      </div>

      {/* Muted */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">Muted</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="muted"
            colorClass="bg-muted"
            hexValue="hsl(var(--muted))"
          />
          <ColorSwatch
            name="muted-foreground"
            colorClass="bg-muted-foreground"
            hexValue="hsl(var(--muted-foreground))"
          />
        </div>
      </div>

      {/* UI Colors */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold uppercase">UI</h2>
        <div className="grid grid-cols-3 gap-6">
          <ColorSwatch
            name="background"
            colorClass="bg-background"
            hexValue="hsl(var(--background))"
          />
          <ColorSwatch
            name="foreground"
            colorClass="bg-foreground"
            hexValue="hsl(var(--foreground))"
          />
          <ColorSwatch
            name="card"
            colorClass="bg-card"
            hexValue="hsl(var(--card))"
          />
          <ColorSwatch
            name="card-foreground"
            colorClass="bg-card-foreground"
            hexValue="hsl(var(--card-foreground))"
          />
          <ColorSwatch
            name="popover"
            colorClass="bg-popover"
            hexValue="hsl(var(--popover))"
          />
          <ColorSwatch
            name="popover-foreground"
            colorClass="bg-popover-foreground"
            hexValue="hsl(var(--popover-foreground))"
          />
          <ColorSwatch
            name="border"
            colorClass="bg-border"
            hexValue="hsl(var(--border))"
          />
          <ColorSwatch
            name="input"
            colorClass="bg-input"
            hexValue="hsl(var(--input))"
          />
          <ColorSwatch
            name="ring"
            colorClass="bg-ring"
            hexValue="hsl(var(--ring))"
          />
        </div>
      </div>
    </div>
  ),
};
