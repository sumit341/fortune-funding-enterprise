import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 30,
    },

    mutations: {
      retry: 1,
    },
  },
});