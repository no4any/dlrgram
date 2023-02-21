import { mongoClient } from "@/src/mongo/mongoClient.mongo";
import encryptPassword from "./encryptPassword.function";

export default async function authUser(name: string, password: string): Promise<boolean> {
    const user = await mongoClient
        .db('dlrgram')
        .collection('users')
        .findOne({ name, password: encryptPassword(password) });
    return user ? true : false;
}