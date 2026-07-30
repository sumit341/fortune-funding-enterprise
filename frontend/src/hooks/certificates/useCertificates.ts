import { useQuery } from "@tanstack/react-query";

import { certificateService } from "../../services/certificate.service";

export function useCertificates() {
  return useQuery({
    queryKey: ["certificates"],

    queryFn:
      certificateService.getCertificates,

    staleTime:
      1000 * 60 * 5,

    retry: 1,
  });
}