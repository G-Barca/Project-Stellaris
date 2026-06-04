import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-white text-xl font-bold tracking-widest uppercase">
          Project Stellaris
        </Link>

        {/* desktop */}

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Início
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

        {/* menu hamburguer */}

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* mobile */}

      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Início
          </Link>
          <Link to="/packages" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Pacotes
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Sobre
          </Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            FAQ
          </Link>
          <Link to="/team" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white text-sm tracking-wider transition-colors">
            Equipe
          </Link>
          <Link to="/packages" onClick={() => setMenuOpen(false)} className="bg-white text-gray-950 text-sm px-4 py-2 text-center hover:bg-gray-200 transition-colors tracking-wider">
            Reservar
          </Link>
        </div>
      )}

    </nav>
  )
}