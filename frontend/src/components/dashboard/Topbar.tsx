import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../store/auth.store";

export default function Topbar() {
  const navigate = useNavigate();

  const user = useAuthStore(
    (state) => state.user
  );

  const logout = useAuthStore(
    (state) => state.logout
  );

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-sm text-zinc-400">
          Welcome back,
          {" "}
          {user?.name ?? "Trader"}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="text-right">
          <p className="text-white font-medium">
            {user?.name}
          </p>

          <p className="text-sm text-zinc-400">
            {user?.role}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}