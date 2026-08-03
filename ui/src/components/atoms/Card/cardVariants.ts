import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-2xl",
    "border",
    "transition-all",
    "duration-300",
    "backdrop-blur-sm",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 border-zinc-800",

        elevated:
          "bg-zinc-900 border-zinc-800 shadow-xl",

        outline:
          "bg-transparent border-zinc-700",

        glass:
          "bg-white/5 border-white/10 backdrop-blur-xl",
      },

      padding: {
        none: "",

        sm: "p-4",

        md: "p-6",

        lg: "p-8",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);