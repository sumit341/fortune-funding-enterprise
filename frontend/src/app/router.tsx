import { createBrowserRouter } from "react-router-dom";


import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminLayout from "../layouts/AdminLayout";


import ProtectedRoute from "../components/guards/ProtectedRoute";
import AdminRoute from "../components/guards/AdminRoute";


import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Admin from "../pages/Admin/Admin";



export const router = createBrowserRouter([


{
 path:"/",
 element:<MainLayout />,
 children:[

 {
  index:true,
  element:<Home/>
 }

 ]

},



{
 path:"/",
 element:<AuthLayout/>,

 children:[

 {
 path:"login",
 element:<Login/>
 },


 {
 path:"register",
 element:<Register/>
 }

 ]

},




{
 path:"/",
 element:<ProtectedRoute/>,

 children:[


 {
  path:"dashboard",

  element:<DashboardLayout/>,

  children:[

   {
    index:true,
    element:<Dashboard/>
   }

  ]

 }


 ]

},




{
 path:"/",
 element:<AdminRoute/>,

 children:[

 {

 path:"admin",

 element:<AdminLayout/>,

 children:[

 {
  index:true,
  element:<Admin/>
 }

 ]

 }

 ]

}



]);