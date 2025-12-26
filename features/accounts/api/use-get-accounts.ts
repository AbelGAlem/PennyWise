import { client } from "@/lib/hono-client";
import { useQuery } from "@tanstack/react-query";

export function useGetAccounts() {
  const query = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const response = await client.api.accounts.$get()

      if(!response.ok){
        throw new Error("Error fetching accounts")
      }

      const {data} = await response.json();
      return data;
    }
  })
  return query;
}