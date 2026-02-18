/**
 * CONTEXTO DE EMPRESAS
 *
 * ¿Que hace? Almacena la lista de empresas en un estado global
 * y ofrece funciones CRUD (crear, leer, actualizar, eliminar).
 *
 * Patron: cada funcion CRUD hace 2 cosas:
 *   1. Llama al backend (companiesAPI.create, .update, .delete)
 *   2. Actualiza el estado local (setCompanies) para que la UI se re-renderice
 *
 * ¿Por que actualizar el estado local en vez de volver a pedir todo al backend?
 * Porque es mas rapido. La UI se actualiza al instante sin esperar otra peticion.
 */
import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import { toast } from "sonner";
import type { CreateIncidentDTO, Incident } from "../types";
import { incidentsAPI } from "../services/api";
import { useAuth } from "../hooks/useAuth";

export interface IncidentsContextType {
  incidents: Incident[];
  loading: boolean;
  error: string | null;
  fetchIncidents: () => Promise<void>;
  addIncident: (incident: CreateIncidentDTO) => Promise<void>;
  removeIncident: (id: number) => Promise<void>;
}

export const IncidentsContext = createContext<IncidentsContextType | undefined>(
  undefined,
);

export function IncidentsProvider({ children }: { children: ReactNode }) {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuth();

  // LEER - Pide todos los incidentes al backend
  const fetchIncidents = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await incidentsAPI.getIncidents();
      setIncidents(data.data? data.data : []);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al cargar incidentes";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // CREAR - Envia al backend y añade al inicio del array local
  const addIncident = async (
    data: CreateIncidentDTO,
    ): Promise<void> => {
    if (!token) {
      toast.error("No autorizado");
      return;
    }
    try {
      const response = await incidentsAPI.createIncident(data);
      // [anteriores, nueva] → la nueva aparece al final de la lista
      if (response.data) {
        // añadimos la nueva al inicio de la lista
        setIncidents((prev) => [response.data, ...prev] as Incident[]);
        toast.success("Incidente creado");
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al crear incidente";
      toast.error(message);
    }
  };

  
  // ELIMINAR - Envia al backend y la quita del array local
  const removeIncident = async (id: number): Promise<void> => {
    if (!token) {
      toast.error("No autorizado");
      return;
    }
    try {
      const response = await incidentsAPI.deleteIncident(id);
      // .filter devuelve un nuevo array SIN el incidente eliminado
      setIncidents((prev) => prev.filter((c) => c.id !== id));
      toast.success(response.message || "Incidente eliminado");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al eliminar incidente";
      toast.error(message);
    }
  };

  // useEffect con [] = se ejecuta UNA vez al montar.
  // "Cuando este componente aparece, carga los incidentes del backend"
  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <IncidentsContext.Provider
      value={{
        incidents,
        loading,
        error,
        fetchIncidents,
        addIncident,
        removeIncident,
      }}
    >
      {children}
    </IncidentsContext.Provider>
  );
}
