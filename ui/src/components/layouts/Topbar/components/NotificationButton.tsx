import { Bell } from "lucide-react";

export function NotificationButton() {
  return (
    <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition hover:bg-zinc-800">
      <Bell size={18} />

      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
    </button>
  );
}