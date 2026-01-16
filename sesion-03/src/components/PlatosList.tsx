import { use } from 'react'
import PlatoCard from './PlatoCard'
import type { Plato } from '../../types'

interface PLatosListProps{
  platosPromise:Promise<Plato[]>
  searchTerm: string
}


const PlatosList = ({platosPromise, searchTerm}:PLatosListProps) => {
  const platos=use(platosPromise)

  const filteredPlatos = platos.filter(plato =>
    (plato.nombre && plato.nombre.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (plato.ingredientes && plato.ingredientes.some(ing => ing && ing.toLowerCase().includes(searchTerm.toLowerCase())))
  )

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredPlatos.map((plato: Plato) => (
          <PlatoCard key={plato.id} plato={plato}/>
        ))}
      </div>
    </div>
  )
}

export default PlatosList