import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  title: "Components/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
      description: "Button variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Whether button is disabled",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether button takes full width",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
  render: (args) => ({
    props: args,
    template: `<mira-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" (onClick)="onClick($event)">Primary Button</mira-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
  },
  render: (args) => ({
    props: args,
    template: `<mira-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" (onClick)="onClick($event)">Secondary Button</mira-button>`,
  }),
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "md",
  },
  render: (args) => ({
    props: args,
    template: `<mira-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" (onClick)="onClick($event)">Success Button</mira-button>`,
  }),
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
  },
  render: (args) => ({
    props: args,
    template: `<mira-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" (onClick)="onClick($event)">Danger Button</mira-button>`,
  }),
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
  },
  render: (args) => ({
    props: args,
    template: `<mira-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" (onClick)="onClick($event)">Small Button</mira-button>`,
  }),
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
  render: (args) => ({
    props: args,
    template: `<mira-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" (onClick)="onClick($event)">Large Button</mira-button>`,
  }),
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<mira-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" (onClick)="onClick($event)">Disabled Button</mira-button>`,
  }),
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    size: "md",
    fullWidth: true,
  },
  render: (args) => ({
    props: args,
    template: `<mira-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth" (onClick)="onClick($event)">Full Width Button</mira-button>`,
  }),
};
