import { createContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { authAPI } from "../services/api";
import type { User } from "../types";

/* =========================
   TIPOS DEL CONTEXTO
========================= */

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

/* =========================
   CREACIÓN DEL CONTEXTO
========================= */

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

/* =========================
   PROVIDER
========================= */

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // leemos token guardado al iniciar
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  // evita redirecciones incorrectas al cargar
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  /* =========================
     LOGIN
  ========================= */

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await authAPI.login({ email, password });

      const receivedToken = response.data?.token || null;
      const receivedUser = response.data?.user || null;

      setUser(receivedUser);
      setToken(receivedToken);

      if (receivedToken) {
        localStorage.setItem("token", receivedToken);
      }

      setError(null);
      toast.success("Sesión iniciada");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al iniciar sesión";

      setError(message);
      toast.error(message);
    }
  };

  /* =========================
     LOGOUT
  ========================= */

  const logout = () => {
    setUser(null);
    setToken(null);
    setError(null);

    localStorage.removeItem("token");

    toast.success("Sesión cerrada");
  };

  /* =========================
     VERIFICAR SESIÓN AL INICIO
  ========================= */

  useEffect(() => {
    const checkSession = async () => {
      const storedToken = localStorage.getItem("token");

    if (!storedToken) {
        setLoading(false);
        return;
      }
      try {
        // comprobar si el token sigue siendo válido
        const response = await authAPI.getMe();

        setUser(response.user);
        setToken(storedToken);
      } catch {
        // token inválido o expirado
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  /* =========================
     VALORES EXPUESTOS
  ========================= */

  const value: AuthContextType = {
    user,
    token,
    loading,
    error,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
