import Accordion, { AccordionVariant } from "@/Accordion";
import AccordionItem from "@/AccordionItem";
import type { Meta, StoryObj } from "@storybook/react";
import AccordionHeader from "@/AccordionHeader";
import AccordionContent from "@/AccordionContent";

const variantControl = {
  options: ["standard", "divided"] as AccordionVariant[],
  control: { type: "select" as const },
};

const condensedControl = {
  control: { type: "boolean" as const },
};

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Accordion type={"single"} collapsible defaultValue={'1'}>
        <AccordionItem value={"1"}>
          <AccordionHeader>Header 1</AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"2"}>
          <AccordionHeader>Header 2</AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. 2
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"3"}>
          <AccordionHeader>Header 3</AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. 3
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Variant: Story = {
  render: ({ variant }) => (
    <div style={{ width: "400px" }}>
      <Accordion type={"single"} collapsible variant={variant}>
        <AccordionItem value={"1"}>
          <AccordionHeader>
            <h2>Header 1</h2>
          </AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. 1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"2"}>
          <AccordionHeader>Header 2</AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. 2
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"3"}>
          <AccordionHeader>Header 3</AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. 3
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  args: {
    variant: "standard",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Condensed: Story = {
  render: ({ condensed, variant }) => (
    <div style={{ width: "400px" }}>
      <Accordion
        type={"single"}
        collapsible
        condensed={condensed}
        variant={variant}
      >
        <AccordionItem value={"1"}>
          <AccordionHeader>Header 1</AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"2"}>
          <AccordionHeader>Header 2</AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"3"}>
          <AccordionHeader>Header 3</AccordionHeader>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  args: {
    condensed: true,
  },
  argTypes: {
    variant: variantControl,
    condensed: condensedControl,
  },
};

export const CustomIcon: Story = {
  render: () => {
    const customIcon =
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/>
        </svg>
    return (
        <div style={{width: "400px"}}>
          <Accordion type={"single"} collapsible>
            <AccordionItem value={"1"} >
              <AccordionHeader expandIcon={customIcon}>
                Header 1
              </AccordionHeader>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={"2"}>
              <AccordionHeader expandIcon={customIcon}>
                Header 2
              </AccordionHeader>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={"3"}>
              <AccordionHeader expandIcon={customIcon}>
                Header 3
              </AccordionHeader>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    )
  }
};
