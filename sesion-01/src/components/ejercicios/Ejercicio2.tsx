import React from 'react'

interface Usuario{
    nombre:string,
    edad:number ,
    email:string
}

interface Producto{
    id:number,
    nombre:string,
    precio:number
}

type Estado="pendiente"|"aprobado"|"rechazado"

//modo dioss.....
//Voy a crear un type llamado campoUsuario que tenga como posibles valores las claves de la interfaz Usuario
type CampoUsuario = keyof Usuario

let campo:CampoUsuario="nombre"



function Ejercicio2() {
    const [usuario, setUsuario] = useState<Usuario>({nombre:"",edad:0})
    const [productos, setProductos] = useState<Producto | null>(null)
    const [estado, setEstado] = useState<Estado>("pendiente")
    //Cuando lo vaya a renderizar podre gestionar con el null si hay o no productos
    if(productos===null){
        return <p>Cargando los datos...</p>
    }else{
        {
            <h1>{productos.nombre}</h1>
        }
    }

    return (
    <div>
        
    </div>
  )
}

export default Ejercicio2
