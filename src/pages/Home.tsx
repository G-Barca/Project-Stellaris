import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Destaque */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950">
        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-6">
          O futuro do turismo chegou!
        </p>
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
          Viaje além dos<br />
          <span className="text-gray-400">limites da Terra</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mb-10">
          Experiências únicas em órbita terrestre, na Lua, ao infinito e além. 
          Reservas abertas para 2027.
        </p>
        <div className="flex gap-4">
          <Link
            to="/packages"
            className="bg-white text-gray-950 px-8 py-3 text-sm tracking-wider hover:bg-gray-200 transition-colors"
          >
            Ver Pacotes
          </Link>
          <Link
            to="/about"
            className="border border-gray-700 text-gray-400 px-8 py-3 text-sm tracking-wider hover:border-gray-500 hover:text-white transition-colors"
          >
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <p className="text-white text-3xl font-bold mb-2">5</p>
            <p className="text-gray-500 text-sm tracking-wider uppercase">Destinos</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold mb-2">+200</p>
            <p className="text-gray-500 text-sm tracking-wider uppercase">Reservas</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold mb-2">100%</p>
            <p className="text-gray-500 text-sm tracking-wider uppercase">Seguro</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold mb-2">2027</p>
            <p className="text-gray-500 text-sm tracking-wider uppercase">Primeiro voo sem piloto humano</p>
          </div>
        </div>
      </section>

    </div>
  )
}