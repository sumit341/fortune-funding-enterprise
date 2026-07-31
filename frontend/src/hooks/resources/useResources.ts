import { useQuery } from "@tanstack/react-query";
import { resourcesService } from "../../services/resources.service";

export function useResources() {
  return useQuery({
    queryKey: ["resources"],
    queryFn: resourcesService.getResources,
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
}