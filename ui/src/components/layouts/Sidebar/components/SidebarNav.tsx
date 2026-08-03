import type { SidebarGroup } from "../../../../navigation/types";

import { SidebarGroup as SidebarGroupComponent } from "../SidebarGroup";

interface Props {
  groups: SidebarGroup[];
}

export function SidebarNav({ groups }: Props) {
  return (
    <nav>
      {groups.map((group) => (
        <SidebarGroupComponent
          key={group.id}
          group={group}
        />
      ))}
    </nav>
  );
}