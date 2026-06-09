import type { Package } from '../types'
import { packages as mockPackages } from '../data/packages'

const BASE = 'https://stellaris-quarkus-6.onrender.com'

export const packageService = {

  async getAll(): Promise<Package[]> {
    try {
      const response = await fetch(`${BASE}/pacote`)
      if (!response.ok) return mockPackages
      const data = await response.json()
      if (!data || data.length === 0) return mockPackages
      return data
    } catch {
      return mockPackages
    }
  },

  async getById(id: number): Promise<Package | undefined> {
    try {
      const response = await fetch(`${BASE}/pacote/${id}`)
      if (!response.ok) return mockPackages.find(p => p.id === id)
      const data = await response.json()
      return data
    } catch {
      return mockPackages.find(p => p.id === id)
    }
  }

}