import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import '../styles/Timer.css';

// Componente de temporizador que conta o tempo em segundos
function Timer() {
  // Estado para armazenar o tempo em segundos
  const [time, setTime] = useState(0);
  // Estado para controlar se o temporizador está rodando
  const [isRunning, setIsRunning] = useState(false);

  // Efeito que atualiza o tempo a cada segundo quando está rodando
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }

    // Limpa o intervalo quando o componente é desmontado ou o timer é pausado
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  // Função para iniciar/pausar o temporizador
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Função para reiniciar o temporizador
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Função para formatar o tempo em minutos e segundos
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h2 className="timer-title">Temporizador</h2>
      <div className="timer-content">
        {/* Exibe o tempo formatado */}
        <div className="timer-display">{formatTime(time)}</div>
        <div className="timer-buttons">
          {/* Botão para iniciar/pausar */}
          <button
            onClick={toggleTimer}
            className={`timer-btn ${isRunning ? 'timer-btn-pause' : 'timer-btn-start'}`}
          >
            {isRunning ? <Pause size={20} /> : <Play size={20} />}
          </button>
          {/* Botão para reiniciar */}
          <button
            onClick={resetTimer}
            className="timer-btn timer-btn-reset"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
