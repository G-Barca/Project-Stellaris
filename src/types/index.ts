export interface Package {
  id: number
  name: string
  destination: string
  description: string
  price: number
  duration: string
  availableSeats: number
  imageUrl: string
  highlights: string[]
}

export type BookingStatus = "pendente" | "confirmado" | "cancelado"

export interface Booking {
  id: number
  packageId: number
  passengerName: string
  email: string
  numberOfPeople: number
  travelDate: string
  status: BookingStatus
}