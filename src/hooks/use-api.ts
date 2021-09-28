import { useQuery } from "react-query";

interface useApiType {
  url: string;
  options?: RequestInit;

  requestId: string;
}

export function useApi<ResponseType = unknown>({
  url,
  options = {},
  requestId,
}: useApiType) {
  return useQuery<unknown, unknown, ResponseType>(requestId, async () => {
    return await (await fetch(url, options)).json();
  });
}
