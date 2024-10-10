'use client'
import React, { useEffect, useState } from 'react'


const ToDoList = ({user}) => {
    const [userId, setUserId] = useState('')
    const [todo, setTodo] = useState('')
    const [error, setError] = useState('')

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

            if(!fetchToDo) {
                setError('No todo')
            }

            const fetchedTODO = await fetchToDo.json()
            setTodo(fetchedTODO)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() =>{
        getUSER()
        getTODO()
    },[])
  return (
    <div>
        <h1>ToDoList</h1>
        {todo.map((task)=> (
            <div key = {task.id}>
                <p>{task.title}</p>
                <small>{task.description}</small>
            </div>
        ))}
        {error && <div>{error}</div>}
    </div>
    
  )
}

export default ToDoList