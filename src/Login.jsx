import React from 'react'
import {Form,useActionData,redirect} from 'react-router-dom'
import { loginUser } from './services/userApi'


const Login = () => { 
    const actionData = useActionData()
   

  return (
    <div className='min-h-scren flex items-center justify-center p-6'>
        <div className='w-full max-w-lg bg-white rounded-xl shadow-lg p-8'>
            <h1 className='text-3xl mb-2 font-bold'>Login</h1>
            
            <Form method='post' className='space-y-5'>
         
                 <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Email</label>
                    <input 
                        type="email" 
                        name="email"
                        className='w-full text-black rounded-lg border border-slate-300 px-3 py-3'
                        placeholder='Enter Email'
                        />
                    {actionData?.errors?.email && (
                    <p className="text-red-500">
                        {actionData.errors.email}
                    </p>
                    )}
                </div>

                 <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        className='w-full text-black rounded-lg border border-slate-300 px-3 py-3'
                        placeholder='Enter password'
                        />
                        {actionData?.errors?.password && (
                        <p className="text-red-500">
                            {actionData.errors.password}
                        </p>
                        )}
                </div>
                <button 
                    type="submit"
                    className='bg-blue-600 text-white p-3 rounded-lg font-semibold'
                    >Login</button>

            </Form>


        </div>

    </div>
  )
}

export default Login

export const loginAction = async({request}) =>{
  try {
     
 
    const formData = await request.formData()

    const user = {
     
        email:formData.get("email"),
        password:formData.get("password")

    }
    console.log(user)
    const errors = {}

  // Email validation
  if (!user.email) {
    errors.email = "Please enter your email"
  } 
  else if (!user.email.includes("@")) {
    errors.email = "Please enter a valid email address"
  }

  // Password validation
  if (!user.password) {
    errors.password = "Please enter your password"
  }
  else if (user.password.length < 6) {
    errors.password = "Password must contain at least 6 characters"
  }

  // Stop if validation errors exist
  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  
    // API call
    await loginUser(user)
    alert("Login success")
    return redirect("/users")
     } catch (error) {
    alert(error)
  }
}
