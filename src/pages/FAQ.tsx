export default function FAQ() {
  const faqs = [
    {
      pergunta: "Preciso de treinamento para viajar ao espaço?",
      resposta: "Sim. Todos os passageiros passam por um programa de treinamento de 30 dias antes do voo, incluindo simulações de gravidade zero e procedimentos de segurança."
    },
    {
      pergunta: "Qual a idade mínima para embarcar?",
      resposta: "A idade mínima é 21 anos. Passageiros acima de 50 anos precisam de laudo médico aprovado pela nossa equipe."
    },
    {
      pergunta: "O que está incluído no pacote?",
      resposta: "Todos os pacotes incluem treinamento pré-voo, traje espacial, hospedagem no destino, alimentação e seguro viagem intergaláctico."
    },
    {
      pergunta: "Como funciona o pagamento?",
      resposta: "Aceitamos pagamento em até 50x no cartão de crédito."
    },
    {
      pergunta: "É seguro viajar ao espaço?",
      resposta: "Trabalhamos com as tecnologias mais avançadas do setor espacial. Nossa taxa de sucesso em missões é de 90% desde a fundação da empresa."
    },
    {
      pergunta: "Posso cancelar minha reserva?",
      resposta: "Cancelamentos com mais de 180 dias de antecedência recebem reembolso integral. Entre 90 e 180 dias, reembolso de 50%. Abaixo de 90 dias, sem reembolso."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4">
          Dúvidas frequentes
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-16">
          FAQ
        </h1>

        <div className="flex flex-col gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800 pb-8">
              <h3 className="text-white text-lg font-semibold mb-3">
                {faq.resposta}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {faq.pergunta}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}