import { useState } from 'react'
import { useFamily } from '../hook/useFamily'

const Nieto = () => {
    const { mensaje, setMensaje } = useFamily()
    const [newMensaje, setNewMensaje] = useState('')

    return (
        <div className='p-4 max-w-2xl mx-auto'>
            <div className='border-4 border-yellow-500 rounded-lg p-4 bg-yellow-500'>
                <h1 className='font-bold'>Nieto</h1>
            </div>
            <p className='mt-2'>
                <strong>Mensaje: {mensaje}</strong>
            </p>
            <div className='flex gap-2 my-4'>
                <input
                    type="text"
                    className='p-2 rounded-2xl border-2 border-gray-300'
                    value={newMensaje}
                    onChange={(e) => setNewMensaje(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />
                <button
                    className='px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all'
                    onClick={() => setMensaje(newMensaje)}
                >
                    Actualizar
                </button>
            </div>
        </div>
    )
}

export default Nieto


//En el abuelo el contador , y el padre que se modifique contador,