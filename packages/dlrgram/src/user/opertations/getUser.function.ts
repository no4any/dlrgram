import { mongoCollectionUsers } from "@/src/mongo/mongoClient.mongo";
import User from "../User.interface";

export default async function getUser(name: string): Promise<User | null> {
    const user = await mongoCollectionUsers.findOne({ name });
    if (user) {
        const { password, _id, ...cleanUser } = user;
        return cleanUser;
    }
    return null;
}   