import type { Meta, StoryObj } from "@storybook/react";
import {Slider} from "@material-tailwind-ui/slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <>
      <Slider>
       Story
      </Slider>
    </>
  ),
};
