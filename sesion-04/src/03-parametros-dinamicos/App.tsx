import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./components/NotFound"
import About from "./components/About"
import Saludo from "./components/Saludo"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header/>
      <main className="max-w-4xl mx-auto mt-10 bg-white shadow-md border border-slate-200 min-h-[500px]">
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/saludo/:nombre" element={<Saludo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App