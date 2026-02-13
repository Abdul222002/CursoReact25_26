import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <FavoritesProvider>
        <App />
        <Toaster position='top-right' richColors/>
    </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)
