import { useEffect, useState } from 'react'
import { packageService } from '../services/packageService'
import  PackageCard  from '../components/PackageCard'
import type { Package } from '../types'

export default function PackagePage() {
  const [packages, setPackages] = useState<Package[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    packageService.getAll()
      .then(data => setPackages(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">Carregando pacotes...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4">Destinos</p>
        <h1 className="text-white text-4xl font-bold tracking-tight mb-16">Pacotes disponíveis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </div>
  )
}
