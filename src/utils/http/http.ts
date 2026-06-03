import axios from "axios";
import type { AxiosInstance,InternalAxiosRequestConfig,AxiosResponse } from "axios";
import { message } from "antd";
import { store } from "../../store";

const http:AxiosInstance = axios.create({
    baseURL:"https://www.demo.com",
    timeout:1000
})

http.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    const {token} =  store.getState().authSlice
    if(token){
        config.headers['Authorization'] = `Bearer${token}`
    }
    return config
})

http.interceptors.response.use((response:AxiosResponse)=>{
    const res = response.data
    if(res.code!==200){
        message.error(res.code+":"+res.message)
        return Promise.reject(new Error(res.message))
    }
    return response.data
})

export default http