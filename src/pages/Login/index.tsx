/**
 * Página de Login.
 * Exibe o formulário de autenticação para o usuário.
 * Contém seus próprios sub-componentes para o card, inputs e botão.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';

function Input({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="login-input"
    />
  );
}

function ButtonLogin({ children, type }) {
  return (
    <button type={type} className="login-button">
      {children}
    </button>
  );
}

function LoginCard({ onFormSubmit }) {
  return (
    <div className="login-card">
      <img src={logo} alt="Serviço Feito Logo" className="login-logo" />
      <form onSubmit={onFormSubmit} className="login-form">
        <Input type="text" name="usuario" placeholder="Usuário" />
        <Input type="password" name="senha" placeholder="Senha" />
        <ButtonLogin type="submit">Entrar</ButtonLogin>
      </form>
    </div>
  );
}

export function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Tentando fazer login...');
    navigate('/dashboard');
  };

  return (
    <div className="login-page-container">
      <LoginCard onFormSubmit={handleLogin} />
    </div>
  );
}