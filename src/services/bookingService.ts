import type { Booking } from '../types'

const bookings: Booking[] = []

export const bookingService = {
  
  create(booking: Omit<Booking, 'id' | 'status'>): Booking {
    const newBooking: Booking = {
      ...booking,
      id: bookings.length + 1,
      status: 'pendente'
    }
    bookings.push(newBooking)
    return newBooking
  },
  update(id: number, data: Partial<Booking>): Booking | undefined {
  const index = bookings.findIndex(b => b.id === id)
  if (index === -1) return undefined
  bookings[index] = { ...bookings[index], ...data }
  return bookings[index]
  },

  delete(id: number): boolean {
  const index = bookings.findIndex(b => b.id === id)
  if (index === -1) return false
  bookings.splice(index, 1)
  return true
  },

  getAll(): Booking[] {
    return bookings
  }
  
}