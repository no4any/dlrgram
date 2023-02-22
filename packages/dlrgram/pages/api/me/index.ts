import httpFilter from "@/src/http/httpFilter.function"
import User from "@/src/user/User.interface";
import { NextApiRequest, NextApiResponse } from "next"
import getUser from "@/src/user/opertations/getUser.function"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

async function meApi(req: NextApiRequest, res: NextApiResponse<User>) {
    const session = await getServerSession(req, res, authOptions);
    const user = await getUser(session?.user?.name || "");
    if(user) {
        res.json(user);
    } else {
        res.status(404);
    }
    res.end();
}

export default httpFilter({
    methods: ["GET"],
    authOnly: true
}, meApi);
