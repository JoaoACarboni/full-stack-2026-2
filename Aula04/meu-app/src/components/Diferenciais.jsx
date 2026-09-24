// src/components/Diferenciais.jsx
function Diferenciais() {
  const itens = [
    'Veículos revisados e com garantia',
    'Financiamento facilitado',
    'Avaliação do seu usado na troca',
  ];

  return (
    <ul className="lista-diferenciais">
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Diferenciais;