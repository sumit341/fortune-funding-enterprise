export const FEATURE_FLAGS = {
  payments: true,
  notifications: true,
  leaderboard: true,
  affiliateSystem: false,
  maintenanceMode: false,
} as const;

export type FeatureFlag =
  keyof typeof FEATURE_FLAGS;

export function isFeatureEnabled(
  flag: FeatureFlag
): boolean {
  return FEATURE_FLAGS[flag];
}