import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (

    <div>
      <h1>Blog de Libros Interactivos</h1>
      <main>
        <Outlet />
      </main>
    </div>
  ) 
}

export default Layout