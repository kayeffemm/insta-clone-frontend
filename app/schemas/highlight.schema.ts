import { z } from "zod";

const highlightSchema = z.object({
  id: z.number(),
  title: z.string(),
  cover_image_url: z.string().url(),
  created_at: z.string(),
});

const highlightsSchema = z.array(highlightSchema);

type Highlight = z.infer<typeof highlightSchema>;

export { highlightSchema, highlightsSchema };
export type { Highlight };
