// zenix_api.js
import express from 'express'
import cors from 'cors'
import { GoogleGenerativeAI } from '@google/generative-ai'

const app = express()
const port = 3001

// Configurações básicas
app.use(cors())
app.use(express.json())

// Chave da API - substitua pela sua chave real
const genAI = new GoogleGenerativeAI("AIzaSyBwa0hDpDjxCY5pA8mRenpd7l9GASdzqUU")

// Rota de teste da API
app.get('/', (req, res) => {
  res.send('Zenix API está rodando.')
})

// Rota que recebe os dados da agência e responde com IA
app.post('/agencia/analise', async (req, res) => {
  const { nome, endereco, status, horario, manutencao } = req.body

  const prompt = `Sou um assistente bancário. Uma agência chamada ${nome} localizada em ${endereco} está ${status ? 'aberta' : 'fechada'}, funcionando das ${horario}, e ${manutencao ? 'com manutenção em andamento' : 'sem manutenção'}. Dê uma resposta amigável explicando a situação para o cliente.`

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

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:3001}`)
})
