import type { Package } from '../types'

export const packages: Package[] = [
  {
    id: 1,
    name: "Órbita Terrestre",
    destination: "Órbita Terrestre",
    description: "Experiencie a Terra de uma perspectiva única. 2 dias em órbita com vista privilegiada do planeta azul.",
    price: 450000,
    duration: "2 dias",
    availableSeats: 8,
    imageUrl: "https://imgs.search.brave.com/ioY9vZb9SXqLSqxVD3Vlp7X_uqejDxMZbhxumXGT8_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2VzY29sYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDUvb3JiaXRh/cy10ZXJyZXN0cmVz/LTEyNzY4MjE3MTgt/MTAwMHg2ODUuanBn",
    highlights: ["Vista 360° da Terra", "Passeio espacial", "Treinamento de gravidade zero", "Hospedagem na estação orbital"]
  },
  {
    id: 2,
    name: "Fim de Semana Lunar",
    destination: "Lua",
    description: "Pise na superfície lunar e contemple a Terra a 384.000 km de distância. Viva essa experiência única!.",
    price: 1500000,
    duration: "5 dias",
    availableSeats: 6,
    imageUrl: "https://imgs.search.brave.com/95u-PVNPKFvz2Oo0eRLAGvDHl7QFfXFJpF8Y-xjZdbc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcGFj/ZXZveWFnZXZlbnR1/cmVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMi9p/bWFnZS0yMTI3Lmpw/ZWc",
    highlights: ["Pouso na superfície lunar", "Coleta de amostras", "Foto na bandeira", "Kit exclusivo de astronauta"]
  },
  {
    id: 3,
    name: "Estação Espacial Internacional",
    destination: "ISS — 408km de altitude",
    description: "Viva como um astronauta profissional por 10 dias na maior estrutura espacial já construída!",
    price: 950000,
    duration: "10 dias",
    availableSeats: 14,
    imageUrl: "https://imgs.search.brave.com/SEr4ydTpA8aVkGJ-7TJ9bbOlii_B2KcEFJCHmnxRTdE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/OTM5MTcxNy92ZWN0/b3IvYXJ0d29yay1v/Zi1hLXNwYWNlLWhv/dGVsLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1vSzBKOU90/MV9MY2k1ZXB3bmk2/bXU2dGtLUFFlTmNj/dExUN1lOSldkV2pV/PQ",
    highlights: ["Convivência com astronautas", "Experimentos científicos", "Aurora boreal vista do espaço", "Certificado NASA"]
  },
  {
    id: 4,
    name: "Volta ao Mundo",
    destination: "Órbita Baixa",
    description: "O pacote introdutório ao turismo espacial. Dê uma volta completa ao redor da Terra em apenas 120 minutos.",
    price: 580000,
    duration: "1 dia",
    availableSeats: 32,
    imageUrl: "https://imgs.search.brave.com/amm9rxEy_3ejrdLHAMUgCJp7Pa_-LF3N0SYlnuc1khE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODY4/ODcxNDA4L3B0L2Zv/dG8vc3BhY2Utc2h1/dHRsZS1vbi10aGUt/YmFja2dyb3VuZC1v/Zi1yaXNpbmctc3Vu/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1TbnBpX19KSWU3/YWloeEpqcndNcjVC/Z2EwRmMzcGcxbWhL/MGJncWVzVjBzPQ",
    highlights: ["Lançamento ao vivo", "16 pôr do sol em um dia", "Traje espacial oficial", "Jantar de bordo"]
  },
  {
    id: 5,
    name: "Expedição Marte 2027",
    destination: "Marte",
    description: "Para os mais ousados. A primeira expedição comercial ao planeta vermelho. Vagas extremamente limitadas.",
    price: 8500000,
    duration: "14 meses",
    availableSeats: 6,
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
    highlights: ["Primeiro turista em Marte", "Exploração da superfície", "Pesquisa científica", "Legado histórico garantido"]
  },
  {
    id: 6,
    name: "Experiência Interestelar",
    destination: "Europa",
    description: "A viagem mais ambiciosa de todas. viage para EUROPA, a lua de Júpiter, esta testemunhe a beleza de Jupiter",
    price: 3000000000,
    duration: "6 anos",
    availableSeats: 10,
    imageUrl: "https://www.bstorytelling.com.br/wp-content/uploads/2014/11/o-INTERSTELLAR-TRAILER-facebook-e1415639451891.jpg",
    highlights: ["Viagem interestelar", "Visite exoplanetas", "Contato com vida alienígena não inteligente", "Futura casa da humanidade"]


  }
]