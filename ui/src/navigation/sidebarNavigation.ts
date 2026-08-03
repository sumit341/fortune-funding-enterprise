import {
  LayoutDashboard,
  Trophy,
  Wallet,
  ShieldCheck,
  FileBadge,
  BarChart3,
  Users,
  GraduationCap,
  LifeBuoy,
  Settings,
} from "lucide-react";

import type {
  SidebarNavigationGroup,
} from "./types";

export const sidebarNavigation: SidebarNavigationGroup[] = [
  {
    id: "trading",

    title: "Trading",

    items: [
      {
        id: "dashboard",

        label: "Dashboard",

        href: "/dashboard",

        icon: LayoutDashboard,
      },

      {
        id: "challenges",

        label: "Challenges",

        href: "/challenges",

        icon: Trophy,
      },

      {
        id: "accounts",

        label: "Accounts",

        href: "/accounts",

        icon: Wallet,
      },
    ],
  },

  {
    id: "verification",

    title: "Verification",

    items: [
      {
        id: "kyc",

        label: "KYC",

        href: "/kyc",

        icon: ShieldCheck,
      },

      {
        id: "certificates",

        label: "Certificates",

        href: "/certificates",

        icon: FileBadge,
      },
    ],
  },

  {
    id: "analytics",

    title: "Analytics",

    items: [
      {
        id: "statistics",

        label: "Statistics",

        href: "/statistics",

        icon: BarChart3,
      },
    ],
  },

  {
    id: "community",

    title: "Community",

    items: [
      {
        id: "affiliate",

        label: "Affiliate",

        href: "/affiliate",

        icon: Users,
      },

      {
        id: "resources",

        label: "Resources",

        href: "/resources",

        icon: GraduationCap,
      },

      {
        id: "support",

        label: "Support",

        href: "/support",

        icon: LifeBuoy,
      },
    ],
  },

  {
    id: "system",

    title: "System",

    items: [
      {
        id: "settings",

        label: "Settings",

        href: "/settings",

        icon: Settings,
      },
    ],
  },
];