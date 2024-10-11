'use client'
import React, { useEffect, useState } from 'react'

const AddTodo = ({user}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [userId, setUserId] = useState('')
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

  return (
    <div>
        <h1>Add TODO</h1>
    </div>
  )
}

export default AddTodo