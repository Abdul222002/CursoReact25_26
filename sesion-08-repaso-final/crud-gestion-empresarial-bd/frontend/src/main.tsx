import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import { CompaniesProvider } from "./context/CompaniesContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppFull from "./apps/AppFull";

// cambio por cada ejercicio el valor de App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CompaniesProvider>
        <BrowserRouter>
          <AppFull />
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </CompaniesProvider>
    </AuthProvider>
  </StrictMode>,
);
