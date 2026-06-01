import type { Package } from '../types'
import { packages } from '../data/packages'

export const packageService = {
  getAll(): Package[] {
    return packages
  },

  getById(id: number): Package | undefined {
    return packages.find(pkg => pkg.id === id)
  }
}
