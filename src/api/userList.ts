import { post } from "../utils/http/request"; 
import type { DataType } from "../page/users/interface";
interface searchType{
    page:number,
    pageSize:number,
    companyName?:string,
    contact?:string,
    tel?:string

}
export function getUserList(data:searchType){
    return post("/userList",data)
}
export function deleteUser(id:string){
    return post("/deleteUser",{id})
}

export function batchDeleteUser(ids:React.Key[]){
    return post("/batchDeleteUser",{ids})
}

// Edit or add company API
export function editUser(data:DataType){
    return post("/editUser",data)
}
