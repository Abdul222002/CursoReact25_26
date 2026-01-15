 import type { Plato } from '../utils/api'

interface PlatoCardProps{
    plato:Plato
}

const PlatoCard = ({plato}:PlatoCardProps) => {
  return (
    <div>
        <div>
            <img src={`http://192.168.50.120:1492${plato.imagen}`} alt={plato.nombre} />
            <div>
                {plato.categoria}
            </div>        
        </div>
    </div>
  )
}

export default PlatoCard