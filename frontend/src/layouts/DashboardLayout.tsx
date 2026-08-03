import { Outlet } from "react-router-dom";

import {
  AppShell,
  Sidebar,
  SidebarGroup,
  SidebarItem,
  Topbar,
  PageContainer,
} from "@fortune-funding/ui";

export default function DashboardLayout() {
  return (
    <AppShell
      sidebar={
        <Sidebar>
          <SidebarGroup title="Main">
            <SidebarItem label="Dashboard" to="/dashboard" />
            <SidebarItem label="Challenges" to="/challenges" />
          </SidebarGroup>

          <SidebarGroup title="Trading">
            <SidebarItem label="Accounts" to="/accounts" />
            <SidebarItem label="Verification" to="/verification" />
            <SidebarItem label="Payouts" to="/payouts" />
          </SidebarGroup>

          <SidebarGroup title="Business">
            <SidebarItem label="Affiliate" to="/affiliate" />
            <SidebarItem label="Statistics" to="/statistics" />
            <SidebarItem label="Resources" to="/resources" />
            <SidebarItem label="Support" to="/support" />
          </SidebarGroup>
        </Sidebar>
      }
      header={<Topbar />}
    >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </AppShell>
  );
}