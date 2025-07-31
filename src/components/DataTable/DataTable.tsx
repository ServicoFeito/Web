// src/components/dataTable/DataTable.tsx

import React, { useState, useMemo } from 'react';
import './DataTable.css';

// 1. Definimos os tipos para as props do nosso componente genérico

// T representa o tipo do dado de cada linha (ex: Client, Product)
export interface Column<T> {
    header: string; // O texto do cabeçalho (<th>)
    // A função que renderiza o conteúdo da célula (<td>)
    // Recebe o item da linha e retorna o JSX
    render: (item: T) => React.ReactNode; 
}

interface DataTableProps<T> {
    title: string;              // Título da tabela (ex: "Clientes")
    data: T[];                  // O array de dados
    columns: Column<T>[];       // A configuração das colunas
}

// 2. Criamos o componente DataTable usando Generics (<T extends { id: number | string }>)
// Exigimos que cada item tenha um 'id' para a 'key' do React
const DataTable = <T extends { id: number | string }>({ title, data, columns }: DataTableProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');

    // 3. Memoizamos o cálculo dos dados filtrados para melhor performance
    const filteredData = useMemo(() => {
        if (!searchTerm) return data;

        return data.filter(item => {
            // Lógica de busca genérica: busca o termo em todos os valores do objeto
            return Object.values(item).some(value =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    }, [data, searchTerm]);

    // 4. A lógica de paginação agora usa os dados filtrados
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reseta para a primeira página ao mudar a quantidade
    };
    
    // Reseta para a página 1 quando o termo de busca muda
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    }

    return (
        <div className="data_table_container">
            <header className="table_header">
                <div className="table_controls">
                    <div className="title_wrapper">
                        <h1>{title}</h1>
                    </div>
                    <div className="items_per_page_selector">
                        <label htmlFor="items_per_page">Exibir</label>
                        <select id="items_per_page" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                        <span>Resultados por página</span>
                    </div>
                </div>
                <div className="search_wrapper">
                    <input
                        type="text"
                        placeholder="Busque aqui"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </header>

            <div className="table_wrapper">
                <table>
                    <thead>
                        <tr>
                            {/* 5. Mapeia as colunas para criar o cabeçalho dinamicamente */}
                            {columns.map((col) => (
                                <th key={col.header}>{col.header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                                {/* 6. Para cada item, mapeia as colunas e usa a função 'render' para criar a célula */}
                                {columns.map((col) => (
                                    <td key={col.header} data-label={col.header}>
                                        {col.render(item)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <footer className="table_footer">
                <span className="footer_info">
                    Mostrando {indexOfFirstItem + 1} a {Math.min(indexOfLastItem, filteredData.length)} de {filteredData.length} registros
                </span>
                <div className="pagination_controls">
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
    );
};

export default DataTable;