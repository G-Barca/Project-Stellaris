import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-white font-bold tracking-widest uppercase">
          Project Stellaris
        </p>

        <div className="flex gap-6">
          <Link to="/" className="text-gray-500 text-sm hover:text-white transition-colors">Início</Link>
          <Link to="/packages" className="text-gray-500 text-sm hover:text-white transition-colors">Pacotes</Link>
          <Link to="/about" className="text-gray-500 text-sm hover:text-white transition-colors">Sobre</Link>
          <Link to="/faq" className="text-gray-500 text-sm hover:text-white transition-colors">FAQ</Link>
          <Link to="/team" className="text-gray-500 text-sm hover:text-white transition-colors">Equipe</Link>
        </div>

        <p className="text-purple-600 text-xs">
          © 2026 Project Stellaris — FIAP Global Solution
        </p>

      </div>
    </footer>
  )
}