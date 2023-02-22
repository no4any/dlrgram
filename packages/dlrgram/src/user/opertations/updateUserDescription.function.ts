import { mongoCollectionUsers } from "@/src/mongo/mongoClient.mongo";

export default async function updateDescription(user: string, description: string): Promise<boolean> {
    try {
        mongoCollectionUsers.updateOne({ user }, { description });
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}