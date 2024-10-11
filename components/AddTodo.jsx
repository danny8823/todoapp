'use client'
import { createTodo } from '@/app/actions'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AddTodo = ({user}) => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [userId, setUserId] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()

    const getUSER = async() => {
        try {
            const fetchUser = await fetch(`api/users/${user}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(!fetchUser) {
                setError('No user')
            }
            const {_id} = await fetchUser.json()

            setUserId(_id)

        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getUSER()
    },[])

    const formHandler = async (e) => {
        e.preventDefault()
        if(!title || !description) {
            setError('Please fill out all fields')
        }
        createTodo(title,description)
    }
  return (
    <div>
        <h1>Add TODO</h1>
        <form onSubmit={formHandler}>
            <input
                type = 'text'
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type = 'text'
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
            />
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

export default AddTodo