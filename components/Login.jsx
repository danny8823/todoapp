'use client'
import React,{useState} from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error , setError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
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

            router.replace('todo')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input
                type = 'email'
                placeholder = 'EMAIL'
                onChange = {(e)=>setEmail(e.target.value)}
            ></input>
            <input 
                type = 'password'
                placeholder = 'PASSWORD'
                onChange = {(e)=>setPassword(e.target.value)}
            ></input>
            <button type = 'submit' >Login</button>
        </form>
        {error && (
            <div>
                <h1>{error}</h1>
            </div>
        )}
    </div>
  )
}

export default Login