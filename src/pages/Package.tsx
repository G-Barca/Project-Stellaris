import { packageService } from '../services/packageService'
import PackageCard from '../components/PackageCard'

export default function Packages() {
  const packages = packageService.getAll()

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-20">
      
      {/* Header */}

      <div className="max-w-7xl mx-auto mb-16 text-center">
        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4">
          Explore o universo
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Nossos Pacotes
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Escolha seu destino e dê o primeiro passo rumo às estrelas.
        </p>
      </div>

      {/* Grid */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <PackageCard key={pkg.id} package={pkg} />
        ))}
      </div>

    </div>
  )
}