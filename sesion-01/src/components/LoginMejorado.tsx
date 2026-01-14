import React, { useState } from "react";

/* ===== Interface ===== */
interface Usuario {
  email: string;
  passwd: string;
}

const FormularioLogin: React.FC = () => {
  /* ===== Estado ===== */
  const [usuario, setUsuario] = useState<Usuario>({
    email: "",
    passwd: "",
  });

  const [mostrarPassword, setMostrarPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  /* ===== Manejar cambios ===== */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;

    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  /* ===== Validación ===== */
  const validarFormulario = (): boolean => {
    if (!usuario.email || !usuario.passwd) {
      setError("Todos los campos son obligatorios");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(usuario.email)) {
      setError("El formato del email no es válido");
      return false;
    }

    if (usuario.passwd.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }

    setError("");
    return true;
  };

  /* ===== Submit ===== */
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    if (!validarFormulario()) return;

    console.log("Datos enviados:", usuario);
    alert("Formulario válido ✅");

    setUsuario({
      email: "",
      passwd: "",
    });
  };

  /* ===== JSX ===== */
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">Login</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={mostrarPassword ? "text" : "password"}
              name="passwd"
              value={usuario.passwd}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500 pr-10"
            />

            <button
              type="button"
              onClick={() =>
                setMostrarPassword(!mostrarPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              {mostrarPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-700 font-semibold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioLogin;
