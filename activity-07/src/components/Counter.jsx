import React, { useState } from 'react';
import '../styles/Counter.css';

// Componente de contador que permite aumentar e diminuir um número
function Counter() {
  // Estado que armazena o valor atual do contador
  const [count, setCount] = useState(0);

  // Função para aumentar o contador em 1
  const increment = () => setCount(count + 1);

  // Função para diminuir o contador, impedindo valores negativos
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Contador</h2>

      {/* Exibe o valor atual do contador */}
      <div className="counter-display">{count}</div>

      {/* Botões para aumentar e diminuir o contador */}
      <div className="button-container">
        <button onClick={decrement} className="btn btn-decrease">Diminuir</button>
        <button onClick={increment} className="btn btn-increase">Aumentar</button>
      </div>
    </div>
  );
}

export default Counter;
