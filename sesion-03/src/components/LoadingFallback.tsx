interface LoadingFallbackProps{
  message?:string
}


const LoadingFallback = ({message = 'Cargando...'}:LoadingFallbackProps) => {
  return (
    <div className='flex items-center justify-center py-20 bg-gray-50'>
        <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-2 border-sky-700 border-t-transparent mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">{message}</p>
        </div>
    </div>
  )
}

export default LoadingFallback