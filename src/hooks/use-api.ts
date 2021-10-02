import { useInfiniteQuery } from "react-query";

interface useApiType {
  url: string;
  options?: RequestInit;

  requestId: string;
}

export function usePaginateApi<ResponseType = unknown>({
  url,
  options = {},
  requestId,
}: useApiType) {
  return useInfiniteQuery<unknown, unknown, ResponseType>(
    requestId,
    async ({ pageParam = 1 }) => {
      return await (
        await fetch(
          `${url}?page=${pageParam}&query=mobile&per_page=18`,
          options
        )
      ).json();
    },
    {
      refetchOnWindowFocus: false, // we don't need to fetch data on refocus
    }
  );
}
