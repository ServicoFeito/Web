import React, { useState, useMemo } from 'react';
import './style.css';
import { FaEdit, FaTrashAlt, FaCheckCircle, FaEye } from 'react-icons/fa';

const mockUsers = [
  { id: 1, name: 'José Bauer Fraga', email: 'jbf@gmail.com', password: '***', status: 'ATIVO' },
  { id: 2, name: 'Maria Silva', email: 'maria.silva@example.com', password: '***', status: 'INATIVO' },
  { id: 3, name: 'Carlos Pereira', email: 'carlos.p@example.com', password: '***', status: 'ATIVO' },
  { id: 4, name: 'Ana Oliveira', email: 'ana.o@example.com', password: '***', status: 'ATIVO' },
  { id: 5, name: 'Lucas Martins', email: 'lucas.m@example.com', password: '***', status: 'INATIVO' },
  { id: 6, name: 'Juliana Costa', email: 'juliana.c@example.com', password: '***', status: 'ATIVO' },
  { id: 7, name: 'Rafael Souza', email: 'rafael.s@example.com', password: '***', status: 'ATIVO' },
  { id: 8, name: 'Fernanda Lima', email: 'fernanda.l@example.com', password: '***', status: 'INATIVO' },
  { id: 9, name: 'Bruno Alves', email: 'bruno.a@example.com', password: '***', status: 'ATIVO' },
  { id: 10, name: 'Patrícia Rocha', email: 'patricia.r@example.com', password: '***', status: 'INATIVO' },
  { id: 11, name: 'Ricardo Nunes', email: 'ricardo.n@example.com', password: '***', status: 'ATIVO' },
  { id: 12, name: 'Sandra Gomes', email: 'sandra.g@example.com', password: '***', status: 'ATIVO' },
];

export default function Users() {
  const [users] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="users-page-container">
      
      <div className="table-container-card">
        <div className="table-controls">
          <div className="items-per-page-selector">
            <span>Exibir</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
            <span>resultados por página</span>
          </div>
          <div className="search-bar">
            <span>Buscar:</span>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Busque aqui"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Senha</th>
              <th>Status</th>
              <th>Operações</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>**********</td>
                <td>
                  <span className={`status-pill ${user.status === 'ATIVO' ? 'status-active' : 'status-inactive'}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button edit"><FaEdit /></button>
                    <button className="action-button delete"><FaTrashAlt /></button>
                    <button className="action-button activate"><FaCheckCircle /></button>
                    <button className="action-button view"><FaEye /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="results-text">
            Mostrando {Math.min(paginatedUsers.length, filteredUsers.length > 0 ? 1 : 0) > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} a {Math.min(currentPage * itemsPerPage, filteredUsers.length)} de {filteredUsers.length} registros
          </span>
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={currentPage === page ? 'active-page' : ''}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}