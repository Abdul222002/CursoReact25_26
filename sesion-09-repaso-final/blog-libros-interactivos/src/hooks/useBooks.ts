/* Crear un hook personalizado que se llame usehooks que permita gestionar la carga de libors manteniendo el estado de errores y si estamos o no cargando*/
import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import { fetchBooks } from "../services/api";

 interface UseBooksReturn {
    books: Book[];
    loading: boolean;
    error: string | null;
    cargarLibros: () => void;
}


export function useBooks():UseBooksReturn {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //Aqui se podria agregar la logica para cargar los libros usando fetchBooks y actualizar el estado de loading y error en consecuencia

    
    //Aqui se podria agregar la logica para cargar los libros al montar el componente
    const cargarLibros= () => {
        setLoading(true);
        setError(null);

        fetchBooks()
            .then((data) => 
                setBooks(data)
            )
            .catch((err) => 
                setError(err.message)
            )
            .finally(() =>
                setLoading(false)
            );
    }
    useEffect(() => {
        cargarLibros();
    }, []);

    return { books, loading, error ,cargarLibros:cargarLibros};
}



