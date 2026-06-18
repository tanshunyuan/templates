import { axiosInstance } from "@/lib/axios"
import { queryOptions, useQuery } from "@tanstack/react-query"

export const providerKeys = {
  helloWorld: ['hello-world'] as const,
}

export const useGetHelloWorldQuery = () => {
  const qo = queryOptions({
    queryKey: providerKeys.helloWorld,
    queryFn: async () => {
      const rawResults = await axiosInstance.get('/')
      return rawResults.data
    }
  })
  const query = useQuery(qo)
  return {
    getHelloWorldQuery: query,
    getHelloWorldQueryOptions: qo
  }
}
