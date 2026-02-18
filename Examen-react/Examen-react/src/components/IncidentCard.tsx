import { useState } from "react";
import type { Incident } from "../types";
import { useIncidents } from "../hooks/useIncidents";
import { useAuth } from "../hooks/useAuth";

/**
 * Tarjeta individual de incidente
 * Muestra información y botones de editar/eliminar
 */
interface Props {
  incident: Incident;
}

export default function IncidentCard({ incident }: Props) {
  const { removeIncident } = useIncidents();
  const { user } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    await removeIncident(incident.id);
    setShowConfirm(false);
  };

  return (
    <article className="card">
      <header className="card-header">
        <h3 className="card-title">{incident.title}</h3>
        <div className="card-badges">
          <span className={`badge badge-${incident.priority}`}>{incident.priority}</span>
          <span className={`badge badge-${incident.status}`}>{incident.status}</span>
        </div>
      </header>

      <p className="card-description">{incident.description}</p>

      <footer className="card-footer">
        <div className="card-date">
          {incident.createdAt
            ? new Date(incident.createdAt).toLocaleString()
            : ""}
        </div>
        {user && (
          <div>
            <button className="btn btn-danger" onClick={() => setShowConfirm(true)}>
              Eliminar
            </button>
          </div>
        )}
      </footer>

      {showConfirm && (
        <div>
          <p>¿Confirmas eliminar este incidente?</p>
          <button className="btn btn-danger" onClick={handleDelete}>
            Sí, eliminar
          </button>
          <button className="btn" onClick={() => setShowConfirm(false)}>
            Cancelar
          </button>
        </div>
      )}
    </article>
  );
}