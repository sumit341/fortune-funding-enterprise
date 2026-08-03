import type { LucideIcon } from "lucide-react";

export interface SidebarNavigationItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  disabled?: boolean;
}

export interface SidebarNavigationGroup {
  id: string;
  title: string;
  items: SidebarNavigationItem[];
}