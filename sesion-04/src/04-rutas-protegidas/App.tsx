import { NavLink, Route, Routes } from "react-router-dom"
import PublicHome from "./pages/PublicHome"
import SecretArea from "./pages/SecretArea"
import { useState } from "react"
import { ProctectedRoute } from "./helpers/Protected"
import Header from "./components/Header"

const App = () => {
  //hooks
  const [isAllowed, setIsAllowed] = useState(false)
  return (
    <div className="min-h-screen bg-slate-50">      
    <Header/>
    <nav className="max-w-5xl mx-auto flex items-center justify-between bg-slate-800 rounded shadow-2xl">
      <div className="flex gap-8 ml-6">
        <NavLink
  to="/"
  className={({ isActive }) =>
    `text-xs font-bold p-8 py-3 transition-all ${
      isActive ? 'text-white' : 'hover:text-white'
    }`
  }
>
  Public
</NavLink>

<NavLink
  to="/secret"
  className={({ isActive }) =>
    `text-xs font-bold p-8 py-3 transition-all ${
      isActive ? 'text-white' : 'hover:text-white'
    }`
  }
>
  Secret Area
</NavLink>

      </div>
      <div>
        <button
        onClick={()=> setIsAllowed(!isAllowed)}
        className={`px-10 py-3 rounded-xl font-black text-xs uppercase transition-all active:scale-95
          ${isAllowed
            ? 'bg-slate-900 text-slate-400 border-slate-700'
            : 'bg-indigo-600 text-white shadow-lg shadow-indigo-400'
          }`}
        >
          {isAllowed? 'Sing Out': 'Sing In'}
        </button>
      </div>
    </nav>
    <main className="max-w-4xl mx-auto">
      <Routes>
        <Route path="/" element={<PublicHome/>}/>
        <Route path="/secret" element={
          <ProctectedRoute isAllowed={isAllowed}>
            <SecretArea/>
          </ProctectedRoute>
        }/>
        <Route/>
      </Routes>
    </main>
    </div>
  )
}

export default App