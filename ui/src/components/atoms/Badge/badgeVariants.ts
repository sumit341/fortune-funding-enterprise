import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "rounded-full",
    "px-3",
    "py-1",
    "text-xs",
    "font-semibold",
  ].join(" "),
  {
    variants: {
      variant: {
        success:
          "bg-green-500/20 text-green-400",

        warning:
          "bg-yellow-500/20 text-yellow-400",

        danger:
          "bg-red-500/20 text-red-400",

        info:
          "bg-blue-500/20 text-blue-400",

        neutral:
          "bg-zinc-800 text-zinc-300",
      },
    },

    defaultVariants: {
      variant: "neutral",
    },
  }
);