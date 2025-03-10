import React, { useState } from 'react';
import '../styles/BackgroundChanger.css';

// Componente que permite mudar a cor dentro de um quadrado
function BackgroundChanger() {
  // Estado que armazena a cor atual
  const [color, setColor] = useState('#ffffff');

  // Função que gera uma cor aleatória em formato hexadecimal
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF'; // Letras e números usados em cores hexadecimais
    let color = '#'; // O "#" inicia o código da cor
    for (let i = 0; i < 6; i++) {
      // Escolhe 6 caracteres aleatórios para formar a cor
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="background-container">
      {/* Título do componente */}
      <h2 className="title">Mudança de Cor</h2>

      {/* Área onde a cor será exibida */}
      <div className="color-box-container">
        <div className="color-box" style={{ backgroundColor: color }}></div>
      </div>

      {/* Exibe o código da cor atual */}
      <p className="color-text">Cor Atual: {color}</p>

      {/* Botão que gera uma nova cor ao ser clicado */}
      <button onClick={() => setColor(generateRandomColor())} className="change-button">
        Mudar Cor
      </button>
    </div>
  );
}

export default BackgroundChanger;
