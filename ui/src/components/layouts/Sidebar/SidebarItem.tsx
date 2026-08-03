import { NavLink } from "react-router-dom";

import type { SidebarNavigationItem } from "../../../navigation/types";

interface Props {
  item: SidebarNavigationItem;
}

export function SidebarItem({
  item,
}: Props) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `ff-sidebar-item ${isActive ? "active" : ""}`
      }
    >
      <span className="ff-sidebar-item-icon">
        <Icon size={18} />
      </span>

      <span className="ff-sidebar-item-label">
        {item.label}
      </span>

      {item.badge && (
        <span className="ff-sidebar-item-badge">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
}