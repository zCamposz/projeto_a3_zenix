import React from "react";
function Header() {
  return (
    <header 
      style={{
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        marginLeft: '10px' // Adicionando a margem para separar da sidebar
      }}
    >
      <h1>Bem-vindo ao Zenix!</h1>
    </header>
  );
}

export default Header;
