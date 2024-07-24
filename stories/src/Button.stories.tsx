import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonVariant } from "@/Button";

const variantControl = {
  options: ["elevated", "filled", "outlined", "text"] as ButtonVariant[],
  control: { type: "select" as const },
};

const colorControl = {
  options: ["primary", "secondary", "info", "success", "warning", "error"],
  control: { type: "select" as const },
};

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button>Click me</Button>,
};

export const Variant: Story = {
  render: ({ variant }) => <Button variant={variant}>Click me</Button>,
  args: {
    variant: "elevated",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Color: Story = {
  render: ({ color, variant }) => (
    <Button color={color} variant={variant}>
      Click me
    </Button>
  ),
  args: {
    color: "primary",
    variant: "elevated",
  },
  argTypes: {
    color: colorControl,
    variant: variantControl,
  },
};

export const Icon: Story = {
  render: ({ variant }) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant={variant} startIcon="🚀">
        Click me
      </Button>
      <Button variant={variant} endIcon="🚀">
        Click me
      </Button>
    </div>
  ),
  args: {
    variant: "elevated",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Disabled: Story = {
  render: ({ variant }) => (
    <Button variant={variant} disabled>
      Click me
    </Button>
  ),
  args: {
    variant: "elevated",
  },
  argTypes: {
    variant: variantControl,
  },
};
