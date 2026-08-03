import type { ReactNode } from "react";

import { SidebarProvider } from "../../../context/SidebarContext";

import { AppSidebar } from "./components/AppSidebar";
import { AppHeader } from "./components/AppHeader";
import { AppContent } from "./components/AppContent";

import "./styles/app-shell.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({
  children,
}: AppShellProps) {
  return (
    <SidebarProvider>
      <div className="ff-app-shell">

        <aside className="ff-sidebar">
          <AppSidebar />
        </aside>

        <main className="ff-main">

          <header className="ff-header">
            <AppHeader />
          </header>

          <section className="ff-content">
            <AppContent>
              {children}
            </AppContent>
          </section>

        </main>

      </div>
    </SidebarProvider>
  );
}