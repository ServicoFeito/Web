import React, { useState, useMemo } from 'react';
import './style.css';
import { FaTrashAlt, FaEye, FaPhone, FaComment, FaReply } from 'react-icons/fa';

const mockData = [
  { id: 1, data: '20/07/2025', prestador: 'Jose Bauer Hugo', motivo: 'Cliente Não Pagou', status: 'FECHADO', respondida: 'SIM' },
  { id: 2, data: '19/07/2025', prestador: 'Maria Silva', motivo: 'Equipamento com defeito', status: 'ABERTO', respondida: 'NÃO' },
  { id: 3, data: '19/07/2025', prestador: 'Carlos Pereira', motivo: 'Atraso na entrega', status: 'ABERTO', respondida: 'SIM' },
  { id: 4, data: '18/07/2025', prestador: 'Ana Oliveira', motivo: 'Serviço incompleto', status: 'FECHADO', respondida: 'NÃO' },
  { id: 5, data: '18/07/2025', prestador: 'Lucas Martins', motivo: 'Dúvida sobre fatura', status: 'ABERTO', respondida: 'NÃO' },
  { id: 6, data: '17/07/2025', prestador: 'Beatriz Costa', motivo: 'Cancelamento de serviço', status: 'FECHADO', respondida: 'SIM' },
  { id: 7, data: '17/07/2025', prestador: 'Rafael Souza', motivo: 'Problema de conexão', status: 'ABERTO', respondida: 'SIM' },
  { id: 8, data: '16/07/2025', prestador: 'Juliana Lima', motivo: 'Alteração de plano', status: 'FECHADO', respondida: 'SIM' },
  { id: 9, data: '16/07/2025', prestador: 'Fernando Alves', motivo: 'Cliente Não Pagou', status: 'FECHADO', respondida: 'SIM' },
  { id: 10, data: '15/07/2025', prestador: 'Gabriel Rocha', motivo: 'Visita técnica não realizada', status: 'ABERTO', respondida: 'NÃO' },
  { id: 11, data: '15/07/2025', prestador: 'Larissa Mendes', motivo: 'Produto entregue errado', status: 'FECHADO', respondida: 'SIM' },
  { id: 12, data: '14/07/2025', prestador: 'Marcos Barbosa', motivo: 'Cobrança indevida', status: 'ABERTO', respondida: 'NÃO' },
];

export default function Pestadores() {
  const [records, setRecords] = useState(mockData); 
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (idToDelete) => {
    setRecords(currentRecords =>
      currentRecords.filter(record => record.id !== idToDelete)
    );
  };

  const filteredRecords = useMemo(() => {
    if (!searchTerm) return records;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return records.filter(record =>
      record.prestador.toLowerCase().includes(lowerCaseSearchTerm) ||
      record.motivo.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [records, searchTerm]);

  const paginatedRecords = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredRecords.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredRecords, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPillClass = (value) => {
    switch (value) {
      case 'FECHADO':
      case 'SIM':
        return 'pill-green';
      case 'ABERTO':
      case 'NÃO':
        return 'pill-red';
      default:
        return 'pill-grey';
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Pestadores</h1>
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
            <span>Resultados por página</span>
          </div>
          <div className="search-bar">
            <span>Buscar:</span>
            <input
              type="text"
              placeholder="Busque aqui"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
          </div>
        </div>

        <div className="table-scroll-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Prestador</th>
                <th>Motivo</th>
                <th>Status</th>
                <th>Respondida</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRecords.map((record) => (
                <tr key={record.id}>
                  <td>{record.data}</td>
                  <td>{record.prestador}</td>
                  <td>{record.motivo}</td>
                  <td>
                    <span className={`status-pill ${getPillClass(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td>
                    <span className={`status-pill ${getPillClass(record.respondida)}`}>
                      {record.respondida}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="action-button btn-delete" 
                        title="Excluir"
                        onClick={() => handleDelete(record.id)}
                      >
                        <FaTrashAlt />
                      </button>
                      {record.status === 'FECHADO' ? (
                          <button className="action-button btn-view" title="Visualizar"><FaEye /></button>
                      ) : (
                          <button className="action-button btn-reply" title="Responder"><FaReply /></button>
                      )}
                      <button className="action-button btn-call" title="Ligar"><FaPhone /></button>
                      <button className="action-button btn-message" title="Mensagem"><FaComment /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span className="results-text">
            Mostrando {paginatedRecords.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} a {Math.min(currentPage * itemsPerPage, filteredRecords.length)} de {filteredRecords.length} registros
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
    </div>
  );
}