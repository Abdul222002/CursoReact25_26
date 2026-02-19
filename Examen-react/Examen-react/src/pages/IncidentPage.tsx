import { useIncidents } from "../hooks/useIncidents";
import IncidentCard from "../components/IncidentCard";

const IncidentPage = () => {
  const { incidents, loading } = useIncidents();

  if (loading) {
    return <p>Cargando incidencias...</p>;
  }

  return (
    <section>
      <h2>Incidencias</h2>
      {incidents.length === 0 ? (
        <p>No hay incidencias registradas</p>
      ) : (
        <div className="cards-grid">
          {incidents.map((incident) => (
            <IncidentCard key={incident.id} incident={incident} />
          ))}
        </div>
      )}
    </section>
  );
};

export default IncidentPage;