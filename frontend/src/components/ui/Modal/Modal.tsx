import { ReactNode } from "react";

interface Props {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({
  open,
  title,
  children,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-lg rounded-xl bg-zinc-900 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}