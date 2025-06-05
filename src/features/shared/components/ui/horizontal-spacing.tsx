import { cn } from "@/lib/utils";
import React from "react";

interface HorizontalSpacingProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const HorizontalSpacing: React.FC<HorizontalSpacingProps> = ({ className, children, id }) => {
  return (
    <div className={cn("px-4 max-w-7xl mx-auto", className)} id={id}>
      {children}
    </div>
  );
};

export default HorizontalSpacing;
