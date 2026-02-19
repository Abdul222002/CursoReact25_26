
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-indigo-700 text-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link to="/" className="font-bold text-lg">
            🌍 Mi Empresa
          </Link>
          <Link to="/incidents" className="hover:underline">
            Incidencias
          </Link>
          {user && (
            <Link to="/new-incident" className="hover:underline">
              Nueva incidencia
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!user ? (
            <Link to="/login" className="bg-white text-indigo-700 px-3 py-1 rounded">
              Iniciar sesión
            </Link>
          ) : (
            <>
              <span className="font-medium">{user.name}</span>
              <button
                className="bg-white text-indigo-700 px-3 py-1 rounded"
                onClick={() => logout()}
              >
                Cerrar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;