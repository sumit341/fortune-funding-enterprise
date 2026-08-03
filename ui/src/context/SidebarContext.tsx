import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface SidebarContextValue {
  collapsed: boolean;
  mobileOpen: boolean;

  toggleSidebar(): void;

  openMobile(): void;

  closeMobile(): void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const value = useMemo(
    () => ({
      collapsed,

      mobileOpen,

      toggleSidebar() {
        setCollapsed((x) => !x);
      },

      openMobile() {
        setMobileOpen(true);
      },

      closeMobile() {
        setMobileOpen(false);
      },
    }),
    [collapsed, mobileOpen]
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const ctx = useContext(SidebarContext);

  if (!ctx) {
    throw new Error(
      "useSidebarContext must be used inside SidebarProvider."
    );
  }

  return ctx;
}