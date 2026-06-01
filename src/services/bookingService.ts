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

  getAll(): Booking[] {
    return bookings
  }
}