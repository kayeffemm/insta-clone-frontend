import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlight.schema";

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <Link to={`/profile/highlights/${highlight.id}`} className="flex flex-col items-center gap-2 w-24">
      <div className="w-20 h-20 rounded-full overflow-hidden border bg-gray-100">
        <img
          src={highlight.cover_image_url}
          alt={highlight.title}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xs text-center truncate w-full">{highlight.title}</span>
    </Link>
  );
}
