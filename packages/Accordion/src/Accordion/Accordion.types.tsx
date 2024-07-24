import type {
  AccordionSingleProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";

export type AccordionVariant = "standard" | "divided";

export type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & {
  variant?: AccordionVariant;
  condensed?: boolean;
};

export interface AccordionContextValue {
  variant: AccordionVariant;
  condensed: boolean;
}
