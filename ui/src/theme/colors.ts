export const colors = {
  background: "#09090B",
  surface: "#18181B",
  surfaceElevated: "#27272A",

  border: "#3F3F46",

  primary: "#2563EB",
  primaryHover: "#1D4ED8",

  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",

  text: "#FAFAFA",
  textSecondary: "#A1A1AA",
  textMuted: "#71717A",
} as const;

export type ColorToken = keyof typeof colors;