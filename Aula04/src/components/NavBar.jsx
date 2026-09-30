// src/components/NavBar.jsx
function NavBar() {
  const categorias = [
    { nome: 'Esportivos', href: '#esportivos' },
    { nome: 'Luxo', href: '#luxo' },
    { nome: 'Clássicos', href: '#classicos' },
  ];

  return (
    <nav className="navbar">
      <ul>
        {categorias.map((cat) => (
          <li key={cat.href}>
            <a href={cat.href}>{cat.nome}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;