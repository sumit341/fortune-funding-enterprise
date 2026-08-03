import type { SidebarNavigationGroup } from "../../../navigation/types";

import { SidebarItem } from "./SidebarItem";

interface Props {
  group: SidebarNavigationGroup;
}

export function SidebarGroup({ group }: Props) {
  return (
    <div className="ff-sidebar-group">

      <div className="ff-sidebar-group-title">
        {group.title}
      </div>

      <div className="ff-sidebar-group-items">

        {group.items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}