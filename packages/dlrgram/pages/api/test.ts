import httpFilter from "@/src/http/httpFilter.function"
import { NextApiRequest, NextApiResponse } from "next"

async function apiTest(req: NextApiRequest, res: NextApiResponse) {
    res.json({msg: "OK"});
}

export default httpFilter({
    methods: ["GET"],
    //contentTypes: ["application/json"],
    authOnly: true
}, apiTest);
