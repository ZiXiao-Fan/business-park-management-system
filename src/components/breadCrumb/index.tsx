import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import Breadcrumb from "antd/es/breadcrumb/Breadcrumb"

interface menuItemType{
    label:string,
    key:string,
    children?:menuItemType[]
}
function findBreadCrumbPath(path:string,menuItem:menuItemType[]):string[]{
    const breadList:string[] = [];
    function findPath(currentPath:string,items:menuItemType[]){
        for(let item of items){
            if(currentPath.startsWith(item.key)){
                breadList.push(item.label)
                if(item.children){
                    findPath(currentPath,item.children)
                }
                break;
            }
        }
        return breadList
    }
    return findPath(path,menuItem)
}

export default function MyBreadCrumb(){
   const {menuList} = useSelector((state:any)=>state.authSlice)
   const location = useLocation()
   const breadPath = findBreadCrumbPath(location.pathname,menuList).map(item=>({title:item}))
    return <Breadcrumb items={breadPath} className="mt mb"></Breadcrumb>
}
