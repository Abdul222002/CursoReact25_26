import { Navigate, Route, Routes } from "react-router-dom"
import FormTodoList from "./formBasico/formTodoList"

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <h1>Formulario con React 19</h1>
    
      <Routes>
        <Route path="/" element={<Navigate to="/form-todo" replace/>}/>
        <Route path="/form-todo" element={<FormTodoList/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App
