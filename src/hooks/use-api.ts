import { useQuery } from "react-query";

interface useApiType {
  url: string;
  options?: RequestInit;

  requestId: string;

  page: number;
}

export function usePaginateApi<ResponseType = unknown>({
  url,
  options = {},
  requestId,
  page,
}: useApiType) {
  return useQuery<unknown, unknown, ResponseType>(
    [requestId, page],
    async () => {
      return await (
        await fetch(`${url}?page=${page}&query=laptops&per_page=18`, options)
      ).json();
    },
    {
      refetchOnWindowFocus: false, // we don't need to fetch data on refocus
    }
  );
}
