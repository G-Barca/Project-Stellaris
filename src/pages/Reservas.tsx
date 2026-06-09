import { useEffect, useState } from 'react'
import { bookingService } from '../services/bookingService'
import type { Booking } from '../types'

export default function Reservations() {
  const [reservations, setReservations] = useState<Booking[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editDate, setEditDate] = useState('')
  const [loading, setLoading] = useState(true)

  async function carregar() {
    const data = await bookingService.getAll()
    setReservations(data)
  }

  useEffect(() => {
    carregar().finally(() => setLoading(false))
  }, [])

  async function handleDelete(id: number) {
    await bookingService.delete(id)
    await carregar()
  }

  function handleEditStart(booking: Booking) {
    setEditingId(booking.id)
    setEditDate(booking.travelDate)
  }

  async function handleEditSave(id: number) {
    await bookingService.update(id, { travelDate: editDate })
    await carregar()
    setEditingId(null)
  }

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4">Gerenciamento</p>
        <h1 className="text-white text-4xl font-bold tracking-tight mb-16">Reservas</h1>

        {loading ? (
          <p className="text-gray-500">Carregando reservas...</p>
        ) : reservations.length === 0 ? (
          <p className="text-gray-500">Nenhuma reserva encontrada.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {reservations.map(reservation => (
              <div key={reservation.id} className="border border-gray-800 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-semibold">{reservation.passengerName}</p>
                    <p className="text-gray-500 text-sm">{reservation.email}</p>
                    <p className="text-gray-500 text-sm">
                      Pacote #{reservation.packageId} · {reservation.numberOfPeople} passageiro(s)
                    </p>

                    {editingId === reservation.id ? (
                      <div className="flex items-center gap-3 mt-2">
                        <input type="date" value={editDate} onChange={e => setEditDate(e.target.value)}
                          className="bg-transparent border border-gray-700 text-white px-3 py-1 text-sm focus:outline-none focus:border-gray-400" />
                        <button onClick={() => handleEditSave(reservation.id)}
                          className="text-white text-sm border border-gray-600 px-3 py-1 hover:border-white transition-colors">
                          Salvar
                        </button>
                        <button onClick={() => setEditingId(null)}
                          className="text-gray-500 text-sm hover:text-white transition-colors">
                          Cancelar
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">Data: {reservation.travelDate}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`text-xs tracking-wider uppercase px-3 py-1 border ${
                      reservation.status === 'confirmado'
                        ? 'border-green-800 text-green-400'
                        : reservation.status === 'cancelado'
                        ? 'border-red-800 text-red-400'
                        : 'border-gray-700 text-gray-400'
                    }`}>
                      {reservation.status}
                    </span>
                    <button onClick={() => handleEditStart(reservation)}
                      className="text-gray-400 text-sm hover:text-white transition-colors">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(reservation.id)}
                      className="text-red-400 text-sm hover:text-red-300 transition-colors">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
