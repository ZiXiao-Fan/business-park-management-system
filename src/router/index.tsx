import { createBrowserRouter } from "react-router-dom";
import React from "react";
import RequireAuth from "../utils/requireAuth";

const Home = React.lazy(()=>import("../page/home"));
const Login = React.lazy(()=>import("../page/login"));
const PageNotFound = React.lazy(()=>import("../page/404"));
const router = createBrowserRouter([
    {
        path:"/",
        element: <RequireAuth isRequired={true} redirectTo={"/login"}> 
                    <Home/> 
                 </RequireAuth>
    },
    {
        path:"/login",
        element: <RequireAuth isRequired={false} redirectTo={"/"}>
                    <Login/>
                 </RequireAuth>
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
])

export default router