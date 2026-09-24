// src/App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import TabelaVeiculos from './components/TabelaVeiculos';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* outras seções da página entram aqui */}
      <Sobre />
      <Diferenciais />
      <TabelaVeiculos />
      <Footer />
    </div>
  );
}

export default App;