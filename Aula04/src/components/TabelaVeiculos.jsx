// src/components/TabelaVeiculos.jsx
function TabelaVeiculos() {
  const veiculos = [
    { modelo: 'Civic Si', categoria: 'Esportivo', preco: 'R$ 189.000' },
    { modelo: 'BMW Série 7', categoria: 'Luxo', preco: 'R$ 620.000' },
    { modelo: 'Fusca 1972', categoria: 'Clássico', preco: 'R$ 75.000' },
    { modelo: 'Gol 1993', categoria: 'Clássico', preco: 'R$ 35.000' },
  ];

  return (
    <table className="tabela-veiculos">
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Categoria</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {veiculos.map((v) => (
          <tr key={v.modelo}>
            <td>{v.modelo}</td>
            <td>{v.categoria}</td>
            <td>{v.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaVeiculos;