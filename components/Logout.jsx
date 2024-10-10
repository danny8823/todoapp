'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Logout = () => {
    const router = useRouter()
        
    const clickHandler = async () => {
        
        await signOut()
        router.replace('/')
    }
  return (
    <div>
        <button
            onClick={()=>clickHandler()}>
                Log off
        </button>
    </div>
  )
}

export default Logout