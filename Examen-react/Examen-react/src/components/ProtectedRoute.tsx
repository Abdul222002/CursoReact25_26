import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Comprobando sesión...</p>;
  }

  if (!user && !loading) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}