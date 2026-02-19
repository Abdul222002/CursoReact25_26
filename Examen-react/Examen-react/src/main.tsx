import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { IncidentsProvider } from './context/IncidentsContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <IncidentsProvider>
        <App />
      </IncidentsProvider>
    </AuthProvider>
  </StrictMode>,
)
