import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getUsers } from './services/userApi'

export const usersLoader = async()=>{

    try {
        const response = await getUsers()
    
    return response.data
    } catch (error) {
         const status = error.response?.status;

    if (status === 401) {
  throw new Response("You are not authorised to view this page.", { status: 401 });
}
    }
    
}

const Users = () => {
    const users = useLoaderData()
    console.log(users)

  return (
    <>
        <h1>Users</h1>
        {
            users.map((user)=>(
                <div key={user._id}>
                    {user.name}
                </div>
            ))
        }
    </>
  )
}

export default Users