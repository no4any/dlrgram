import { signIn } from "next-auth/react";

export default function LoginPage() {
    return <div>
        <button onClick={()=>signIn('credentials', {
            username:'admin', 
            password:'admin',
            callbackUrl:'/'
        }).then(console.log).catch(console.error)}>Login</button>
    </div>
}