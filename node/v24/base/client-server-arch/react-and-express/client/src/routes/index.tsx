import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { axiosInstance } from "../lib/axios";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { env } from "../env";

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
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: `${env.VITE_SERVER_URL}/api/ui-stream`,
    }),
  });
  if (query.isLoading) return <p>loading...</p>;
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <p>data from server: {query.data?.data.message}</p>
      <button onClick={() => sendMessage({ text: "go" })}>Go</button>
      {messages.map((m) => (
        <div key={m.id}>
          {m.parts
            .filter((p) => p.type === "text")
            .map((p, i) => (
              <span key={i}>{p.text}</span>
            ))}
        </div>
      ))}
    </div>
  );
}
