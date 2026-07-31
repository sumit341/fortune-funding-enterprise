import { useQuery } from "@tanstack/react-query";

import { faqService } from "../../services/faq.service";

export function useFaq() {
  return useQuery({
    queryKey: ["faq"],

    queryFn:
      faqService.getFaq,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}