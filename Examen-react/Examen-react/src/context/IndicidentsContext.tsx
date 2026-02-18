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
import { createContext, useState, useEffect, type ReactNode } from "react";
import { toast } from "sonner";
import type { CreateIncidentDTO, Incident } from "../types";
import { incidentsAPI } from "../services/api";

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
  ): Promise<Incident | null> => {
    try {
      const response = await incidentsAPI.createIncident(data);
      // [nueva, ...anteriores] → la nueva aparece primera en la lista

      setIncidents((prev) => [response.data, ...prev]);
      toast.success(response.message || "Incidente creado");
      return response.data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al crear incidente";
      toast.error(message);
      return null;
    }
  };

  
  // ELIMINAR - Envia al backend y la quita del array local
  const removeIncident = async (id: number): Promise<boolean> => {
    try {
      const response = await companiesAPI.delete(id);
      // .filter devuelve un nuevo array SIN la empresa eliminada
      setCompanies((prev) => prev.filter((c) => c.id !== id));
      toast.success(response.message || "Empresa eliminada");
      return true;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al eliminar empresa";
      toast.error(message);
      return false;
    }
  };

  // useEffect con [] = se ejecuta UNA vez al montar.
  // "Cuando este componente aparece, carga las empresas del backend"
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <CompaniesContext.Provider
      value={{
        companies,
        loading,
        error,
        fetchCompanies,
        createCompany,
        updateCompany,
        deleteCompany,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
}