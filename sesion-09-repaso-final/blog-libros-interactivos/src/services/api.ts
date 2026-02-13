/*Crear un servicio llamado api.ts que contemple las funcionalidades puras de js como seria, la funcion fetchbooks
, la funcionbookbyid.Construir aqui la base de variables que apunten a los libros y a las imagenes*/


import type { Book } from "../types/book";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${BASE_URL}/api/books`;
const IMAGES_URL = `${BASE_URL}`;


//Funcion para obtener todos los libros

export const fetchBooks = async (): Promise< Book[]> => {
    try {
        const responese = await fetch(API_URL);
        if (!responese.ok) {
            throw new Error('Error al obtener los libros');
        }
        
        return responese.json(); 
    } catch (error) {
        throw new Error(`Error al obtener los libros: ${error}`);
    }
}

//Funcion para obtener un libro por su id
export const fetchBookById = async (id: number): Promise<Book> => {
    try {
        const responese = await fetch(`${API_URL}/${id}`);
        if (!responese.ok) {
            throw new Error('Error al obtener el libro');
        }
        return responese.json();
    } catch (error) {
        throw new Error(`Error al obtener el libro: ${error}`);
    }
}