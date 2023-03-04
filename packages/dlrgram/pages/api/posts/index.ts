import { Post, PostSchema } from "@/src/resources/Post.zod";
import { NextApiRequest, NextApiResponse } from "next";

export default async function meApi(req: NextApiRequest, res: NextApiResponse<Post | unknown>) {
    const DEMO: Post = {
        title: "aasdf",
        description: "basdfasdfasdfasdfasdfasdf",
        tags: ["a","asdas"]
    }

    try {
        await PostSchema.parseAsync(DEMO);
        res.status(200).json(DEMO);
    } catch(e: unknown) {
        res.status(500).json(e);
    }

}