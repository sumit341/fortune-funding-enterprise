import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaClipboardList,
  FaCreditCard,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaAward,
  FaWallet,
  FaTrophy,
} from "react-icons/fa";

import { useAuthStore } from "../../store/auth/auth.store";

const menus = [
  {
    title: "Dashboard",
    icon: FaHome,
    path: "/dashboard",
  },
  {
    title: "Challenges",
    icon: FaChartLine,
    path: "/challenges",
  },
  {
    title: "Orders",
    icon: FaClipboardList,
    path: "/orders",
  },
  {
    title: "Wallet",
    icon: FaWallet,
    path: "/wallet",
  },
  {
    title: "Payments",
    icon: FaCreditCard,
    path: "/payments",
  },
  {
    title: "Certificates",
    icon: FaAward,
    path: "/certificates",
  },
  {
    title: "Leaderboard",
    icon: FaTrophy,
    path: "/leaderboard",
  },
  {
    title: "Profile",
    icon: FaUser,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: FaCog,
    path: "/settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const user = useAuthStore(
    (state) => state.user
  );

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-[#09090B]">

      <div className="border-b border-zinc-800 p-7">

        <h1 className="text-3xl font-black tracking-wide text-white">
          Fortune
        </h1>

        <p className="text-sm text-zinc-500">
          Funding Enterprise
        </p>

      </div>

      <div className="border-b border-zinc-800 px-6 py-5">

        <div className="font-semibold text-white">
          {user?.name ?? "Trader"}
        </div>

        <div className="text-sm text-zinc-500">
          {user?.email}
        </div>

      </div>

      <nav className="flex-1 overflow-y-auto p-5">

        <div className="space-y-2">

          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-xl px-5 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`
                }
              >
                <Icon className="text-lg" />

                <span className="font-medium">
                  {item.title}
                </span>
              </NavLink>
            );
          })}

        </div>

      </nav>

      <div className="border-t border-zinc-800 p-5">

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <FaSignOutAlt />

          Logout
        </button>

      </div>

    </aside>
  );
}
