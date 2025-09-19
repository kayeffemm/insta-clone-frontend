import { useLoaderData, type LoaderFunctionArgs, Link } from "react-router";
import { api } from "~/services/api";
import { highlightSchema, type Highlight } from "~/schemas/highlight.schema";
import { HighlightStory } from "~/components/HighlightStory";

export async function loader({ params }: LoaderFunctionArgs) {
  const highlightId = params.id;
  try {
    const res = await api.get(`/highlights/${highlightId}`);
    return highlightSchema.parse(res.data);
  } catch {
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData() as Highlight;

  return (
    <div className="space-y-4">
      <Link to="/profile/highlights" className="underline text-sm">
        ← Back to highlights
      </Link>
      <HighlightStory highlight={highlight} />
    </div>
  );
}
