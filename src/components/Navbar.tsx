import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-white text-xl font-bold tracking-widest uppercase">
          Project Stellaris
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Home
          </Link>
          <Link to="/packages" className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Pacotes
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Sobre
          </Link>
          <Link to="/faq" className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            FAQ
          </Link>
          <Link to="/team" className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Equipe
          </Link>
          <Link to="/packages" className="bg-white text-gray-950 text-sm px-4 py-2 rounded hover:bg-gray-200 transition-colors tracking-wider">
            Reservar
          </Link>
        </div>

      </div>
    </nav>
  )
}