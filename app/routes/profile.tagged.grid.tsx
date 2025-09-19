import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { PostCard } from "~/components/PostCard";

type TaggedPost = {
  id: number;
  img_url: string;
  caption: string | null;
  created_at: string;
  tagged_by: string;
};

export async function loader() {
  try {
    const res = await api.get("/tagged/grid");
    return res.data as TaggedPost[];
  } catch {
    throw new Response("Could not load tagged posts.", { status: 500 });
  }
}

export default function TaggedGrid() {
  const tagged = useLoaderData() as TaggedPost[];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tagged.map((item) => (
        <div key={item.id} className="space-y-1">
          <p className="text-sm text-gray-500">Tagged by {item.tagged_by}</p>
          <PostCard
            post={{
              id: item.id,
              img_url: item.img_url,
              caption: item.caption,
              created_at: item.created_at,
            }}
          />
        </div>
      ))}
    </div>
  );
}
