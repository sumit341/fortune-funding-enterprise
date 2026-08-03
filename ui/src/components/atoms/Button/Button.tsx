import * as React from "react";

import { VariantProps } from "class-variance-authority";

import { Loader2 } from "lucide-react";

import { buttonVariants } from "./buttonVariants";

import { cn } from "../../../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      fullWidth,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        {...props}
      >
        {loading && (
          <Loader2
            className="h-4 w-4 animate-spin"
          />
        )}

        {children}
      </button>
    );
  }
);

Button.displayName = "Button";