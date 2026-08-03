import { sidebarNavigation } from "../../../navigation/sidebarNavigation";

import { SidebarLogo } from "./components/SidebarLogo";
import { SidebarNav } from "./components/SidebarNav";
import { SidebarFooter } from "./components/SidebarFooter";

import "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className="ff-sidebar">

      <SidebarLogo />

      <SidebarNav groups={sidebarNavigation} />

      <SidebarFooter />

    </aside>
  );
}