import React, { useState, useMemo } from 'react';
import './style.css';
import { FaEdit, FaTrashAlt, FaCheckCircle, FaEye, FaPlus } from 'react-icons/fa';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const mockUsers = [
  { id: 1, name: 'José Bauer Fraga', email: 'jbf@gmail.com', status: 'ATIVO', nivel: 'Admin', gender: 'Masculino' },
  { id: 2, name: 'Maria Silva', email: 'maria.silva@example.com', status: 'INATIVO', nivel: 'Cliente', gender: 'Feminino' },
  { id: 3, name: 'Carlos Pereira', email: 'carlos.p@example.com', status: 'ATIVO', nivel: 'Prestador', gender: 'Masculino' },
  { id: 4, name: 'Ana Oliveira', email: 'ana.o@example.com', status: 'ATIVO', nivel: 'Cliente', gender: 'Feminino' },
  { id: 5, name: 'Lucas Martins', email: 'lucas.m@example.com', status: 'INATIVO', nivel: 'Prestador', gender: 'Masculino' },
];

function UserForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirma Senha</label>
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="role">Modalidade Profissional</label>
        <select 
          id="role" 
          name="role" 
          value={formData.role} 
          onChange={handleChange} 
          required
        >
          <option value="" disabled>Selecione uma opção...</option>
          <option value="Cliente">Cliente</option>
          <option value="Prestador">Prestador</option>
        </select>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label className="radio-option">
            <input
              type="radio"
              name="gender"
              value="Masculino"
              checked={formData.gender === 'Masculino'}
              onChange={handleChange}
              required
            />
            <span className="custom-radio"></span>
            <span>Masculino</span>
          </label>
        </div>
        
        <div className="form-group">
          <label className="radio-option">
            <input
              type="radio"
              name="gender"
              value="Feminino"
              checked={formData.gender === 'Feminino'}
              onChange={handleChange}
              required
            />
            <span className="custom-radio"></span>
            <span>Feminino</span>
          </label>
        </div>
      </div>

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" variant="primary">Salvar</Button>
      </div>
    </form>
  );
}

export default function Users() {
  const [users, setUsers] = useState(mockUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSaveUser = (newUserData) => {
    const newUser = {
      name: newUserData.name,
      email: newUserData.email,
      id: users.length + 1,
      status: 'ATIVO',
      nivel: newUserData.role,
      gender: newUserData.gender,
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setIsModalOpen(false);
  };

  const filteredUsers = useMemo(() => {
    if (!searchTerm) {
      return users;
    }
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredUsers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredUsers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="users-page-container">
      <div className="page-header">
        <h1 className="users-page-title">Usuários</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <FaPlus style={{ marginRight: '8px' }} />
          Adicionar Novo
        </Button>
      </div>
      
      <div className="table-container-card">
        <div className="table-controls">
          <div className="items-per-page-selector">
            <span>Exibir</span>
            <select
              value={itemsPerPage}
              onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
            <span>resultados por página</span>
          </div>
          <div className="search-bar">
            <span>Buscar:</span>
            <input
              type="text"
              placeholder="Busque por nome ou email"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
          </div>
        </div>

        <div className="table-scroll-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Gênero</th>
                <th>Status</th>
                <th>Nível</th>
                <th>Operações</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <span className={`status-pill ${user.status === 'ATIVO' ? 'status-active' : 'status-inactive'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.nivel}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-button edit" title="Editar"><FaEdit /></button>
                      <button className="action-button delete" title="Excluir"><FaTrashAlt /></button>
                      <button className="action-button activate" title="Ativar/Inativar"><FaCheckCircle /></button>
                      <button className="action-button view" title="Visualizar"><FaEye /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span className="results-text">
            Mostrando {paginatedUsers.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} a {Math.min(currentPage * itemsPerPage, filteredUsers.length)} de {filteredUsers.length} registros
          </span>
          {totalPages > 1 && (
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
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Adicionar Novo Usuário"
      >
        <UserForm 
          onSave={handleSaveUser}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

    </div>
  );
}
