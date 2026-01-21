import { Link, useParams } from "react-router-dom"


const Saludo = () => {
    const { nombre }= useParams<{nombre:string}>()
    return (
    <div className="p-20 text-center  duration-500"> 
    <title>
        Saludos a {nombre}
    </title>
    <meta name="Description"
    content={`Pagina personalizada para ${nombre}`}/>
    <div className="text-6xl mb-6">
        <h1 className="text-6xl text-slate-900">
            Bienvenidos,<span className="text-blue-600">{nombre}</span>
        </h1>
        <p className="mt-4 text-sm italic">
            Dato recuperado con el hook userParams
        </p>
        <Link to="/" className="mt-20 inline-block px-8 py-5 bg-slate-800 text-white font-bold shadow-lg active:scale-95 transition-all">⬅️Volver al panel </Link>
    </div>
    </div>
  

)
}

export default Saludo