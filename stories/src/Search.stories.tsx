import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "@andore-ui/search";

const variantControl = {
  control: "radio" as const,
  options: ["filled", "outlined"],
};

const sizeControl = {
    control: "radio" as const,
    options: ["sm", "md", "lg"],
};

const meta: Meta<typeof Search> = {
  component: Search,
};
export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: ({ variant, size }) => (
    <>
      <Search placeholder="Search" variant={variant} size={size} />
    </>
  ),
  args: {
    variant: "filled",
    size: "md",
  },
  argTypes: {
    variant: variantControl,
    size: sizeControl,
  },
};
