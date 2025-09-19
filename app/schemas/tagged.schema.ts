import { z } from "zod";

const taggedSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  tagged_by: z.string(),
  created_at: z.string(),
});

const taggedListSchema = z.array(taggedSchema);
type Tagged = z.infer<typeof taggedSchema>;

export { taggedSchema, taggedListSchema };
export type { Tagged };
