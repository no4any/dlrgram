import { createHmac } from "crypto";
import { HMAC_SHA256_SECRET } from "./PARAMS";

export default function encryptPassword(password: string): string {
    return createHmac('sha256', HMAC_SHA256_SECRET).update(password).digest('hex');
}