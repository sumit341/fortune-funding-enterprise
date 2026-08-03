import { Building2 } from "lucide-react";

export function SidebarLogo() {
  return (
    <div className="flex items-center gap-3 border-b border-zinc-800 px-6 py-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
        <Building2 size={22} />
      </div>

      <div>
        <h2 className="text-sm font-bold tracking-wide text-white">
          Fortune Funding
        </h2>

        <p className="text-xs text-zinc-400">
          Professional Trader
        </p>
      </div>
    </div>
  );
}