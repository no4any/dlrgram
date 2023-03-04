import {z} from 'zod';

export const PostSchema = z.object({
    title: z.string().min(5).max(255),
    description: z.string().max(2048)
})

export const PostPersistence = PostSchema.extend({
    _id: z.string()
})

export type Post = z.infer<typeof PostSchema>;
export type PostPersistence = z.infer<typeof PostPersistence>;