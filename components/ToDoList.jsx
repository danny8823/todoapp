'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const ToDoList = ({user}) => {
    const [userId, setUserId] = useState('')
    const [todo, setTodo] = useState()
    const [error, setError] = useState('')

    const router = useRouter()

    const handleRefresh = () => {
        router.refresh()
    }

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

    const getTODO = async () => {
        try {

            const fetchToDo = await fetch(`api/todos/${userId}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const fetchedTODO = await fetchToDo.json()

            setTodo(fetchedTODO)
        } catch (error) {
            setError(error.message)
        }
    }
    
    const deleteTODO = async (id) => {
        try {
            const deletedToDo = await fetch(`api/todos/${id}`,{
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            
            
        } catch(error) {
            setError(error.message)
        }
    }
    useEffect(() =>{
        getUSER()
        getTODO()
    },[])

  return (
    <div>
        <div>
            <h1>ToDoList</h1>
            {todo?.map((task)=> (
                <div key = {task._id}>
                    <p>{task.title}</p>
                    <small>{task.description}</small>
                    <button onClick={() => deleteTODO(task._id)}>Delete</button>
                </div>
            ))}
            {error && <div>{error}</div>}
        </div>
        <div>
            
        </div>
    </div>
    
  )
}

export default ToDoList