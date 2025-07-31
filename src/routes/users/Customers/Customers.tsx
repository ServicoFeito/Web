import React, { useState } from 'react';
import { useIMask } from 'react-imask';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Estado para controlar a opção de gênero selecionada
    const [gender, setGender] = useState<string>('masculino');
    
    const [clients] = useState<Client[]>(mockClients);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState(''); // <-- ALTERAÇÃO: Estado para o termo de busca

    const { ref: phoneRef } = useIMask({ mask: '(00) 00000-0000' });

    // <-- ALTERAÇÃO: Lógica de filtro e paginação atualizada
    // 1. Filtra os clientes com base no termo de busca (case-insensitive)
    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 2. A paginação agora é baseada na lista JÁ FILTRADA
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredClients.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        alert('Usuário cadastrado com sucesso! (simulação)');
        closeModal();
    };

    return (
        <main>
            <div className="page_action_container">
                <Button onClick={openModal}>
                    <i className="bi bi-plus-lg"></i>
                    Cadastrar
                </Button>
            </div>

            <div className="client_table_container">
                <header className="table_header">
                    <div className="table_controls">
                        <div className="title_wrapper">
                            <h1>Clientes</h1>
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
                        {/* <-- ALTERAÇÃO: Conecta o input ao estado e ao evento onChange */}
                        <input
                            type="text"
                            placeholder="Busque aqui"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </header>

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
                            {currentItems.map((client) => (
                                <tr key={client.id}>
                                    <td data-label="Usuário">{client.name}</td>
                                    <td data-label="Email">{client.email}</td>
                                    <td data-label="Senha">{client.password}</td>
                                    <td data-label="Status">
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

                <footer className="table_footer">
                    {/* <-- ALTERAÇÃO: Usa a contagem da lista filtrada */}
                    <span className="footer_info">
                        Mostrando {indexOfFirstItem + 1} a {Math.min(indexOfLastItem, filteredClients.length)} de {filteredClients.length} registros
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

            <Modal title="Cadastrar Novo Usuário" isOpen={isModalOpen} onClose={closeModal}>
                <form>
                    <div className="form_grid">
                        <div className="form_group full_width">
                            <label htmlFor="name">Nome Completo</label>
                            <div className="input_wrapper">
                                <i className="bi bi-person input_icon"></i>
                                <input type="text" id="name" placeholder="Digite o nome completo" />
                            </div>
                        </div>
                        
                        <div className="form_group full_width">
                            <label htmlFor="email">Email</label>
                            <div className="input_wrapper">
                                <i className="bi bi-envelope input_icon"></i>
                                <input type="email" id="email" placeholder="exemplo@dominio.com" />
                            </div>
                        </div>

                        <div className="form_group">
                            <label htmlFor="password">Senha</label>
                            <div className="input_wrapper">
                                <i className="bi bi-lock input_icon"></i>
                                <input type="password" id="password" placeholder="••••••••" />
                            </div>
                        </div>

                        <div className="form_group">
                            <label htmlFor="confirm-password">Confirmar Senha</label>
                            <div className="input_wrapper">
                                <i className="bi bi-lock-fill input_icon"></i>
                                <input type="password" id="confirm-password" placeholder="••••••••" />
                            </div>
                        </div>

                        <div className="form_group full_width">
                            <label htmlFor="phone">Telefone</label>
                            <div className="input_wrapper">
                                <i className="bi bi-telephone input_icon"></i>
                                <input ref={phoneRef} type="tel" id="phone" placeholder="(00) 00000-0000"/>
                            </div>
                        </div>

                        <div className="form_group full_width">
                            <label htmlFor="role">Modalidade Profissional</label>
                            <div className="input_wrapper">
                                <i className="bi bi-briefcase input_icon"></i>
                                <select id="role" defaultValue="">
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="prestador">Prestador</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form_group full_width">
                            <label>Sexo</label>
                            <div className="radio_group_container">
                                <label className="radio_label">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="masculino"
                                        checked={gender === 'masculino'}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    <span className="radio_custom"></span>
                                    <span>Masculino</span>
                                </label>
                                <label className="radio_label">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="feminino"
                                        checked={gender === 'feminino'}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    <span className="radio_custom"></span>
                                    <span>Feminino</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <footer className="modal_footer">
                        <button type="button" className="secondary_button" onClick={closeModal}>
                            Fechar
                        </button>
                        <Button onClick={handleFormSubmit} type="submit">
                            Cadastrar
                        </Button>
                    </footer>
                </form>
            </Modal>
        </main>
    );
};

export default Customers;