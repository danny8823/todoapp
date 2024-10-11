import { signIn } from "next-auth/react"

export async function createTodoACTION(title,description) {
    try {
        const addTODO = await fetch(`api/todos`,{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({title,description})
        })
    } catch (error) {
        console.log(error)
    }
}

export async function loginACTION(email,password) {
    try {
        const res = await signIn('credentials', {
            email,
            password,
            redirect: false
        })

        if(res.error) {
            setError('Invalid Credentials')
            return
        }

        
    } catch (error) {
        console.log(error)
    }
}
