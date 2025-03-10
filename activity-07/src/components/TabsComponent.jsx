import React, { useState } from 'react';
import '../styles/TabsComponent.css';

// Componente de abas navegáveis
function TabsComponent() {
  // Estado para controlar qual aba está ativa
  const [activeTab, setActiveTab] = useState('sobre');

  // Conteúdo das abas
  const tabContent = {
    sobre: {
      title: 'Sobre',
      content: `
        Esta é uma aplicação de exemplo que demonstra diversos conceitos do React,
        incluindo componentes, estados, efeitos e eventos. Cada exercício foi
        desenvolvido para praticar diferentes aspectos do desenvolvimento com React.
      `
    },
    contato: {
      title: 'Contato',
      content: `
        Email: exemplo@email.com
        Telefone: (98) 99999-9999
        Endereço: Rua Exemplo, 123 - Açailândia, MA
      `
    },
    ajuda: {
      title: 'Ajuda',
      content: `
        Precisa de ajuda? Aqui estão alguns recursos úteis:
        - Documentação do React
        - Tutoriais em vídeo
        - Fórum
        - FAQ
      `
    }
  };

  return (
    <div className="tabs-container">
      <h2 className="tabs-title">Navegação em Abas</h2>

      {/* Navegação das abas */}
      <div className="tabs-nav">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
          >
            {tabContent[tab].title}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba ativa */}
      <div className="tab-content">
        <h3 className="tab-content-title">{tabContent[activeTab].title}</h3>
        <p className="tab-content-text">{tabContent[activeTab].content}</p>
      </div>
    </div>
  );
}

export default TabsComponent;
