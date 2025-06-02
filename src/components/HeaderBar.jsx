import React, { useState } from 'react'
import './HeaderBar.css'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import logo from '../assets/logo.png'

const HeaderBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Exemplo: redireciona para a página da região se for igual ao nome
      navigate(`/regiao/${searchTerm.toLowerCase()}`)
      setSearchTerm('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <header className="headerbar">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <button onClick={() => navigate('/')}>Todos os Mapas</button>
        <button onClick={() => navigate('/regiao/sul')}>Zona Sul</button>
        <button onClick={() => navigate('/regiao/norte')}>Zona Norte</button>
        <button onClick={() => navigate('/regiao/central')}>Zona Central</button>
        <button onClick={() => navigate('/regiao/leste')}>Zona Leste</button>
        <button onClick={() => navigate('/sobre')}>Sobre nós</button>
      </div>

      <div className="right-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Coloque a região da agência"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  )
}

export default HeaderBar
