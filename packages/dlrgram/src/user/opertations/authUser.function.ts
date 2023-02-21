import { mongoCollectionUsers } from "@/src/mongo/mongoClient.mongo";
import { ObjectId } from "mongodb";
import encryptPassword from "./encryptPassword.function";

export default async function authUser(name: string, password: string): Promise<boolean> {
    if (name === "admin") {
        const user = await mongoCollectionUsers.findOne({ name });
        if (user) {
            if (user.password === encryptPassword(password)) {
                return true;
            }
            return false;
        }
        mongoCollectionUsers.insertOne({
            _id: new ObjectId(),
            name,
            password: encryptPassword(password),
            description: ""
        })
        return true;
    }
    const user = await mongoCollectionUsers
        .findOne({ name, password: encryptPassword(password) });
    return user ? true : false;
}