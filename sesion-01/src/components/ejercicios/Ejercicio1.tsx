import React from 'react'

//Crear una interface llamada producto que tenga id,nombre,precio,disponible y opcionalmente categoria
//Implementer una funcion llamada calcular total , que reciba un array de tipo Producto y return un numero lo unico que tiene que hacer es 
//sumar todos los precios de los producto disponibles
//Crar un array de productos por lo menos con tres productos difrentes 
//Probar la funcion 

interface Producto {
    id:number,
    nombre:string,
    precio:number,
    disponible:boolean,
    categoria?:string
}

function calcularTotal(productos:Producto[]):number{
  return productos.filter(producto=>producto.disponible).reduce((total,producto)=>total+producto.precio,0)
}

function Ejercicio1() {
  return (
    <div>
      
    </div>
  )
}

export default Ejercicio1
