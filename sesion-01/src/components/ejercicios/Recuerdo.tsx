import React from 'react'

let nombreTS:string ="pepe";
let edadTS:number= 25;
let isAdminTS:boolean=false;
let nuloTS:null=null;
let indefinidoTS:undefined=undefined;

const lenguajes:string[]=["javascript","TypeScript","Python"]
const numeros:number[]=[1,2,3,4,5]

//Array de objetos 
const usuarios:{nombre:string,edad:number}[]=[
    {nombre:"Pepe",edad:25},
    {nombre:"Sara",edad:20},
    {nombre:"Maria",edad:16}
];

//Objeto simple tipado
const persona: {nombre:string,edad:number,isAdmin:boolean}={
    nombre:"Maria",
    edad:30,
    isAdmin:true
}

//Si accedo a persona.apellido <--- Error ❌ Property apellidos not exist
//********INTERFACES *************
//Las INTERFACES son un "contrato" que va a definir la forma que tiene un Objeto
interface Usuario {
    id:number,
    nombre:string,
    email:string,
    edad?:number, // edad es opcional puede o no puede existir
    activo:boolean
}

const usuario1:Usuario={
    id:1,
    nombre:"Manolo",
    email:"manolete@gmail.com",
    activo:true,
    //Edad era opcional
}

const usuario2:Usuario={
    id:2,
    nombre:"Paula",
    email:"paula@gmail.com",
    edad:27,
    activo:true,
    //Edad era opcional
}

function sumar(a:number,b:number):number{
    return a+b
}

function saludar(nombre:string):void {
    console.log("Bienvenido",nombre)
}

//funciones con parametros opcionales

function crearUsuarios(nombre:string,edad?:number):Usuario{
    return{
        id: Date.now(),
        nombre:nombre,
        email: `${nombre.toLocaleLowerCase()}@gmail.com`,
        edad:edad,
        activo:true
    }
}

//union  Types posible valores que pueden tomar una variable

let id:string | number
//id=true <---console.error();

type Tamano="Small"|"Medium"|"Large"

let talla:Tamano="Medium"

//------------Cuando usar Types y cuando usar Interfaces -------------
//Usar Types con primitivos y uniones
//Usar Interfaces con Objetos
//Ejemplo:
type ID= string |number;
type Estado="pendiente"| "completado" | "cancelado";

interface Persona{
    nombre :string,
    edad:number
}

//extender una interface
interface Empleado extends Persona{
    puesto:string,
    salario:number
}

const empleado1 :Empleado={
    
    nombre:"Manolo",
    edad:54,
    puesto:"Animador Deportivo",
    salario:50000
}


function Recuerdo() {
  return (
    <div>
      
    </div>
  )
}

export default Recuerdo
