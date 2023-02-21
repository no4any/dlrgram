import { MongoClient } from "mongodb";
import { MONGO_PASS, MONGO_URL, MONGO_USER } from "./PARAMS.mongo";

const uri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}?retryWrites=true&w=majority`;
export const mongoClient = new MongoClient(uri);