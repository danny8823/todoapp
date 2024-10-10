'use client'
import Logout from "@/components/Logout";
import { useSession } from "next-auth/react";

export default function Todo () {
    const {data: session} = useSession()
    console.log(session)
    return (
        <div>
            <h1>TODO</h1>
            <p>Welcome {session?.user?.email}</p>
            <Logout/>
        </div>
    )
}