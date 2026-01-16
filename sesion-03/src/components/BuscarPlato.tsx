import React from 'react'

interface BuscarPlatoProps {
  onSearch: (term: string) => void
}

const BuscarPlato = ({ onSearch }: BuscarPlatoProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <div className="max-w-md mx-auto mb-8">
      <input
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        type="text"
        placeholder="Buscar platos por nombre o ingredientes..."
      />
    </div>
  )
}

export default BuscarPlato