import { createFileRoute } from "@tanstack/react-router";
import { useGetHelloWorldQuery } from "./-queries";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  const { getHelloWorldQuery } = useGetHelloWorldQuery();
  if (getHelloWorldQuery.isLoading) return <p>is loading</p>;
  return (
    <div className="p-2">
      Hello from About!
      {JSON.stringify(getHelloWorldQuery.data)}
    </div>
  );
}
