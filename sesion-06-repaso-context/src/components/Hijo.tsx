import React from 'react'
import Nieto from './Nieto'
import { useFamily } from '../hook/useFamily'

const Hijo = () => {
  const { incrementarContador,decrementarContador }=useFamily()

  return (
    <div className='p-4 max-w-2xl mx-auto'>
            <div className='flex gap-2 my-4'>
                <button
                    className='px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all'
                    onClick={incrementarContador}
                >
                    Incrementar
                </button>
                <button
                    className='px-4 py-2 rounded-2xl bg-red-600 text-white hover:bg-red-700 transition-all'
                    onClick={decrementarContador}
                >
                    Decrementar
                </button>
            </div>
        <div className='border-4 border-orange-500 rounded-lg p-4 bg-orange-500'>
            <h1 className='font-bold'>Hijo</h1>
            <div className='mt-4 border-4 border-orange-200'>
                <Nieto/>
            </div>
        </div>
    </div>
  )
}

export default Hijo


