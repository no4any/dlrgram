import getUser from "@/src/user/opertations/getUser.function";
import User from "@/src/user/User.interface";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

export default function userPage(user: User) {
    return <div>
        <div>{user.name}</div>
        <div>{user.description}</div>
    </div>
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<User>> {
    const username = context.query.name as string || "";
    console.log("Username: ", username);
    const user = await getUser(username);

    if (user) {
        return {
            props: user
        }
    }

    return {
        notFound: true
    }
}

