import { useState } from 'react';
import './App.css';
import Header from './components/Header';  // Importa o Header
import MainContent from './components/MainContent';  // Importa o MainContent

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainContent />
      
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;