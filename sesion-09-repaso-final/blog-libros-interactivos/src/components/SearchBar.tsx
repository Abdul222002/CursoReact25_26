import React from 'react'

interface SearchBarProps {
  busqueda: string;
  categorias: string[];
  categoriaActiva: string;
  onBusquedaChange: (nuevaBusqueda: string) => void;
  onCategoriaChange: (nuevaCategoria: string) => void;
}

const SearchBar = ( {busqueda, categorias, categoriaActiva, onBusquedaChange, onCategoriaChange }:SearchBarProps ) => {
  return (
    <div className='mb-8 space-y-4 '>
      <input   
        type='text'
        placeholder='Buscar por titutlo,autor,descripcion'
        value={busqueda}
        onChange={(e) => onBusquedaChange(e.target.value)}
      />
      <div className='flex flex-wrap gap-2 mt-2'>
        <button
          className='cursor-pointer btn btn-primary'
          onClick={() => onCategoriaChange('')}
        >
          Todos
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`cursor-pointer btn ${categoriaActiva === categoria ? 'badge-active' : 'badge-category'}`}
            onClick={() => onCategoriaChange(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar