import React from 'react'
import {Form} from 'react-router-dom'

const AddStudent = () => {
  return (
    <div className='min-h-scren flex items-center justify-center p-6'>
        <div className='w-full max-w-lg bg-white rounded-xl shadow-lg p-8'>
            <h1 className='text-3xl mb-2 font-bold'>Add Student</h1>
            
            <Form method='post' className='space-y-5'>
                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Student Name</label>
                    <input 
                        type="text" 
                        name="name"
                        className='w-full text-black rounded-lg border border-slate-300 px-3 py-3'
                        placeholder='Enter Student Name'
                        />
                </div>

                 <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Student Email</label>
                    <input 
                        type="email" 
                        name="email"
                        className='w-full text-black rounded-lg border border-slate-300 px-3 py-3'
                        placeholder='Enter Student Email'
                        />
                </div>

                 <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Phone Number</label>
                    <input 
                        type="number" 
                        name="phone"
                        className='w-full text-black rounded-lg border border-slate-300 px-3 py-3'
                        placeholder='Enter phone number'
                        />
                </div>
                <button 
                    type="submit"
                    className='bg-blue-600 text-white p-3 rounded-lg font-semibold'
                    >Save Student</button>

            </Form>


        </div>

    </div>
  )
}

export default AddStudent

export const addStudentAction = async({request}) =>{
    const formData = await request.formData()

    const student = {
        name:formData.get("name"),
        email:formData.get("email"),
        phone:formData.get("phone")

    }
    console.log(student)
    //fake API call
    await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    })
    alert("Student saved")
}