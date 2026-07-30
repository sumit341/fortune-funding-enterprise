import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-zinc-800 hover:bg-zinc-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-3 text-base",

    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      {...props}
      className={`
        rounded-lg
        font-semibold
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}