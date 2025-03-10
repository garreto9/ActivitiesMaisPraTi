import React, { useState } from 'react';
import '../styles/NameFilter.css';

// Componente que filtra uma lista de nomes
function NameFilter() {
  // Estado para armazenar o texto do filtro
  const [filter, setFilter] = useState('');

  // Lista de nomes para filtrar
  const names = [
    'João Silva',
    'Maria Santos',
    'Pedro Oliveira',
    'Ana Souza',
    'Carlos Ferreira',
    'Mariana Costa',
    'Lucas Pereira',
    'Julia Lima',
    'Rafael Santos',
    'Beatriz Oliveira'
  ];

  // Filtra os nomes que contêm o texto digitado (ignorando maiúsculas/minúsculas)
  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="filter-container">
      <h2 className="filter-title">Filtro de Nomes</h2>
      
      {/* Campo de busca */}
      <div className="search-container">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Buscar nomes..."
          className="search-input"
        />
      </div>

      {/* Lista de nomes filtrados */}
      <ul className="name-list">
        {filteredNames.map((name, index) => (
          <li key={index} className="name-item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameFilter;
