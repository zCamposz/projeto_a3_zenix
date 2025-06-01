const agencias = [
  {
    id: 1,
    nome: 'Agência Bradesco Paulista',
    endereco: 'Av. Paulista, 1230 - Bela Vista, São Paulo - SP',
    regiao: 'Central',
    horario: '08h às 17h',
    caixas: 5,
    espera: '15 min'
  },
  {
    id: 2,
    nome: 'Agência Bradesco Santana',
    endereco: 'Rua Voluntários da Pátria, 4000 - Santana, São Paulo - SP',
    regiao: 'Norte',
    horario: '09h às 16h',
    caixas: 4,
    espera: '20 min'
  },
  {
    id: 3,
    nome: 'Agência Bradesco Mooca',
    endereco: 'Rua da Mooca, 1900 - Mooca, São Paulo - SP',
    regiao: 'Leste',
    horario: '08h às 17h',
    caixas: 3,
    espera: '25 min'
  },
  {
    id: 4,
    nome: 'Agência Bradesco Santo Amaro',
    endereco: 'Av. Adolfo Pinheiro, 1200 - Santo Amaro, São Paulo - SP',
    regiao: 'Sul',
    horario: '10h às 18h',
    caixas: 6,
    espera: '10 min'
  },
  {
    id: 5,
    nome: 'Agência Bradesco Lapa',
    endereco: 'Rua Clélia, 2300 - Lapa, São Paulo - SP',
    regiao: 'Oeste',
    horario: '08h às 17h',
    caixas: 4,
    espera: '18 min'
  },
  {
    id: 6,
    nome: 'Prime Tutoia-Urb.SP',
    endereco: 'Rua Tutoia, 500 - Vila Mariana, São Paulo - SP',
    regiao: 'Sul',
    horario: '09h às 16h',
    caixas: 4,
    espera: '20 min'
  },
  {
    id: 7,
    nome: 'Prime Av. Antártica',
    endereco: 'Av. Antártica, 900 - Barra Funda, São Paulo - SP',
    regiao: 'Oeste',
    horario: '08h às 17h',
    caixas: 5,
    espera: '15 min'
  },
  {
    id: 8,
    nome: 'Prime V. Clementino',
    endereco: 'Rua Pedro de Toledo, 980 - Vila Clementino, São Paulo - SP',
    regiao: 'Sul',
    horario: '10h às 18h',
    caixas: 6,
    espera: '12 min'
  },
  {
    id: 9,
    nome: 'Prime R. Boa Vista',
    endereco: 'Rua Boa Vista, 300 - Centro, São Paulo - SP',
    regiao: 'Central',
    horario: '08h às 17h',
    caixas: 3,
    espera: '30 min'
  },
  {
    id: 10,
    nome: 'Prime Indianopolis',
    endereco: 'Av. Indianópolis, 1500 - Indianópolis, São Paulo - SP',
    regiao: 'Sul',
    horario: '09h às 16h',
    caixas: 4,
    espera: '20 min'
  },
  {
    id: 11,
    nome: 'Prime H. Penteado-USP',
    endereco: 'Av. Heitor Penteado, 1000 - Sumaré, São Paulo - SP',
    regiao: 'Oeste',
    horario: '10h às 18h',
    caixas: 5,
    espera: '14 min'
  },
  {
    id: 12,
    nome: 'Prime Av. Sumare-USP',
    endereco: 'Av. Sumaré, 1200 - Perdizes, São Paulo - SP',
    regiao: 'Oeste',
    horario: '08h às 17h',
    caixas: 6,
    espera: '12 min'
  },
  {
    id: 13,
    nome: 'Urb Barra Funda',
    endereco: 'Rua Barra Funda, 150 - Barra Funda, São Paulo - SP',
    regiao: 'Oeste',
    horario: '09h às 16h',
    caixas: 3,
    espera: '28 min'
  },
  {
    id: 14,
    nome: 'Urb Berrini',
    endereco: 'Av. Eng. Luis Carlos Berrini, 1500 - Itaim Bibi, São Paulo - SP',
    regiao: 'Sul',
    horario: '08h às 17h',
    caixas: 4,
    espera: '20 min'
  },
  {
    id: 15,
    nome: 'Urb Oscar Freire',
    endereco: 'Rua Oscar Freire, 800 - Jardim Paulista, São Paulo - SP',
    regiao: 'Oeste',
    horario: '10h às 18h',
    caixas: 5,
    espera: '16 min'
  },
  {
    id: 16,
    nome: 'Urb Jardim Aricanduva',
    endereco: 'Av. Aricanduva, 5555 - Jardim Aricanduva, São Paulo - SP',
    regiao: 'Leste',
    horario: '08h às 17h',
    caixas: 4,
    espera: '22 min'
  },
  {
    id: 17,
    nome: 'Urb Heitor Penteado',
    endereco: 'Av. Heitor Penteado, 500 - Vila Madalena, São Paulo - SP',
    regiao: 'Oeste',
    horario: '09h às 16h',
    caixas: 3,
    espera: '26 min'
  },
  {
    id: 18,
    nome: 'Urb Nova Sumare',
    endereco: 'Av. Sumaré, 2200 - Perdizes, São Paulo - SP',
    regiao: 'Oeste',
    horario: '08h às 17h',
    caixas: 4,
    espera: '19 min'
  },
  {
    id: 19,
    nome: 'Urb Pacaembu',
    endereco: 'Rua Pacaembu, 1200 - Pacaembu, São Paulo - SP',
    regiao: 'Oeste',
    horario: '10h às 18h',
    caixas: 5,
    espera: '15 min'
  },
  {
    id: 20,
    nome: 'Urb Cambuci',
    endereco: 'Rua do Lavapés, 300 - Cambuci, São Paulo - SP',
    regiao: 'Central',
    horario: '08h às 17h',
    caixas: 4,
    espera: '20 min'
  },
  {
    id: 21,
    nome: 'Urb Vila Prel',
    endereco: 'Rua Doutor Luís Migliano, 900 - Vila Prel, São Paulo - SP',
    regiao: 'Sul',
    horario: '09h às 16h',
    caixas: 3,
    espera: '25 min'
  },
  {
    id: 22,
    nome: 'Prime Av. Angelica',
    endereco: 'Av. Angélica, 1700 - Consolação, São Paulo - SP',
    regiao: 'Central',
    horario: '08h às 17h',
    caixas: 4,
    espera: '18 min'
  },
  {
    id: 23,
    nome: 'Prime Pça S. Romero',
    endereco: 'Praça Santo Romero, 45 - Penha, São Paulo - SP',
    regiao: 'Leste',
    horario: '10h às 18h',
    caixas: 5,
    espera: '14 min'
  },
  {
    id: 24,
    nome: 'R. Boa Vista-USP',
    endereco: 'Rua Boa Vista, 400 - Centro, São Paulo - SP',
    regiao: 'Central',
    horario: '09h às 16h',
    caixas: 3,
    espera: '27 min'
  },
  {
    id: 25,
    nome: 'Prime PC. Panamerican',
    endereco: 'Praça Panamericana, 100 - Alto de Pinheiros, São Paulo - SP',
    regiao: 'Oeste',
    horario: '08h às 17h',
    caixas: 4,
    espera: '20 min'
  },
  {
    id: 26,
    nome: 'Prime G. Cotching',
    endereco: 'Rua Guilherme Cotching, 800 - Vila Maria, São Paulo - SP',
    regiao: 'Norte',
    horario: '10h às 18h',
    caixas: 5,
    espera: '13 min'
  },
  {
    id: 27,
    nome: 'Prime JD. Franca',
    endereco: 'Rua Jardim França, 300 - Jardim França, São Paulo - SP',
    regiao: 'Norte',
    horario: '08h às 17h',
    caixas: 4,
    espera: '19 min'
  },
  {
    id: 28,
    nome: 'Prime Santana-Urb.SP',
    endereco: 'Rua Dr. César, 500 - Santana, São Paulo - SP',
    regiao: 'Norte',
    horario: '09h às 16h',
    caixas: 4,
    espera: '22 min'
  },
  {
    id: 29,
    nome: 'Prime Tucuruvi-USP',
    endereco: 'Av. Tucuruvi, 100 - Tucuruvi, São Paulo - SP',
    regiao: 'Norte',
    horario: '10h às 18h',
    caixas: 5,
    espera: '14 min'
  },
  {
    id: 30,
    nome: 'Prime V. Guilherme',
    endereco: 'Av. Joaquina Ramalho, 700 - Vila Guilherme, São Paulo - SP',
    regiao: 'Norte',
    horario: '08h às 17h',
    caixas: 3,
    espera: '28 min'
  },
  {
    id: 31,
    nome: 'Maria P. Maia-ERC.USP',
    endereco: 'Rua Maria Prestes Maia, 350 - Santana, São Paulo - SP',
    regiao: 'Norte',
    horario: '09h às 16h',
    caixas: 4,
    espera: '20 min'
  },
  {
    id: 32,
    nome: 'Prime Penha-Urb.SP',
    endereco: 'Rua Dr. João Ribeiro, 1500 - Penha, São Paulo - SP',
    regiao: 'Leste',
    horario: '08h às 17h',
    caixas: 4,
    espera: '18 min'
  },
  {
    id: 33,
    nome: 'Prime Cap. do Socorro',
    endereco: 'Av. do Rio Bonito, 2500 - Capela do Socorro, São Paulo - SP',
    regiao: 'Sul',
    horario: '10h às 18h',
    caixas: 5,
    espera: '12 min'
  },
  {
    id: 34,
    nome: 'Urb Capela do Socorro',
    endereco: 'Rua Nossa Senhora do Bom Conselho, 100 - Capela do Socorro, São Paulo - SP',
    regiao: 'Sul',
    horario: '09h às 16h',
    caixas: 3,
    espera: '26 min'
  },
  {
    id: 35,
    nome: 'Av. Braz Leme-USP',
    endereco: 'Av. Braz Leme, 1300 - Santana, São Paulo - SP',
    regiao: 'Norte',
    horario: '08h às 17h',
    caixas: 4,
    espera: '20 min'
  },
  {
    id: 36,
    nome: 'Urb Penha',
    endereco: 'Rua Betari, 80 - Penha, São Paulo - SP',
    regiao: 'Leste',
    horario: '10h às 18h',
    caixas: 5,
    espera: '14 min'
  },
  {
    id: 37,
    nome: 'Urb Santana',
    endereco: 'Rua Alfredo Pujol, 500 - Santana, São Paulo - SP',
    regiao: 'Norte',
    horario: '08h às 17h',
    caixas: 4,
    espera: '18 min'
  }
];

export default agencias;