import React, { useState } from 'react'

interface TarjetaProps {
  title: string
  description: string
  imagen?: string
  favourite?: boolean
}

const Tarjeta = ({
  title,
  description,
  imagen,
  favourite = false
}: TarjetaProps) => {

  const [isFavourite, setIsFavourite] = useState(favourite)

  return (
    <div
      className={`rounded-lg shadow-md p-6 cursor-pointer ${
        isFavourite
          ? 'bg-yellow-100 border-2 border-amber-600'
          : 'bg-white'
      }`}
      onClick={() => setIsFavourite(!isFavourite)}
    >
      {imagen && (
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={imagen}
          alt={title}
        />
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>

      {isFavourite && <span>⭐</span>}
    </div>
  )
}

export default Tarjeta


//Crear un formulario que se llame formulario usuario que gestione el nombre la edad y el id