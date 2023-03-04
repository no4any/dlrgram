import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
    const { data: session } = useSession();

    return <div id="header">
        <div className="left">
            <img className="logo" src="/RAM.png" alt="DLRG RAM Logo" />
        </div>
        <div className="right">
            {session ? <Link className="iconLink" href={'/login'}>
                <FontAwesomeIcon icon={faRightToBracket} />
            </Link> : <></>}
        </div>
    </div>
}