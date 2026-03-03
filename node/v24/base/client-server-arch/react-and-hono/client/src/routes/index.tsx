import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { axiosInstance } from "../lib/axios";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const query = useQuery({
    queryKey: ["demo"],
    queryFn: async () => {
      const response = await axiosInstance.get<{ message: string }>("/");
      console.log(response);
      return response;
    },
  });
  if (query.isLoading) return <p>loading...</p>;
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <p>data from server: {query.data?.data.message}</p>
    </div>
  );
}
