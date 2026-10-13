import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const studentDetailsLoader = async({params})=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    return response.json()
}

const StudentDetails = () => {
    const student = useLoaderData()

  return (
    <div>
        <h1>Student Details</h1>
        <h2>{student.name}</h2>
        <p>Email: {student.email}</p>
    </div>
  )
}

export default StudentDetails