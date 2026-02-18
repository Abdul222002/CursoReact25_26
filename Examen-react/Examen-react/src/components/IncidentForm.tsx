import { useActionState } from "react";
import { useIncidents } from "../hooks/useIncidents";

type FormState = {
  success: boolean;
  message: string;
  // error ?: string
};

const IncidentForm = () => {
  const { addIncident } = useIncidents();

  // funcion para manejar el envío
  const formAction = async (
    _prev: FormState,
    formData: FormData,
  ): Promise<FormState> => {
    const title = formData.get("title")?.toString().trim() || "";
    const description = formData.get("description")?.toString().trim() || "";
    const priority = formData.get("priority")?.toString().trim() || "";

    if (!title || !description || !priority) {
        return { success: false, message: "Todos los campos son obligatorios" };
    }

    await addIncident({ title, description, priority: priority as "alta" | "media" | "baja" });

    return ({ success: true, message: "Incidente creado exitosamente" });
  };

  const [state, submitAction, isPending] = useActionState(formAction, {
    success: false,
    message: "",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Sección Formulario: Centrado y estrecho */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <form action={submitAction} className="form">
            <h2 className="text-2xl font-extrabold mb-6 text-center text-gray-900 tracking-tight">
                Registrar Nuevo Incidente
            </h2>

            {state.message && (
              <div
                className={`p-4 rounded-xl mb-6 text-sm font-medium text-center ${
                  state.success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {state.message}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="form-label"
                >
                  Titulo del incidente
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-input"
                  placeholder="Ej. Incidente de seguridad"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="form-label"
                >
                    Descripción del incidente
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-textarea"
                  placeholder="Ej. Se detectó un acceso no autorizado en el sistema..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="priority"
                  className="form-label"
                >
                  Prioridad
                </label>
                <select
                  id="priority"
                  name="priority"
                  className="form-select"
                  required
                >
                  <option value="">Seleccione una prioridad</option>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn btn-primary w-full py-3 shadow-lg shadow-blue-100"
                  disabled={isPending}
                >
                  {isPending ? "Procesando..." : "Registrar Incidente"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* ----------------- Sección Lista -------------------- */}
        {/* <div className="border-t border-gray-100 pt-12">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Listado de Incidentes
            </h2>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
              Directorio Activo
            </span>
          </div>
          <CompanyList />
        </div> */}
      </div>
    </div>
  );
};

export default IncidentForm;