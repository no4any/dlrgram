import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import HttpFilters from "./HttpFilters.interface";

export default function httpFilter(filter: HttpFilters, handler: NextApiHandler): NextApiHandler {
    return async function http(req, res) {
        const { contentTypes, authOnly, methods } = filter;
        if (methods) {
            if (!methods.includes(req.method || "")) {
                res.status(405).end();
                return;
            }
        }
        if (contentTypes) {
            if (!contentTypes.includes(req.headers["content-type"] || "")) {
                res.status(500).end();
                return;
            }
        }
        if (authOnly) {
            const session = await getServerSession(req, res, authOptions);
            if (!session) {
                res.status(401).end();
                return;
            }
        }
        return handler(req, res);
    }
}
