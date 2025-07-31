import React from 'react';
import './Error404.css';

const Error404 = () => {

  // Função para navegar para a página anterior no histórico do navegador.
  const handleGoBack = () => {
    window.history.back();
  };
 
  return (
    // Contêiner principal que ocupa toda a tela e centraliza o conteúdo.
    <div className="not_found_page">
      <div className="not_found_container">
        <h1 className="error_code">404</h1>
        <p className="error_message">Oops! Página não encontrada</p>
        <p className="error_description">
          A página que você está procurando não existe ou foi movida.
        </p>
        <button onClick={handleGoBack} className="back_button">
          Voltar
        </button>
      </div>
    </div>
  )
}

export default Error404;