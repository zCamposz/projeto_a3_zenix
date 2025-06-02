import express from 'express'
import cors from 'cors'
import { GoogleGenerativeAI } from '@google/generative-ai'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

// Chave da API
const genAI = new GoogleGenerativeAI("AIzaSyBwa0hDpDjxCY5pA8mRenpd7l9GASdzqUU")

// Rota de teste da API
app.get('/', (req, res) => {
  res.send('Zenix API rodando.')
})

// Rota que recebe os dados da agência e responde
app.post('/agencia/analise', async (req, res) => {
  const { nome, endereco, status, horario, manutencao } = req.body

  const prompt = `Sou um assistente bancário da Zenix. Uma agência da Zenix ${nome} está ${status ? 'aberta' : 'fechada'}, funcionando das ${horario}, e ${manutencao ? 'com manutenção em andamento' : 'sem manutenção'}. Dê uma resposta amigável explicando a situação para o cliente.`

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
    const result = await model.generateContent(prompt)
    const response = await result.response.text()
    res.json({ resposta: response })
  } catch (error) {
    console.error(error)
    res.status(500).json({ erro: 'Erro ao gerar resposta da IA.' })
  }
})

app.post('/ia/pergunta', async (req, res) => {
  const { pergunta } = req.body

  try {
    const agenciasTexto = agencias.map(a => `- Nome: ${a.nome}\n  Endereço: ${a.endereco}\n  Região: ${a.regiao}\n  Horário: 09:00 às 17:00\n`).join('\n')

    const prompt = `Você é um assistente bancário da Zenix. Responda com base APENAS na lista de agências.
Agências cadastradas:
${agencias.map(a => `- ${a.nome}, endereço: ${a.endereco}, bairro: ${a.endereco.split(',')[0]}, região: ${a.regiao}, horário: 09:00 às 17:00`).join('\n')}

Pergunta: ${pergunta}

Responda de forma clara, objetiva, com o nome e endereço da agência mais próxima. Não invente dados. Não use emojis ou agradecimentos.`

      console.log("[IA] Enviando prompt:\n", prompt)

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
    const result = await model.generateContent(prompt)
    const response = await result.response.text()
    res.json({ resposta: response })
  } catch (error) {
    console.error('Erro ao consultar IA:', error)
    console.log('Prompt usado:\n', prompt)
    res.status(500).json({ erro: 'Erro ao consultar IA.' })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:3001`)
})
