import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import './styles/App.css';
import Counter from './components/Counter';
import BackgroundChanger from './components/BackgroundChanger';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import NameFilter from './components/NameFilter';
import RegistrationForm from './components/RegistrationForm';
import PostsList from './components/PostsList';
import ImageGallery from './components/ImageGallery';
import CountdownTimer from './components/CountdownTimer';
import TabsComponent from './components/TabsComponent';

// Componente principal que gerencia a navegação entre os exercícios
function App() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'counter':
        return <Counter />;
      case 'background':
        return <BackgroundChanger />;
      case 'todo':
        return <TodoList />;
      case 'timer':
        return <Timer />;
      case 'filter':
        return <NameFilter />;
      case 'form':
        return <RegistrationForm />;
      case 'posts':
        return <PostsList />;
      case 'gallery':
        return <ImageGallery />;
      case 'countdown':
        return <CountdownTimer />;
      case 'tabs':
        return <TabsComponent />;
      default:
        return (
          <div className="text-container">
            <h1 className="title">Exercícios React</h1>
            <p className="subtitle">Selecione um exercício no menu lateral para começar!</p>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="menu-button"
      >
        <Menu size={24} />
      </button>

      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <h2 className="sidebar-title">Exercícios</h2>
          <nav className="nav">
            {[
              { id: 'counter', name: '1. Contador' },
              { id: 'background', name: '2. Cor de Fundo' },
              { id: 'todo', name: '3. Lista de Tarefas' },
              { id: 'timer', name: '4. Temporizador' },
              { id: 'filter', name: '5. Filtro de Nomes' },
              { id: 'form', name: '6. Formulário' },
              { id: 'posts', name: '7. Lista de Posts' },
              { id: 'gallery', name: '8. Galeria de Imagens' },
              { id: 'countdown', name: '9. Contagem Regressiva' },
              { id: 'tabs', name: '10. Abas' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveComponent(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`nav-item ${activeComponent === item.id ? 'nav-item-active' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="main-content">
        <div className="content-wrapper">{renderComponent()}</div>
      </div>
    </div>
  );
}

export default App;
