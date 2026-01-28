import React, { useActionState } from 'react'
import type { FormState, TodoData } from '../Types'


//Simular guardar en una base de datos
const guardar=async(todo:TodoData)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000));

    localStorage.setItem('todo',JSON.stringify(todo));
}


//Funcion que ejecuta react al enviar el Formulario
const guardarAction=async(_prevState:FormState,
    formData:FormData// <---- fromData es un objeto que contiene los datos del formulario y lo da React
): Promise<FormState>=>{
    //extraer todos los datos de un formulario
    const nombreTodo=formData.get("nombreTodo") as string
    const fechaTodo=formData.get("fechaTodo") as string

    if(!nombreTodo || !fechaTodo){
        return {
            error:"Todos los campos son obligatorios",
            success:null
        }
    }

    try{
        await guardar({nombre:nombreTodo,fecha:fechaTodo})
        return{
            error:null,
            success:"🤌Todo guardado correctamente"
        }
    }catch(error){
        return{
            error:`Error al guardar el todo ${error}`,
            success:null
        }
    }

    
}


const FormTodoList = () => {
    const [state,formAction,isPending]=useActionState(guardarAction,{
        error:null,
        success:null
    })
    return (
    <div>
        <h1>

        </h1>
    </div>
  )
}

export default FormTodoList