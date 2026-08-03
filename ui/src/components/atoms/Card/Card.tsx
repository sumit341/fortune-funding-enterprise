import * as React from "react";

import { VariantProps } from "class-variance-authority";

import { cn } from "../../../utils/cn";

import { cardVariants } from "./cardVariants";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({
  className,
  variant,
  padding,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          padding,
        }),
        className
      )}
      {...props}
    />
  );
}