import { NavLink } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Challenges",
    path: "/challenges",
  },
  {
    name: "Orders",
    path: "/orders",
  },
  {
    name: "Payments",
    path: "/payments",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-white border-r border-zinc-800">
      <div className="p-6 text-2xl font-bold">
        Fortune Funding
      </div>

      <nav className="flex flex-col gap-2 px-4">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-zinc-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}