import { createBrowserRouter } from "react-router-dom";
import RootLayout from './RootLayout'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import Students,{studentsLoader} from "./Students";
import StudentDetails, { studentDetailsLoader } from "./StudentDetails";
import AddStudent,{addStudentAction} from "./AddStudent";
import Login,  { loginAction } from "./Login";
import ProtectedRoute from './components/ProtectedRoute'
import Users,{usersLoader} from './Users'
import Logout,{logoutAction} from "./Logout";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout />,
        
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"about",
                element:<About />

            },
            {
                path:"contact",
                element:<Contact />

            },
            {
                path:"students",
                element:<Students />,
                loader:studentsLoader

            },
            {
                path:"students/:id",
                element:<StudentDetails />,
                loader:studentDetailsLoader

            },
            {
                path:"addstudent",
                element:<AddStudent />,
                action:addStudentAction
            },
            {
                path:"login",
                element:<Login />,
                action:loginAction
            },
            {
                path: "users",
                element: (
                    <ProtectedRoute>

                        <Users />
                    </ProtectedRoute>
                  
                ),
                loader:usersLoader,
                errorElement:<ErrorPage />
            },
            {
                path:"logout",
                element:<Logout />,
                action:logoutAction,
                
            }

        ]
    }


])
