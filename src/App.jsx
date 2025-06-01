import './App.css'
import HeaderBar from './components/HeaderBar'
import Footer from './components/Footer'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetalhesAgencia from './components/DetalhesAgencia'
import MapaAgencias from './components/MapaAgencias'
import AgenciasPorRegiao from './components/AgenciasPorRegiao'

function App() {
  return (
    <Router>
      <div className="app-container">
        <HeaderBar /> 
         <main className="main-center">
        <Routes>
          <Route path="/" element={<MapaAgencias />} />
            <Route path="/agencia/:id" element={<DetalhesAgencia />} />
            <Route path="/regiao/:regiao" element={<AgenciasPorRegiao />} />
          </Routes>
          </main>
      </div>
      <Footer />
    </Router>
    
    
  )
}

export default App
