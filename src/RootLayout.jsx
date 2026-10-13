import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from "react-router-dom"

const RootLayout = () => {
  return (
    <div className='min-h-screen bg-zinc-950 text-gray-200 flex flex-col'>
       <Navbar />
        <main className='grow'>
            <div className='max-w-6xl mx-auto px-8 py-12'>
                <Outlet />
            </div>
        </main>
       <Footer />
    </div>
  )
}
export default RootLayout