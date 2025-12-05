import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../components/shadcn/dialog";
import { Button } from "../components/shadcn/button";
import { Input } from "../components/shadcn/input";
import { Label } from "../components/shadcn/label";

const meta = {
  title: "movement-design-system/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Simple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};

export const GlassVariant: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Glass Dialog</Button>
      </DialogTrigger>
      <DialogContent variant="glass">
        <DialogHeader>
          <DialogTitle>Glass Overlay Dialog</DialogTitle>
          <DialogDescription>
            This dialog uses the glass overlay gradient background with backdrop blur for a beautiful glassmorphic effect.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="glass-name" className="text-right">
              Name
            </Label>
            <Input id="glass-name" value="Movement Labs" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="glass-email" className="text-right">
              Email
            </Label>
            <Input id="glass-email" value="team@movementlabs.xyz" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const GlassSimple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Glass</Button>
      </DialogTrigger>
      <DialogContent variant="glass">
        <DialogHeader>
          <DialogTitle>Glassmorphic Design</DialogTitle>
          <DialogDescription>
            A simple dialog with glass overlay effect. Perfect for modern, sleek interfaces.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};
