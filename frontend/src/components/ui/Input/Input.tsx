import { InputHTMLAttributes } from "react";

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: Props) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm text-zinc-400">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          rounded-lg
          border
          border-zinc-700
          bg-zinc-950
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-blue-500
          ${className}
        `}
      />
    </div>
  );
}