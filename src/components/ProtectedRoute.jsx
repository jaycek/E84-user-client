import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { checkUser } from '../services/userApi'

const ProtectedRoute = ({children}) => {
  const [isAuthenticated,setIsAuthenticated] = useState(null)
  const navigate = useNavigate()
  
  useEffect(()=>{
    verifyUser()
  },[])


  async function verifyUser(){
    try {
       
        const response = await checkUser()
        setIsAuthenticated(true)
    } catch (error) {
        console.log(error)
        setIsAuthenticated(false)
        navigate('/login')
    }
  }

  if(isAuthenticated === null){
    return <p>Checking authentication..</p>
  }

  if(isAuthenticated === false){
    return null
  }

  return children
}


export default ProtectedRoute