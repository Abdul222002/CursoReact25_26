import { useState } from "react";

const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY || "libros-favoritos";

const getFavoritosFromStorage = (): number[] => {
    const favoritosString = localStorage.getItem(STORAGE_KEY);
    return favoritosString ? JSON.parse(favoritosString) : [];
}

//Crear un hook personalizado llamado favoritos que guarde, un favorito elimine , un favorito que compruebe si un libro esta en favoritos y que cambie un favorito (si es favorito que lo quite y si no es favorito que lo añada)
interface UseFavoritosReturn {
    favoritos: number[];
    agregarFavorito: (id: number) => void;
    eliminarFavorito: (id: number) => void;
    esFavorito: (id: number) => boolean;
    toggleFavorito: (id: number) => void;   
}   

export function useFavoritos():UseFavoritosReturn {
    const [favoritos, setFavoritos] = useState<number[]>(getFavoritosFromStorage());

    /*const agregarFavorito = (id: number) => {
        setFavoritos((prevFavoritos) => {
            if (!prevFavoritos.includes(id)) {
                const nuevosFavoritos = [...prevFavoritos, id];
                localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosFavoritos));

            }
            return prevFavoritos;
        })
    };*/
    const agregarFavorito = (id: number) => {
        if (!favoritos.includes(id)) {
            const nuevosFavoritos = [...favoritos, id];
            setFavoritos(nuevosFavoritos);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosFavoritos));
        }
    }

    const eliminarFavorito = (id: number) => {
        if (favoritos.includes(id)) {
            const nuevosFavoritos = favoritos.filter((favId) => favId !== id);
            setFavoritos(nuevosFavoritos);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosFavoritos));
        }
    };
    const toggleFavorito = (id: number) => {
        if (favoritos.includes(id)) {
            eliminarFavorito(id);
        } else {
            agregarFavorito(id);
        }
    };
    const esFavorito = (id: number) => {
        return favoritos.includes(id);
    };
    return {
        favoritos,
        agregarFavorito,
        eliminarFavorito,
        esFavorito,
        toggleFavorito
    };
}                                                                                                                               


/*
    Crear un contexto global que se llame bookContext que guarde la logica de los libros 
    y crear un contexto llamado favoritoContext que guarde la logica de los favoritos y que 
    se puedan usar en cualquier componente de la aplicacion    
*/