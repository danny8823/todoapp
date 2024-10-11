'use client'
import React,{useState} from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { loginACTION } from '@/app/actions';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error , setError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        loginACTION(email,password)
        router.replace('todo')
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