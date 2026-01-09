import React from 'react'
import Header from './components/Header'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'
import FormularioUsuario from './components/FormularioUsuario'

const App = () => {
  return (
    
    <div className='min-h-screen bg-gray-300 '>
      <Header/>
      <main className='container bg-gray-100 mx-auto p-4'>
        <Saludo nombre='Carlos' edad={23}/>
        <Saludo nombre='Luis' edad={23}/>
        <Saludo nombre='Sarah' edad={23}/>
        <Saludo nombre='Mario' edad={23}/>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Tarjeta 
          title='React 19'
          description='Ultima version de la libreria React para javascript'
          imagen='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          favourite={true}
          />
          <Tarjeta 
          title='React 19'
          description='Ultima version de la libreria React para javascript'
          imagen='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <Tarjeta 
          title='React 19'
          description='Ultima version de la libreria React para javascript'
          imagen='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          /><Tarjeta 
          title='React 19'
          description='Ultima version de la libreria React para javascript'
          imagen='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>
        <FormularioUsuario/>
      </main>
    </div>
  )
}

export default App
