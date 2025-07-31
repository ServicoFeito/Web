import React from 'react';
import './Login.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

// Componente de Login: Renderiza a página de autenticação do usuário.
const Login: React.FC = () => {
  // Lógica de manipulação do envio do formulário de login.
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Tentativa de login...');
  };

  return (
    // Contêiner principal que centraliza o conteúdo da página.
    <div className="login_page">
      <div className="login_container">

        <div className="login_logo_placeholder">
          <img src={logo} alt="logo" />
        </div>

        <form onSubmit={handleLogin} className="login_form">
          <div className="input_group">
            <input
              type="text"
              id="username"
              className="login_input"
              placeholder="Usuário"
              required
            />
          </div>
          <div className="input_group">
            <input
              type="password"
              id="password"
              className="login_input"
              placeholder="Senha"
              required
            />
          </div>

          <Link to="/home">
            <button type="submit" className="login_button">
              ENTRAR
            </button>
          </Link>

        </form>
      </div>
    </div>
  );
};

export default Login;