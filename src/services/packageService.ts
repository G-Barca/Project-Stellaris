import type { Package } from '../types'

const BASE = 'http://localhost:8080'

export const packageService = {

  async getAll(): Promise<Package[]> {
    const response = await fetch(`${BASE}/pacote`)
    const data = await response.json()
    return data
  },

  async getById(id: number): Promise<Package | undefined> {
    const response = await fetch(`${BASE}/pacote/${id}`)
    if (!response.ok) return undefined
    const data = await response.json()
    return data
  }

}
