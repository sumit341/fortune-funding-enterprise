import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
}