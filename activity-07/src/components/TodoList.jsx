import React, { useState } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';
import '../styles/TodoList.css';

// Componente de lista de tarefas com funcionalidades de adicionar, remover e marcar como concluída
function TodoList() {
  // Estado para armazenar a lista de tarefas
  const [todos, setTodos] = useState([]);
  // Estado para armazenar o texto da nova tarefa
  const [newTodo, setNewTodo] = useState('');
  // Estado para controlar o filtro de visualização (todas, ativas, concluídas)
  const [filter, setFilter] = useState('all');

  // Função para adicionar uma nova tarefa
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      // Adiciona nova tarefa ao array com um ID único
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false
        }
      ]);
      // Limpa o campo de entrada
      setNewTodo('');
    }
  };

  // Função para alternar o estado de conclusão de uma tarefa
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Função para remover uma tarefa
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filtra as tarefas com base no filtro selecionado
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h2 className="todo-title">Lista de Tarefas</h2>
      
      {/* Formulário para adicionar nova tarefa */}
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Adicionar nova tarefa..."
          className="todo-input"
        />
        <button
          type="submit"
          className="todo-btn todo-btn-add"
        >
          <Plus size={20} />
        </button>
      </form>

      {/* Botões de filtro */}
      <div className="todo-filters">
        {['all', 'active', 'completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`todo-filter-btn ${filter === f ? 'todo-filter-active' : ''}`}
          >
            {f === 'all' ? 'Todas' : f === 'active' ? 'Ativas' : 'Concluídas'}
          </button>
        ))}
      </div>

      {/* Lista de tarefas */}
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            className="todo-item"
          >
            {/* Botão para marcar como concluída */}
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`todo-check-btn ${todo.completed ? 'todo-check-completed' : ''}`}
            >
              <Check size={16} />
            </button>
            {/* Texto da tarefa */}
            <span className={`todo-text ${todo.completed ? 'todo-completed' : ''}`}>
              {todo.text}
            </span>
            {/* Botão para excluir tarefa */}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="todo-delete-btn"
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
