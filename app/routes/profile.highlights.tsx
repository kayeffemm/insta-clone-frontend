import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { highlightsSchema, type Highlight } from "~/schemas/highlight.schema";
import { HighlightBubble } from "~/components/HighlightBubble";

export async function loader() {
  try {
    const res = await api.get("/highlights");
    return highlightsSchema.parse(res.data);
  } catch {
    throw new Response("Could not load highlights.", { status: 500 });
  }
}

export default function HighlightsList() {
  const highlights = useLoaderData() as Highlight[];
  return (
    <section className="flex gap-4 flex-wrap">
      {highlights.map((h) => (
        <HighlightBubble key={h.id} highlight={h} />
      ))}
    </section>
  );
}
