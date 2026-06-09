import { Link } from 'react-router-dom'
import type { Package } from '../types'

interface PackageCardProps {
  package: Package
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const fallbackImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=800",
  2: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=800",
  3: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800",
  4: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
  5: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
  6: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=800"
}

const imageUrl = pkg.imageUrl || fallbackImages[pkg.id] || ""
  return (
    <div className="border border-gray-800 hover:border-gray-600 transition-colors group">
      
      {/* Imagem */}

      <div className="overflow-hidden h-48">
        <img
          src={imageUrl}
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