'use client'
import Logout from "@/components/Logout";
import Nav from "@/components/Nav";
import ToDoList from "@/components/ToDoList";
import { useSession } from "next-auth/react";

export default function Todo () {
    const {data: session} = useSession()

    return (
        <div>
            <Nav/>
            <h1>TODO</h1>
            <p>Welcome {session?.user?.email}</p>
            <ToDoList user = {session?.user?.email}/>
            <Logout/>
        </div>
    )
}