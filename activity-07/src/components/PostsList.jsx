import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import '../styles/PostsList.css';

// Componente que exibe uma lista de posts de uma API
function PostsList() {
  // Estado para armazenar os posts
  const [posts, setPosts] = useState([]);
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);
  // Estado para armazenar erro, se houver
  const [error, setError] = useState(null);

  // Função que busca os posts da API
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      if (!response.ok) throw new Error('Falha ao carregar os posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Carrega os posts quando o componente é montado
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <div className="header">
        <h2>Lista de Posts</h2>
        {/* Botão para recarregar os posts */}
        <button
          onClick={fetchPosts}
          className={`reload-button ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          <RotateCcw size={20} className={loading ? 'rotate' : ''} />
        </button>
      </div>

      {/* Exibe mensagem de carregamento */}
      {loading && (
        <div className="loading-message">Carregando posts...</div>
      )}

      {/* Exibe mensagem de erro */}
      {error && (
        <div className="error-message">
          Erro: {error}
        </div>
      )}

      {/* Lista de posts */}
      {!loading && !error && (
        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostsList;
