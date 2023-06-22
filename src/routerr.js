import * as React from 'react'
import{
    createBrowserRouter,

}from "react-router-dom";
import App from './App';
import Login from './pages/Login';
//  import ProtectedRoute from './utils/ProtectedRoute';

import Supervisor from './pages/Supervisor';
import Projects from './pages/Projects';
import Attendence from './pages/Attendence';
import Students from './pages/Students';
import NavAndSidebar from './utils/NavAndSidebar';
import Registration from './pages/Registration';




const  router = createBrowserRouter([
    {
        path: "/",
        element:< Registration/>
            
    },

    {
        path: "/Login",
        element:< Login/>
            
    },
    
            
   
    {
        // path: "/dashboard",
        // element:
        // <ProtectedRoute>
        //      <App/>
        // </ProtectedRoute>,

        children:[
              {
                  path:"/dashboard/",
                  element:<NavAndSidebar />
              },
            {
                path:'/dashboard/supervisor',
                element:<Supervisor />
            },
            {
                path:'/dashboard/projects',
                element:<Projects />
            },
            // {
            //     path:'/dashboard/projects',
            //     element:<StuTable />
            // },
            {
                path:'attendence',
                element:<Attendence />
            },
            {
                path:'/dashboard/students',
                element:<Students />
            },
            {
                path: "NavAndSidebar",
                element: <NavAndSidebar />
            }

        ],
            
    },
])
export default router;
