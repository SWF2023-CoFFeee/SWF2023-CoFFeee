import { QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  },
});

export default queryClient;
