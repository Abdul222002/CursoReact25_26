
import type {
    AuthResponse,
    CreateIncidentDTO,
    IncidentResponse,
    IncidentsResponse,
    LoginDTO,
    MessageResponse,
    User,
} from "../types";

const API_URL = import.meta.env.VITE_API_URL || "https://localhost:1495";

/**
 * Helper para obtener headers con token si existe
 */
function getHeaders(): HeadersInit {
    
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };
    // Si hay token en localStorage, añadirlo al header
    const token = localStorage.getItem("token");
        if (token) {
    headers.Authorization = `Bearer ${token}`;
    }

    return headers;
}

// ========================================
// INCIDENCIAS (INCIDENTS)
// ========================================

export const incidentsAPI = {
  /**
   * Obtener todas las incidencias
   */
    async getIncidents(): Promise<IncidentsResponse> {
    const response = await fetch(`${API_URL}/api/incidents`, {
      headers: getHeaders(),
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Error desconocido" }));
      throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();
  },


  /**
   * Crear una nueva incidencia
   */
    async createIncident(incident:CreateIncidentDTO): Promise<IncidentResponse> {
    const response = await fetch(`${API_URL}/api/incidents`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(incident),
    });
    if (!response.ok) {
        const error = await response
            .json()
            .catch(() => ({ message: "Error desconocido" }));
        throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();
  },

/**
* ELiminar una incidencia por id
*/
    async deleteIncident(id:number):Promise<MessageResponse> {
    const response = await fetch(`${API_URL}/incidents/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
    });
        if (!response.ok) {
    const error = await response
        .json()
        .catch(() => ({ message: "Error desconocido" }));
        throw new Error(error.message || `Error ${response.status}`);
    }
    return response.json();

    }
};

// ========================================
// USUARIOS (USERS)
// ========================================
export const authAPI = {
    async login(data: LoginDTO): Promise<AuthResponse> {
        const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Error al iniciar sesión");
        }
        return response.json();
    },
    async getMe(): Promise<{ user: User }> {
        const response = await fetch(`${API_URL}/auth/me`, {
        headers: getHeaders(),
        });
        if (!response.ok) {
            throw new Error("Error al obtener información del usuario");
        }
        return response.json();
    },
};