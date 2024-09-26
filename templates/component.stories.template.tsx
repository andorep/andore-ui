import type { Meta, StoryObj } from "@storybook/react";
import {$COMPONENTNAME} from "@andore-ui/$SNAKE-COMPONENT";

const meta: Meta<typeof $COMPONENTNAME> = {
  component: $COMPONENTNAME,
};
export default meta;

type Story = StoryObj<typeof $COMPONENTNAME>;

export const Default: Story = {
  render: () => (
    <>
      <$COMPONENTNAME>
       Story
      </$COMPONENTNAME>
    </>
  ),
};
