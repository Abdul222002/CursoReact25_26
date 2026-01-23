import { createContext, useContext, useState, ReactNode } from "react"

interface User {
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
}

// Creamos el contexto
const AuthContext = createContext<AuthContextType | null>(null)

// Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, password: string): boolean => {
    if (email === "admin@admin.com" && password === "1234") {
      setUser({ email })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext value={{ user, login, logout }}>
      {children}
    </AuthContext>
  )
}

// Hook personalizado
export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider")
  }

  return context
}
