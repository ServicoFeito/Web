import React, { useState } from 'react';
import { useIMask } from 'react-imask';

// Componentes reutilizáveis
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import DataTable, { Column } from '../../../components/dataTable/DataTable'; 

// Estilos específicos da página
import './Customers.css';

// --- Tipos e Dados Mockados ---
// Em uma aplicação real, estes dados viriam de uma API
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
    // --- Estados e Hooks ---
    const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false);
    const [isModalOpenEditUser, setIsModalOpenEditUser] = useState(false);
    const [gender, setGender] = useState<string>('masculino');
    const [clients] = useState<Client[]>(mockClients);
    const { ref: phoneRef } = useIMask({ mask: '(00) 00000-0000' });

    // --- Funções ---
    const openModalAddUser = () => setIsModalOpenAddUser(true);
    const closeModalAddUser = () => setIsModalOpenAddUser(false);

    const openModalEditUser = () => setIsModalOpenEditUser(true);
    const closeModalEditUser = () => setIsModalOpenEditUser(false);

    const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Aqui iria a lógica de validação e envio do formulário para a API
        alert('Usuário cadastrado com sucesso! (simulação)');
        closeModalAddUser();
        closeModalEditUser();
    };

    // --- Definição das Colunas para o DataTable ---
    // Esta é a "ponte" entre os dados dos clientes e o componente de tabela genérico.
    const columns: Column<Client>[] = [
        {
            header: 'Usuário',
            render: (client) => client.name,
        },
        {
            header: 'Email',
            render: (client) => client.email,
        },
        {
            header: 'Senha',
            render: (client) => client.password,
        },
        {
            header: 'Status',
            render: (client) => (
                <span className={`status ${client.status === 'ATIVO' ? 'status_active' : 'status_inactive'}`}>
                    {client.status}
                </span>
            ),
        },
        {
            header: 'Operações',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render: (client) => (
                <div className="actions_cell">
                    {/* Em um app real, cada botão teria sua própria função, ex: onClick={() => handleEdit(client.id)} */}
                    <Button onClick={openModalEditUser}><i className="bi bi-pencil-square"></i></Button>
                    <button className="action_btn delete" aria-label="Deletar"><i className="bi bi-trash3-fill"></i></button>
                    <button className="action_btn activate" aria-label="Ativar"><i className="bi bi-check-square-fill"></i></button>
                    <button className="action_btn view" aria-label="Visualizar"><i className="bi bi-eye-fill"></i></button>
                </div>
            ),
        },
    ];

    // --- Renderização do Componente ---
    return (
        <main>
            <div className="page_action_container">
                <Button onClick={openModalAddUser}>
                    <i className="bi bi-plus-lg"></i>
                    Cadastrar
                </Button>
            </div>

            {/* Usando o componente DataTable. Toda a complexidade da tabela está encapsulada aqui. */}
            <DataTable
                title="Clientes"
                data={clients}
                columns={columns}
            />

            {/* O Modal de cadastro permanece como parte da lógica desta página específica. */}
            <Modal title="Cadastrar Novo Usuário" isOpen={isModalOpenAddUser} onClose={closeModalAddUser}>
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
                        <button type="button" className="secondary_button" onClick={closeModalAddUser}>
                            Cancelar
                        </button>
                        <Button onClick={handleFormSubmit} type="submit">
                            Cadastrar
                        </Button>
                    </footer>
                </form>
            </Modal>

            {/* Modal de edição do Usuário. */}
            <Modal title="Editar Usuário" isOpen={isModalOpenEditUser} onClose={closeModalEditUser}>
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
                        <button type="button" className="secondary_button" onClick={closeModalEditUser}>
                            Cancelar
                        </button>
                        <Button onClick={handleFormSubmit} type="submit">
                            Editar
                        </Button>
                    </footer>
                </form>
            </Modal>
        </main>
    );
};

export default Customers;