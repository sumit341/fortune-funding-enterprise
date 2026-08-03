import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-xl",
    "font-medium",
    "transition-all",
    "duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-md",

        secondary:
          "bg-zinc-800 text-white hover:bg-zinc-700",

        outline:
          "border border-zinc-700 bg-transparent hover:bg-zinc-900 text-white",

        ghost:
          "hover:bg-zinc-900 text-zinc-100",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-9 px-4 text-sm",

        md: "h-10 px-5 text-sm",

        lg: "h-12 px-6 text-base",

        xl: "h-14 px-8 text-lg",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",

      fullWidth: false,
    },
  }
);