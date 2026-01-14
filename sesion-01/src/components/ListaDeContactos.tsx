import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Contacto {
  id: string
  nombre: string
  telf: string
  email: string
}

const ListaDeContactos = () => {
  const [contactos, setContactos] = useState<Contacto[]>([])
  const [form, setForm] = useState<Omit<Contacto, 'id'>>({
    nombre: '',
    telf: '',
    email: ''
  })

  const actualizarCampo = (
    campo: keyof typeof form,
    valor: string
  ) => {
    setForm({
      ...form,
      [campo]: valor
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nuevoContacto: Contacto = {
      id: uuidv4(),
      ...form
    }

    setContactos([...contactos, nuevoContacto])
    
    // Limpiar formulario
    setForm({
      nombre: '',
      telf: '',
      email: ''
    })
  }

  const eliminarContacto = (id: string) => {
    setContactos(contactos.filter(c => c.id !== id))
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">Lista de Contactos</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            value={form.nombre}
            onChange={e => actualizarCampo('nombre', e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Teléfono</label>
          <input
            type="text"
            value={form.telf}
            onChange={e => actualizarCampo('telf', e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={e => actualizarCampo('email', e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Agregar contacto
        </button>
      </form>

      <hr className="my-4" />

      {contactos.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay contactos almacenados
        </p>
      ) : (
        <ul className="space-y-2">
          {contactos.map(c => (
            <li
              key={c.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <div>
                <p className="font-semibold">{c.nombre}</p>
                <p className="text-sm">{c.telf}</p>
                <p className="text-sm">{c.email}</p>
              </div>
              <button
                onClick={() => eliminarContacto(c.id)}
                className="text-red-600 hover:underline"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaDeContactos
