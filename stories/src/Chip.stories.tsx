import type { Meta, StoryObj } from "@storybook/react";
import { Chip, ChipVariant } from "@material-tailwind-ui/chip";

const variantControl = {
  options: ["elevated", "outlined"] as ChipVariant[],
  control: { type: "select" as const },
};

const colorControl = {
  options: ["primary", "secondary", "info", "success", "warning", "error"],
  control: { type: "select" as const },
};

const selectedControl = {
  control: { type: "boolean" as const },
};

const meta: Meta<typeof Chip> = {
  component: Chip,
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: () => <Chip>Click me</Chip>,
};

export const Variant: Story = {
  render: ({ variant }) => <Chip variant={variant}>Click me</Chip>,
  args: {
    variant: "outlined",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Color: Story = {
  render: ({ color, variant }) => (
    <Chip color={color} variant={variant}>
      Click me
    </Chip>
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
      <Chip variant={variant} startIcon="🚀">
        Click me
      </Chip>
      <Chip variant={variant} endIcon="🚀">
        Click me
      </Chip>
    </div>
  ),
  args: {
    variant: "elevated",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Selected: Story = {
  render: ({ variant, selected }) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Chip variant={variant} startIcon="🚀" selected={selected}>
        Click me
      </Chip>
      <Chip variant={variant} startIcon="🚀" selected={selected} selectedIconDisabled>
        Click me
      </Chip>
      <Chip variant={variant} endIcon="🚀" selected={selected}>
        Click me
      </Chip>
    </div>
  ),
  args: {
    variant: "elevated",
    selected: true,
  },
  argTypes: {
    variant: variantControl,
    selected: selectedControl,
  },
};

const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    {...props}
  >
    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
  </svg>
);

const ContactInfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    {...props}
  >
    <path d="M560-520h280v-200H560v200Zm140-50-100-70v-40l100 70 100-70v40l-100 70ZM80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM182-200h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z" />
  </svg>
);

export const Deletable: Story = {
  render: ({ variant }) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Chip variant={variant} startIcon={<ContactInfoIcon/>} onDelete={() => {}}>
        Click me
      </Chip>
      <Chip variant={variant} endIcon={<TrashIcon />} onDelete={() => {}}>
        Click me
      </Chip>
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
    <Chip variant={variant} disabled>
      Click me
    </Chip>
  ),
  args: {
    variant: "elevated",
  },
  argTypes: {
    variant: variantControl,
  },
};
