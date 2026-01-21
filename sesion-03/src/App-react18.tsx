import { useFetch } from '../../sesion-04/src/hooks/useFectch'
import { API_CONFIG, type Plato } from '../../sesion-04/types'
import Header from './components/Header';
import LoadingFallback from './components/LoadingFallback';
import PlatoCard from './components/PlatoCard';

const App = () => {

  const url=`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`;
  const { data:platos, loading , error } = useFetch<Plato[]>(url)
  
  return (

    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <Header/>
      <main>
        {loading && (<LoadingFallback message='Consultando menu tradicional'/>)}
        {error && (<div>Error cargando</div>)}
        {platos && (
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {platos.map((plato: Plato) => (
            <PlatoCard key={plato.id} plato={plato}/>
          ))}
        </div>
    </div>
        )}
      </main>
    </div>
  )
}

export default App