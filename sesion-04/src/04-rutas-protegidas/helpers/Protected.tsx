import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface ProctectedRouteProps{
    isAllowed:boolean,
    children:ReactNode
}


export const ProctectedRoute=({ isAllowed,children }:ProctectedRouteProps)=>{
    if(!isAllowed){
        //replace lo que hace es reemplzar las rutas anteriores por las que estemos pasando en el historial de rutas
        return <Navigate to="/" replace></Navigate>
    }
    
    return <>{children}</>
}