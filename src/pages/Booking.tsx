import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { packageService } from '../services/packageService'
import { bookingService } from '../services/bookingService'
import type { Package } from '../types'

export default function Booking() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [pkg, setPkg] = useState<Package | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    passengerName: '',
    email: '',
    numberOfPeople: 1,
    travelDate: ''
  })

  useEffect(() => {
    packageService.getById(Number(id))
      .then(data => setPkg(data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">Carregando...</p>
      </div>
    )
  }

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">Pacote não encontrado.</p>
      </div>
    )
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!formData.passengerName || !formData.email || !formData.travelDate) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    if (!formData.email.includes('@')) {
      setError('Por favor, insira um e-mail válido.')
      return
    }

    try {
      await bookingService.create({
        packageId: pkg!.id,
        passengerName: formData.passengerName,
        email: formData.email,
        numberOfPeople: Number(formData.numberOfPeople),
        travelDate: formData.travelDate
      })
      setSubmitted(true)
      setError('')
    } catch (err) {
      setError('Erro ao confirmar reserva. Tente novamente.')
      console.error(err)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-6">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">Reserva confirmada</p>
        <h2 className="text-white text-3xl font-bold mb-4">Nos vemos no espaço.</h2>
        <p className="text-gray-400 mb-8">
          Sua reserva para <span className="text-white">{pkg.name}</span> foi recebida com sucesso.
        </p>
        <button
          onClick={() => navigate('/packages')}
          className="border border-gray-700 text-gray-400 px-8 py-3 text-sm tracking-wider hover:border-white hover:text-white transition-colors"
        >
          Ver outros pacotes
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4">Reserva</p>
        <h1 className="text-white text-3xl font-bold mb-2">{pkg.name}</h1>
        <p className="text-gray-500 mb-10">
          {pkg.destination} · {pkg.duration} · {pkg.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm tracking-wider uppercase">Nome completo</label>
            <input type="text" name="passengerName" value={formData.passengerName} onChange={handleChange}
              className="bg-transparent border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
              placeholder="Seu nome" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm tracking-wider uppercase">E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="bg-transparent border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
              placeholder="seu@email.com" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm tracking-wider uppercase">Número de passageiros</label>
            <input type="number" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange}
              min={1} max={pkg.availableSeats}
              className="bg-transparent border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm tracking-wider uppercase">Data pretendida</label>
            <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange}
              className="bg-transparent border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button type="submit"
            className="bg-white text-gray-950 py-3 text-sm tracking-wider hover:bg-gray-200 transition-colors mt-2">
            Confirmar Reserva
          </button>
        </form>
      </div>
    </div>
  )
}