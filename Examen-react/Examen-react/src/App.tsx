
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { IncidentsProvider } from "./context/IncidentsContext";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import IncidentsPage from "./pages/IncidentPage";
import LoginPage from "./pages/LoginPage";
import NewIncidentPage from "./pages/NewIncidentPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <IncidentsProvider>
        <BrowserRouter>
          <NavBar />
          <main className="max-w-6xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/incidents" element={<IncidentsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/new-incident"
                element={
                  <ProtectedRoute>
                    <NewIncidentPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<h2>Página 404 - No encontrada</h2>} />
            </Routes>
          </main>
        </BrowserRouter>
      </IncidentsProvider>
    </AuthProvider>
  );
}

export default App;
