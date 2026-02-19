import { Link, useParams } from "react-router-dom"
import { fetchBookById } from "../services/api";


const BookDetailPage = ( { book } ) => {
  const { id } = useParams();

  const book = fetchBookById(id);
  return (
    <div className="mx-auto">
      <Link to="/">Volver</Link>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p> 
      <button>Añadir a favoritos</button>

    </div>
  )
}

export default BookDetailPage


  //Crear una aplicacion que me renderice las peliculas de la api 192.168.50.120:3000/movies cada vez que le doy 
// onclick en la tarjeta me añada a la en el navBar que lo añada al carrito
// y opaque la tarjeta y un boton de pagar que diga cuantos es el total si yo le doy a F5 siga opaca (como si lo hicieramos con favoritos) 

