import { useContext } from "react";
import {  IncidentsContext } from "../context/IndicidentsContext";

export function useIncidents() {
  const context = useContext(IncidentsContext);
  if (!context) {
    throw new Error("useIncidents debe ser usado dentro de un IncidentsProvider");
  }
  return context;
}


