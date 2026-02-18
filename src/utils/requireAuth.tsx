import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
interface authType{
    isRequired:boolean,
    redirectTo:string,
    children:React.ReactNode
}
function RequireAuth({isRequired,redirectTo,children}:authType){
    const {token} = useSelector((state:any)=>state.authSlice)
    const isLogin=token?true:false
    const navigate = useNavigate()
    useEffect(()=>{
        if(isRequired!==isLogin){
        navigate(redirectTo)
    }
    },[isRequired,redirectTo,isLogin])
    return isRequired===isLogin?<>{children}</>:<></>
}
export default RequireAuth