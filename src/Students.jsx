import React from 'react'
import { useLoaderData,Link } from 'react-router-dom'

export const studentsLoader = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json()
}

const Students = () => {
    const students = useLoaderData()

  return (
    <>
        <h1>Students</h1>
        {
            students.map((student)=>(
                <div key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        {student.name}
                    
                    </Link>
                </div>
            ))
        }
    </>
  )
}

export default Students