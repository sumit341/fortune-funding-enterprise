import { useQuery } from "@tanstack/react-query";

import { settingsService } from "../../services/settings.service";

export function useSettings() {
  return useQuery({
    queryKey: ["settings"],

    queryFn:
      settingsService.getSettings,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}