export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-950 px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4">
          Sobre nós
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-10">
          A empresa por trás<br />
          <span className="text-gray-400">do futuro da humanidade</span>
        </h1>
        <div className="border-l border-gray-700 pl-8 mb-16">

          <h2 className="text-white text-xl font-semibold mb-4">Nossa Missão</h2>
          <p className="text-gray-400 leading-relaxed">
            A Project Stellaris nasceu com o objetivo de tornar o espaço acessível para 
            quem sempre sonhou em ir além. Combinamos tecnologia de ponta, segurança 
            absoluta e experiências únicas para levar você a destinos que pouquíssimos 
            humanos já visitaram.
          </p>
        </div>

	{/* Sobre */}

        <div className="border-l border-gray-700 pl-8 mb-16">
          <h2 className="text-white text-xl font-semibold mb-4">
            Impacto Global
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Nosso projeto está alinhado com os Objetivos de Desenvolvimento 
            Sustentável da ONU, contribuindo para a inovação tecnológica e 
            o crescimento econômico sustentável.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { num: '9', label: 'Indústria e Inovação' },
              { num: '8', label: 'Crescimento Econômico' },
              { num: '13', label: 'Ação Climática' },
            ].map(ods => (
              <div key={ods.num} className="border border-gray-800 p-4">
                <p className="text-white text-2xl font-bold mb-1">ODS {ods.num}</p>
                <p className="text-gray-500 text-sm">{ods.label}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="border-l border-gray-700 pl-8">
          <h2 className="text-white text-xl font-semibold mb-4">
            A Nova Economia Espacial
          </h2>
          <p className="text-gray-400 leading-relaxed">
            O que antes era ficção científica agora é realidade. Satélites monitoram 
            o clima, orientam o agronegócio e conectam regiões remotas. Missões espaciais 
            abrem caminhos para mineração, turismo orbital e colonização. A Stellaris 
            faz parte dessa nova fronteira econômica.
          </p>
        </div>

      </div>
    </div>
  )
}