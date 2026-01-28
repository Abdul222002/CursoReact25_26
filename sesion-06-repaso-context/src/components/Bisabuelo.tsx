import Abuelo from './Abuelo'
import { useFamily } from '../hook/useFamily'

const Bisabuelo = () => {

  const { mensaje } = useFamily();
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-4 border-purple-500 rounded-lg p-4 bg-purple-500'>
            <h1 className='text-xl font-bold'>Bisabuelo</h1>
        <div className='mt-4 border-4 border-purple-200'>
            <p>
              <strong>Mensaje:{mensaje}</strong>
            </p>
            <Abuelo/>
        </div>
        </div>
    </div>
  )
}

export default Bisabuelo