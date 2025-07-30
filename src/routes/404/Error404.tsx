import React from 'react';
import './Error404.css';

const Error404 = () => {

  // Função para navegar para a página anterior no histórico do navegador.
  const handleGoBack = () => {
    window.history.back();
  };
 
  return (
    // Contêiner principal que ocupa toda a tela e centraliza o conteúdo.
    <div className="not-found-page">
      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Página não encontrada</p>
        <p className="error-description">
          A página que você está procurando não existe ou foi movida.
        </p>
        <button onClick={handleGoBack} className="back-button">
          Voltar
        </button>
      </div>
    </div>
  )
}

export default Error404;