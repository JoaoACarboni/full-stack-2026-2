// src/components/Header.jsx (versão com menu)
import NavBar from './NavBar';
import './Header.css';


function Header() {
  return (
    <header className="site-header">
      <div className="logo">🚗 AutoStore</div>
      <NavBar />
    </header>
  );
}

export default Header;