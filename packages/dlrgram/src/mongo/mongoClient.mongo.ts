import { MongoClient } from "mongodb";
import { MONGO_COLLECTION_USERS, MONGO_DB, MONGO_PASS, MONGO_URL, MONGO_USER } from "./PARAMS.mongo";

const uri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}?retryWrites=true&w=majority`;
export const mongoClient = new MongoClient(uri);
export const mongoDb = mongoClient.db(MONGO_DB);
export const mongoCollectionUsers = mongoDb.collection(MONGO_COLLECTION_USERS);