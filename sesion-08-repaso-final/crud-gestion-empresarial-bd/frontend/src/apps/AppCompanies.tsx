import React from 'react'
import CompanyForm from '../components/companies/CompanyForm'

import { Toaster } from 'sonner'


const AppCompanies = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-sky-700 shadow text-white'>
        <h1 className='text-2xl font-bold mx-auto'>Crud de empresas</h1>
      </header>
      <main>
        <CompanyForm />
      </main>
      <Toaster position='top-right' richColors />
    </div>
  )
}

export default AppCompanies