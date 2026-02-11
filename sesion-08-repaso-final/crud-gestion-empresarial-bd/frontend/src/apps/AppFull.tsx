import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import CompaniesPage from '../pages/CompaniesPage'
import CompaniesDetail from '../pages/CompaniesDetail'
import ContactsPage from '../pages/ContactsPage'
import NavBar from '../components/common/NavBar'
import HomePages from '../pages/HomePages'
import LoginPage from '../pages/LoginPage'
import ProtectedRoute from '../components/common/ProtectedRoute'

const AppFull = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
        <NavBar>/</NavBar>
        <Routes>
            {/* Rutas públicas */}
            <Route path='/' element={<HomePages />} />
            <Route path='/about' element={<LoginPage />} />
            {/* Rutas protegidas */}
            <ProtectedRoute>
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/companies' element={<CompaniesPage />} />
              <Route path='/companies/:id' element={<CompaniesDetail />} />
                <Route path='/contact' element={<ContactsPage />} />
                <Route path='/*' element={<Navigate to='/' />} />

            </ProtectedRoute>
        </Routes>
    </div>
  )
}

export default AppFull