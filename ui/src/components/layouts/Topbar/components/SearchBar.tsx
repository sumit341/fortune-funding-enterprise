import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-80">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
        size={18}
      />

      <input
        type="text"
        placeholder="Search..."
        className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm text-white outline-none transition focus:border-blue-600"
      />
    </div>
  );
}