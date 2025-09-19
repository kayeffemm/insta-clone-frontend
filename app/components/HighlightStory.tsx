import type { Highlight } from "~/schemas/highlight.schema";

export function HighlightStory({ highlight }: { highlight: Highlight }) {
  return (
    <div className="w-full max-w-md mx-auto bg-black text-white rounded-xl overflow-hidden">
      <div className="relative w-full aspect-[9/16] bg-black">
        <img
          src={highlight.cover_image_url}
          alt={highlight.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute top-3 left-3 right-3 h-1 bg-white/30 rounded">
          <div className="h-full w-1/3 bg-white rounded" />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-lg font-semibold">{highlight.title}</h1>
        </div>
      </div>
    </div>
  );
}
