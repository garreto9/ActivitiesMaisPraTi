import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import '../styles/CountdownTimer.css';

// Componente de contagem regressiva
function CountdownTimer() {
  // Estado que armazena o tempo inicial definido pelo usuário
  const [initialTime, setInitialTime] = useState(60);

  // Estado que armazena o tempo restante da contagem
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Estado que controla se o timer está rodando ou pausado
  const [isRunning, setIsRunning] = useState(false);

  // Efeito que controla a contagem regressiva
  useEffect(() => {
    let intervalId;

    if (isRunning && timeLeft > 0) {
      // Define um intervalo que reduz 1 segundo a cada 1000ms (1s)
      intervalId = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsRunning(false); // Para o timer quando chega a 0
            alert('Tempo esgotado!'); // Alerta o usuário
            return 0;
          }
          return time - 1; // Reduz o tempo em 1 segundo
        });
      }, 1000);
    }

    // Limpa o intervalo ao desmontar o componente ou quando o timer pausa
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  // Função que inicia ou pausa a contagem regressiva
  const toggleTimer = () => {
    if (timeLeft === 0) {
      resetTimer(); // Se o tempo já estiver 0, reinicia antes de rodar
    }
    setIsRunning(!isRunning); // Alterna entre rodando e pausado
  };

  // Função para reiniciar o timer com o valor inicial
  const resetTimer = () => {
    setIsRunning(false); // Para o timer
    setTimeLeft(initialTime); // Reseta o tempo
  };

  // Função para formatar o tempo em minutos e segundos
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Contagem Regressiva</h2>

      {/* Input para definir o tempo inicial */}
      <div className="input-container">
        <label htmlFor="timeInput">Tempo inicial (segundos):</label>
        <input
          type="number"
          id="timeInput"
          min="1"
          value={initialTime}
          onChange={(e) => {
            const value = parseInt(e.target.value) || 0;
            setInitialTime(value);
            if (!isRunning) setTimeLeft(value);
          }}
          disabled={isRunning} // Bloqueia edição se o timer estiver rodando
        />
      </div>

      {/* Exibição do tempo restante */}
      <div className="time-display">{formatTime(timeLeft)}</div>

      {/* Botões de controle */}
      <div className="button-container">
        <button onClick={toggleTimer} className={`btn ${isRunning ? 'btn-pause' : 'btn-start'}`}>
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button onClick={resetTimer} className="btn btn-reset">
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;
