import { Moon } from "lucide-react";

export function ThemeSwitcher() {
  return (
    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition hover:bg-zinc-800">
      <Moon size={18} />
    </button>
  );
}