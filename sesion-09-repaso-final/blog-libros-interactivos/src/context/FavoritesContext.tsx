import { createContext, ReactNode } from "react";
import { useFavoritos } from "../hooks/useFavoritos";

interface FavoritesContextType {
    favoritos: number[];
    agregarFavorito: (id: number) => void;  
    eliminarFavorito: (id: number) => void;
    esFavorito: (id: number) => boolean;
    toggleFavorito: (id: number) => void;
}


// 1.- Crear el contexto con createContext
export const FavoritesContext = createContext<FavoritesContextType | null>({
    favoritos: [],
    agregarFavorito: () => {},
    eliminarFavorito: () => {},
    esFavorito: () => false,
    toggleFavorito: () => {}
});

// 2.- Crear el provider que envuelva a la aplicacion y que provea el valor del contexto

export const FavoritesProvider = ({ children }: { children: ReactNode }): JSX.Element => {
       const favoritos = useFavoritos();

       return(
        <FavoritesContext.Provider value={favoritos}>
            {children}
        </FavoritesContext.Provider>
       )
}