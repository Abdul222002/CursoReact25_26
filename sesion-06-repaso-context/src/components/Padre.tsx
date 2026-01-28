import React from 'react'
import Hijo from './Hijo'

const Padre = () => {
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-4 border-red-500 rounded-lg p-4 bg-red-500'>
            <h1 className='font-bold'>Padre</h1>
            <div className='mt-4 border-4 border-red-200'>
                <Hijo/>
            </div>
        </div>
    </div>
  )
}

export default Padre