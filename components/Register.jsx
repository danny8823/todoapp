'use client'

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmpassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const formHandler = async (e)=>{
        e.preventDefault()
        if(!username || !email || !password || !confirmPassword) {
            setError('Please fill out all fields.')
        }

        if(password !== confirmPassword) {
            setError('Passwords must match.')
        }

        try {
            const resUserExists = await fetch("api/userExists", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email})
            })

            const {user} = await resUserExists.json()

            if(user) {
                setError('User already exists')
                return;
            }

            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            })

            if(res.ok) {
                const form = e.target;
                form.reset()
                router.push('/todo')
            } else {
                console.log('User reg failed')
            }
        } catch (error) {
            console.log("Error during reg:", error)
        }
    }

  return (
    <div>
        <form onSubmit = {formHandler}>
            <input
                type = 'email'
                placeholder = 'email'
                onChange = {(e)=>setEmail(e.target.value)}/>
            <input
                type = 'string'
                placeholder = 'username'
                onChange = {(e)=>setUsername(e.target.value)}/>
            <input
                type = 'password'
                placeholder = 'password'
                onChange = {(e)=>setPassword(e.target.value)}/>
            <input
                type = 'password'
                placeholder = 'confirm password'
                onChange = {(e)=>setConfirmpassword(e.target.value)}/>
            <button type = 'submit'>Submit</button>
        </form>
        {error && (
            <div>
                <p>{error}</p>
            </div>
        )}
    </div>
  )
}

export default RegisterForm