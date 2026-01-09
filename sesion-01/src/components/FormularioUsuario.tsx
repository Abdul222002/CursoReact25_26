import React, { useState } from 'react'

interface Usuario{
    nombre:string,
    email:string,
    edad:number,
}



const FormularioUsuario = () => {
  const [usuario, setUsuario] = useState<Usuario>(
    {   nombre:"",
        email:"",
        edad:0}
  )

  const actualizarCampo=(campo:keyof Usuario,valor:string|number)=>{
    setUsuario({
        ...usuario,
        [campo]:valor
    })
  }
  const handleSubmit=((e:React.FormEvent)=>{
    e.preventDefault()
  })
    return (
    //Formulario de datos
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
        <h3 className='text-xl font-bold mb-4'>
            Registro de Usuarios:
        </h3>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block text-sm font-medium mb-2' >Nombre</label>
                <input type="text" value={usuario.nombre} className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' 
                onChange={(e)=>{
                    actualizarCampo("nombre",e.target.value)
                }} required/>
            </div>

            <div>
                <label className='block text-sm font-medium mb-2'>Email</label>
                <input type="text" value={usuario.email} className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' 
                onChange={(e)=>{
                    actualizarCampo("email",e.target.value)
                }} 
                required/>
            </div>

            <div>
                <label className='block text-sm font-medium mb-2'>Edad</label>
                <input type="text" value={usuario.edad} className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' 
                onChange={(e)=>{
                    actualizarCampo("edad",Number(e.target.value))
                }}
                required/>
            </div>
            <button type='submit' className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-900 font-semibold' 
            onClick={()=>{
                localStorage.setItem("usuarios",JSON.stringify(usuario))
            }}>
                Guardar usuario
            </button>
            {/*Mostrar los datos que tengo actualmente */}
            <div className=' mt-6 p-4 bg-gray-100 rounded'>
                <h4 className='font-semibold mb-2'> Datos Actuales</h4>
                <pre className='text-sm'>
                    {JSON.stringify(usuario,null,2)}
                </pre>
            </div>

        </form>
    
    </div>
  )
}

export default FormularioUsuario



//Crear un componente que gestione una lista de contactos el usuario puede agregar y eliminar contactos para ello los requisitos son:
/* 
Crear una interface llamda contacto con el id,nombre,telef y email
El componente debe de tener un form con tres inputs nombre,telf y email 
un boton para agrear un contacto, un boton para listar los contactos y otro para eliminar contacto
Las funcionalidades deben de ser Agrerar un nuevo contacto(generer un id automatico con alguna libreria npm)
eliminar contacto por su id
limpiar el for despues de agregar 
mostrar un mensaje si no hay contactos almacenados
*/


/*

Crear un form con validacion basica
debe de tener dos campos email y passwd
hay que validar que los campos no esten vacios 
hay que validar con alguna expresion regular que el formato del email sea validacion
hay que mostrar/ocultar la contraseña con un guiocito
hay que mostrar un mensaje de error personalizado si falta algun campo o si no esta correcto el email
validar la contraseña que tenga caracteres suficientes
*/