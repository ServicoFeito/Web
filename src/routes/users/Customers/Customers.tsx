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

// --- O Componente ---
const Customers: React.FC = () => {
  const [clients] = useState<Client[]>(mockClients);
  const [currentPage, setCurrentPage] = useState(1);
  // NOVO: Estado para controlar itens por página
  const [itemsPerPage, setItemsPerPage] = useState(5); 

  // Lógica de Paginação (agora dinâmica)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  // NOVO: Função para alterar a quantidade de itens por página
  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Resetar para a primeira página ao mudar a quantidade
  };

  // Funções de placeholder para os botões de ação
  const handleEdit = (id: number) => alert(`Editar cliente ID: ${id}`);
  const handleDelete = (id: number) => alert(`Deletar cliente ID: ${id}`);
  const handleActivate = (id: number) => alert(`Ativar cliente ID: ${id}`);
  const handleView = (id: number) => alert(`Visualizar cliente ID: ${id}`);


  return (
    <main>
      <div className="client-table-container">
        <header className="table-header">
          <div className="table-controls">
        <div className="title-wrapper">
          <h1>Clientes</h1>
        </div>
              <div className="items-per-page-selector">
                  <label htmlFor="items-per-page">Exibir</label>
                  <select id="items-per-page" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                  </select>
                  <span>Resultados por página</span>
              </div>
          </div>
          <div className="search-wrapper">
            <input type="text" placeholder="Busque aqui" />
          </div>
        </header>
        

        <div className="table-wrapper">
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
              {currentItems.map((client) => (
                <tr key={client.id}>
                  <td data-label="Usuário">{client.name}</td>
                  <td data-label="Email">{client.email}</td>
                  <td data-label="Senha">{client.password}</td>
                  <td data-label="Status">
                    <span className={`status ${client.status === 'ATIVO' ? 'status-active' : 'status-inactive'}`}>
                      {client.status}
                    </span>
                  </td>
                  <td data-label="Operações" className="actions-cell">
                    <button onClick={() => handleEdit(client.id)} className="action-btn edit" aria-label="Editar">✏️</button>
                    <button onClick={() => handleDelete(client.id)} className="action-btn delete" aria-label="Deletar">🗑️</button>
                    <button onClick={() => handleActivate(client.id)} className="action-btn activate" aria-label="Ativar">✔️</button>
                    <button onClick={() => handleView(client.id)} className="action-btn view" aria-label="Visualizar">👁️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="table-footer">
          <span className="footer-info">
            Mostrando {indexOfFirstItem + 1} a {Math.min(indexOfLastItem, clients.length)} de {clients.length} registros
          </span>
          <div className="pagination-controls">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Anterior
            </button>
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