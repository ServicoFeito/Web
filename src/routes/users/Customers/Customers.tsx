import React, { useState } from 'react';
import './Customers.css';

const mockClients = [
  { id: 1, name: 'José Bauer Fraga', email: 'jbf@gmail.com', password: '••••••••••', status: 'ATIVO' },
  { id: 2, name: 'Ana Silva', email: 'ana.silva@example.com', password: '••••••••••', status: 'INATIVO' },
  { id: 3, name: 'Carlos Pereira', email: 'carlos.p@example.com', password: '••••••••••', status: 'ATIVO' },
  { id: 4, name: 'Mariana Costa', email: 'mari.costa@example.com', password: '••••••••••', status: 'ATIVO' },
  { id: 5, name: 'Pedro Almeida', email: 'pedro.a@example.com', password: '••••••••••', status: 'INATIVO' },
  { id: 6, name: 'Juliana Santos', email: 'juju.santos@example.com', password: '••••••••••', status: 'ATIVO' },
  { id: 7, name: 'Fernando Lima', email: 'f.lima@example.com', password: '••••••••••', status: 'ATIVO' },
  { id: 8, name: 'Beatriz Oliveira', email: 'bia.oli@example.com', password: '••••••••••', status: 'INATIVO' },
  { id: 9, name: 'Ricardo Souza', email: 'rick.souza@example.com', password: '••••••••••', status: 'ATIVO' },
  { id: 10, name: 'Camila Martins', email: 'camila.m@example.com', password: '••••••••••', status: 'ATIVO' },
  { id: 11, name: 'Lucas Gonçalves', email: 'lucas.g@example.com', password: '••••••••••', status: 'ATIVO' },
  { id: 12, name: 'Patrícia Ribeiro', email: 'paty@example.com', password: '••••••••••', status: 'INATIVO' },
];

type ClientStatus = 'ATIVO' | 'INATIVO';

interface Client {
  id: number;
  name: string;
  email: string;
  password?: string;
  status: ClientStatus;
}

const Customers: React.FC = () => {
  // Estados do componente para gerenciar a lista de clientes, a página atual e os itens por página.
  const [clients] = useState<Client[]>(mockClients);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Bloco de lógica para calcular a paginação da tabela.
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <main>
      {/* Container principal da tabela de clientes. */}
      <div className="client_table_container">
        {/* Cabeçalho com título, controles e campo de busca. */}
        <header className="table_header">
          <div className="table-controls">
            <div className="title_wrapper">
              <h1>Clientes</h1>
            </div>
            <div className="items_per_page_selector">
              <label htmlFor="items-per-page">Exibir</label>
              <select id="items-per-page" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
              <span>Resultados por página</span>
            </div>
          </div>
          <div className="search_wrapper">
            <input type="text" placeholder="Busque aqui" />
          </div>
        </header>

        {/* Wrapper da tabela que permite rolagem horizontal em telas menores. */}
        <div className="table_wrapper">
          <table>
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Email</th>
                <th>Senha</th>
                <th>Status</th>
                <th>Operações</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeia os clientes da página atual para renderizar as linhas da tabela. */}
              {currentItems.map((client) => (
                <tr key={client.id}>
                  <td data-label="Usuário">{client.name}</td>
                  <td data-label="Email">{client.email}</td>
                  <td data-label="Senha">{client.password}</td>
                  <td data-label="Status">
                    {/* Renderização condicional da pílula de status. */}
                    <span className={`status ${client.status === 'ATIVO' ? 'status_active' : 'status_inactive'}`}>
                      {client.status}
                    </span>
                  </td>
                  <td data-label="Operações" className="actions_cell">
                    <button className="action_btn edit" aria-label="Editar"><i className="bi bi-pencil-square"></i></button>
                    <button className="action_btn delete" aria-label="Deletar"><i className="bi bi-trash3-fill"></i></button>
                    <button className="action_btn activate" aria-label="Ativar"><i className="bi bi-check-square-fill"></i></button>
                    <button className="action_btn view" aria-label="Visualizar"><i className="bi bi-eye-fill"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rodapé com informações de contagem e controles de paginação. */}
        <footer className="table_footer">
          <span className="footer_info">
            Mostrando {indexOfFirstItem + 1} a {Math.min(indexOfLastItem, clients.length)} de {clients.length} registros
          </span>
          <div className="pagination_controls">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Anterior
            </button>
            {/* Mapeia o total de páginas para criar os botões de navegação. */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={currentPage === number ? 'active' : ''}
              >
                {number}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Próximo
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Customers;