import getUser from "@/src/user/opertations/getUser.function";
import User from "@/src/user/User.interface";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Frame from "@/src/components/core/Frame.component"

export default function userPage(user: User) {
    return <Frame>
        <div>
            <div>{user.name}</div>
            <div>{user.description}</div>
        </div>
    </Frame>
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

