import { cn } from "@/lib/utils";
import React from "react";

interface HorizontalSpacingProps {
  className?: string;
  children: React.ReactNode;
}

const HorizontalSpacing: React.FC<HorizontalSpacingProps> = ({ className, children }) => {
  return <div className={cn("px-4 max-w-7xl mx-auto", className)}>{children}</div>;
};

export default HorizontalSpacing;
