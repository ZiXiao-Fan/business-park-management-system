import type { RouteObject } from "react-router-dom"
import { componentMap } from "../router/routerMap"

interface backEndMenuType{
    icon:string,
    label:string,
    key:string,
    children?:backEndMenuType[]
}


export function generateRoutes(backEndMenu:backEndMenuType[]):RouteObject[]{
    
    return backEndMenu.map((item:backEndMenuType)=>{
        const hasChildren = item.children
        const routObj:RouteObject = {
            path:item.key,
            element:hasChildren?null:<>{componentMap[item.key]}</>
        }
        if (item.children){
            routObj.children = generateRoutes(item.children)
        }
        return routObj
    })

}