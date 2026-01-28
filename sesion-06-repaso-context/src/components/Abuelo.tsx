import React from 'react'
import Padre from './Padre'
import { useFamily } from '../hook/useFamily'

const Abuelo = () => {
  const { contador } = useFamily()
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-4 border-green-500 rounded-lg p-4 bg-green-500'>
            <h1 className='font-bold'>Abuelo</h1>
            <div className='mt-4 border-4 border-green-200'>
                <p>
                    <strong>Contador: {contador}</strong>
                </p>
                <Padre/>
            </div>
        </div>
    </div>
  )
}

export default Abuelo