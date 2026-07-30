import { useNavigate } from "react-router-dom";

import {
  FaBell,
  FaMoon,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuthStore } from "../../store/auth.store";

export default function Topbar() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-8 backdrop-blur">

      <div className="relative w-[420px]">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

        <input
          type="text"
          placeholder="Search challenges, orders..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-600"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="relative rounded-xl bg-zinc-900 p-3 transition hover:bg-zinc-800">

          <FaBell className="text-white" />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        <button className="rounded-xl bg-zinc-900 p-3 transition hover:bg-zinc-800">

          <FaMoon className="text-white" />

        </button>

        <div className="h-10 w-px bg-zinc-800" />

        <div className="text-right">

          <p className="font-semibold text-white">
            {user?.name ?? "Trader"}
          </p>

          <p className="text-sm text-zinc-500">
            {user?.role}
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">

          {(user?.name ?? "T").charAt(0).toUpperCase()}

        </div>

        <button
          onClick={handleLogout}
          className="rounded-xl bg-red-600 p-3 text-white transition hover:bg-red-700"
        >

          <FaSignOutAlt />

        </button>

      </div>

    </header>
  );
}