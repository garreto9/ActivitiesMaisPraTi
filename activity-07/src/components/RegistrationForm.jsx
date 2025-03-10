import React, { useState } from 'react';
import '../styles/RegistrationForm.css';

// Componente de formulário de registro com validação
function RegistrationForm() {
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  
  // Estado para controlar se o formulário foi enviado
  const [submitted, setSubmitted] = useState(false);
  // Estado para armazenar mensagens de erro
  const [errors, setErrors] = useState({});

  // Função que atualiza os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Função que valida os campos do formulário
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.senha.trim()) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'A senha deve ter pelo menos 6 caracteres';
    }

    return newErrors;
  };

  // Função que processa o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Formulário de Registro</h2>

      {submitted ? (
        <div className="success-message">
          <div className="success-text">Registro realizado com sucesso!</div>
          <p className="welcome-text">Bem-vindo(a), {formData.nome}!</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ nome: '', email: '', senha: '' });
            }}
            className="new-registration-btn"
          >
            Fazer novo registro
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label className="input-label">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={`input-field ${errors.nome ? 'input-error' : ''}`}
            />
            {errors.nome && <p className="error-message">{errors.nome}</p>}
          </div>

          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="input-group">
            <label className="input-label">Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className={`input-field ${errors.senha ? 'input-error' : ''}`}
            />
            {errors.senha && <p className="error-message">{errors.senha}</p>}
          </div>

          <button type="submit" className="submit-btn">
            Registrar
          </button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
