import type { Booking } from '../types'

const BASE = 'http://localhost:8080'

export const bookingService = {

  async create(booking: Omit<Booking, 'id' | 'status'>): Promise<void> {
    await fetch(`${BASE}/reserva`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    })
  },

  async update(id: number, data: Partial<Booking>): Promise<void> {
    const current = await bookingService.getById(id)
    if (!current) return
    await fetch(`${BASE}/reserva`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...current, ...data })
    })
  },

  async delete(id: number): Promise<void> {
    await fetch(`${BASE}/reserva/${id}`, {
      method: 'DELETE'
    })
  },

  async getAll(): Promise<Booking[]> {
    const response = await fetch(`${BASE}/reserva`)
    const data = await response.json()
    return data
  },

  async getById(id: number): Promise<Booking | undefined> {
    const response = await fetch(`${BASE}/reserva/${id}`)
    if (!response.ok) return undefined
    return response.json()
  }

}
