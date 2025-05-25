require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

app.use(express.json());

app.post('/pergunte-ao-gemini', async (req, res) => {
  try {
    const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // ou "gemini-pro"
    const prompt = req.body.prompt;
    const result = await model.generateContent(prompt);
    const resposta = result.response.text();
    res.json({ resposta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/hello-world');
});