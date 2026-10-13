import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './RootLayout'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import ErrorPage from './ErrorPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route  index element={<Home />}/>
          <Route path='about' element={<About />}  />
          <Route path='contact' element={<Contact />}  />
          
        </Route>
        <Route path="*" element={<ErrorPage />} />

      </Routes>


    </Router>
  )
}

export default App