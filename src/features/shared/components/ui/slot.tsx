import { Slot as RadixSlot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface SlotProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Slot = forwardRef<HTMLDivElement, SlotProps>((props, ref) => {
  const { asChild, ...rest } = props;
  const Comp = asChild ? RadixSlot : "div";
  return <Comp ref={ref} {...rest} />;
});

Slot.displayName = "Slot";

export { Slot };
