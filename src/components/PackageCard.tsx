import { Link } from 'react-router-dom'
import type { Package } from '../types'

interface PackageCardProps {
  package: Package
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="border border-gray-800 hover:border-gray-600 transition-colors group">
      
      {/* Imagem */}

      <div className="overflow-hidden h-48">
        <img
          src={pkg.imageUrl}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Conteúdo */}

      <div className="p-6">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">
          {pkg.destination}
        </p>
        <h3 className="text-white text-lg font-semibold mb-2">
          {pkg.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {pkg.description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Duração</p>
            <p className="text-white text-sm">{pkg.duration}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs uppercase tracking-wider">A partir de</p>
            <p className="text-white text-sm">
              {pkg.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>
        </div>

        <Link
          to={`/booking/${pkg.id}`}
          className="block text-center border border-gray-700 text-gray-400 py-2 text-sm tracking-wider hover:border-white hover:text-white transition-colors"
        >
          Reservar
        </Link>

      </div>
    </div>
  )
}