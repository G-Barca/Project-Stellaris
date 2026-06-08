const team = [
  {
    nome: "Guilherme Barca",
    rm: "RM568517",
    turma: "1TDSB",
    github: "https://github.com/G-Barca",
    linkedin: "https://www.linkedin.com/in/o-guilherme-barca/",
    foto: "/images/guilherme.png"
  },
  {
    nome: "Juliana Marques",
    rm: "",
    turma: "1TDSB",
    github: "",
    linkedin: "",
    foto: "/images/juliana.png"
  },
  {
    nome: "Lucas Kosio",
    rm: "",
    turma: "1TDSB",
    github: "",
    linkedin: "",
    foto: "/images/lucas.png"
  }
]

export default function Integrantes() {
  return (
    <div className="min-h-screen bg-gray-950 px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4">
          Nossa equipe
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Quem somos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="border border-gray-800 p-6 flex flex-col items-center text-center">

              <img
                src={member.foto }
                alt={member.nome}
                className="w-24 h-24 rounded-full object-cover mb-4 grayscale"
              />

              <h3 className="text-white font-semibold mb-1">{member.nome}</h3>
              <p className="text-gray-500 text-sm mb-1">{member.rm}</p>
              <p className="text-gray-500 text-sm mb-6">{member.turma}</p>

              <div className="flex gap-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-white transition-colors tracking-wider"
                >
                  GitHub
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-white transition-colors tracking-wider"
                >
                  LinkedIn
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}