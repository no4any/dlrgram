import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions)
    console.log("Session", session)

    if (session) {
        res.status(200).json({
            loggedIn: true
        })
    } else {
        res.status(401).json("")
    }
    res.end();
}