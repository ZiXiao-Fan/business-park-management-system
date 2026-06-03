import React from "react";
import RequireAuth from "../utils/requireAuth";
import type { RouteObject } from "react-router-dom";
const Home = React.lazy(()=>import("../page/home"));
const Login = React.lazy(()=>import("../page/login"));
const PageNotFound = React.lazy(()=>import("../page/404"));


 export const router:RouteObject[] = [
    {
        path:"/",
        element: <RequireAuth isRequired={true} redirectTo={"/login"}> 
                    <Home/> 
                 </RequireAuth>
    },
    {
        path:"/login",
        element: <RequireAuth isRequired={false} redirectTo={"/dashboard"}>
                    <Login/>
                 </RequireAuth>
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
]

