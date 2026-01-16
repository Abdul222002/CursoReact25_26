import { API_CONFIG, type Plato } from "../../types"


interface PlatoCardProps{
    plato:Plato
}

const PlatoCard = ({plato}:PlatoCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            src={`${API_CONFIG.BASE_URL}${plato.imagen}`} 
            alt={plato.nombre} />
            <div className="absolute top-4 right-4 bg-amber-100 px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm">
                {plato.categoria}
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                {plato.origen}
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">{plato.nombre}</h3>
                <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded ml-2 flex-shrink-0">{plato.calorias} kcal</span>
            </div>
            <div>
                <p className="text-gray-600 font-semibold text-sm mb-2">
                    Ingredientes:
                </p>
                <div className="flex flex-wrap gap-1">
                    {plato.ingredientes.map((ingrediente:string,index:number)=>(
                        <span key={index} className="text-xs px-2 py-1 bg-orange-50 text-orange-600 rounded-md border border-orange-100">
                            {ingrediente}
                        </span>
                        ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlatoCard

//EL buscar es interesante osea que entra en el examen
//Crear un componente llamado buscar que permita buscar por nombre de plato o ingredientes 