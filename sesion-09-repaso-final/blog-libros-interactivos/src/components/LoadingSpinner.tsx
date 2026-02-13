import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center py-10'>
        <div className='animate-spin rounded-full h-16 border-4 border-blue-400'/>
    </div>
)
}

export default LoadingSpinner