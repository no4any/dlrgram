import { useState } from "react";

export default function () {
    const [loggedIn, setLoggedIn] = useState({ loggedIn: false })

    return <div>
        <div>
            {loggedIn.loggedIn?'Angemeldet':'NICHT angemeldet'}
        </div>
        <button onClick={()=>{
            fetch('api/test').then(r => r.json()).then(console.log).catch(console.error)
        }}>Update login Status</button>
    </div>
}