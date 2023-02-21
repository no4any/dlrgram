import User from "./User.interface";

export default interface UserWithPassword extends User {
    password: string
}