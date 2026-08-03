import { ChevronDown, UserCircle2 } from "lucide-react";

export function UserMenu() {
  return (
    <button className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 transition hover:bg-zinc-800">
      <UserCircle2 size={28} />

      <div className="text-left">
        <p className="text-sm font-semibold text-white">
          Trader
        </p>

        <p className="text-xs text-zinc-400">
          Professional
        </p>
      </div>

      <ChevronDown size={16} />
    </button>
  );
}