import { useQuery } from "@tanstack/react-query";

import { journalService } from "../../services/journal.service";

export function useJournal() {
  return useQuery({
    queryKey: ["journal"],

    queryFn:
      journalService.getJournal,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}