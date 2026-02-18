import axios from "axios";
import type { AxiosInstance,InternalAxiosRequestConfig,AxiosResponse } from "axios";
const http:AxiosInstance = axios.create({
    baseURL:"https://www.demo.com",
    timeout:5000
})

http.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    console.log("config is",config)
    return config
})

http.interceptors.response.use((response:AxiosResponse)=>{
    console.log("response is", response)
    return response
})