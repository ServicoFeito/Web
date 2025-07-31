import { useState, useEffect } from 'react';
import './Sidebar.css';
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.svg';

// Componente da barra lateral (Sidebar), com navegação e submenus.
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const [OpenMenus, setOpenMenus] = useState({});
    const { pathname } = useLocation();

    // Efeito que sincroniza o estado do menu com a URL atual, abrindo o menu correspondente.
    useEffect(() => {
        if (pathname.startsWith('/users')) {
            setOpenMenus(prevState => ({ ...prevState, users: true }));
        }
        if (pathname.startsWith('/supports')) {
            setOpenMenus(prevState => ({ ...prevState, supports: true }));
        }
        // Adicione outras condições 'if' para os demais menus que possuem submenus
    }, [pathname]);

    // Função para abrir/fechar um submenu ao ser clicado.
    const toggleMenu = (nomeDoMenu) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [nomeDoMenu]: !prevState[nomeDoMenu]
        }));
    };

    return (
        // Container principal da sidebar, que alterna a classe para responsividade.
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            {/* Cabeçalho da sidebar com logo, título e botão de fechar. */}
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={logo} alt="logo" />
                    <h1>SERVIÇO FEITO</h1>
                </div>
                <i
                    onClick={() => closeSidebar()}
                    className="bi bi-x-lg"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>

            {/* Container para todos os itens do menu. */}
            <div className="sidebar_menu">
                <Link to="/home" className="decoration_none">
                    <div className={`sidebar_link sidebar_menu_item_title ${pathname === '/home' ? 'active_menu_link' : ''}`}>
                        <i className="bi bi-speedometer2"></i>
                        <span>DASHBOARD</span>
                    </div>
                </Link>

                {/* --- SESSÃO MENU - USUÁRIOS --- */}
                {/* Item de menu principal "Usuários" que controla a visibilidade do submenu. */}
                <div
                    className={`sidebar_menu_item ${pathname.startsWith('/users') ? 'active_menu_link' : ''}`}
                    onClick={() => toggleMenu('users')}
                >
                    <Link to="/users" className="decoration_none">
                        <div className="sidebar_menu_item_title">
                            <i className="bi bi-people-fill"></i>
                            <span>USUÁRIOS</span>
                        </div>
                    </Link>
                    <i className={OpenMenus['users'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                {/* Renderização condicional do submenu de "Usuários". */}
                {OpenMenus['users'] && (
                    <div className="sidebar_submenu">
                        <Link to="/users/customers" className="decoration_none">
                            <div className="sidebar_link">
                                <i className="bi bi-arrow-right"></i>
                                <span className={`${pathname === '/users/customers' ? 'sidebar_link_focus' : ''}`}>Clientes</span>
                            </div>
                        </Link>
                        <Link to="/users/provider" className="decoration_none">
                            <div className="sidebar_link">
                                <i className="bi bi-arrow-right"></i>
                                <span className={`${pathname === '/users/provider' ? 'sidebar_link_focus' : ''}`}>Prestadores</span>
                            </div>
                        </Link>
                        <Link to="/users/admin" className="decoration_none">
                            <div className="sidebar_link">
                                <i className="bi bi-arrow-right"></i>
                                <span className={`${pathname === '/users/admin' ? 'sidebar_link_focus' : ''}`}>Admin</span>
                            </div>
                        </Link>
                    </div>
                )}

                {/* --- SESSÃO MENU - SUPPORTS --- */}
                <div className="sidebar_menu_item" onClick={() => toggleMenu('supports')}>
                    <div className="sidebar_menu_item_title">
                        <i className="bi bi-bell-fill"></i>
                        <span>SUPPORTS</span>
                    </div>
                    <i className={OpenMenus['supports'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                {OpenMenus['supports'] && (
                    <div className="sidebar_submenu">
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Clientes</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Geral</a>
                        </div>
                    </div>
                )}

                {/* --- SESSÃO MENU - DESTAQUES --- */}
                <div className="sidebar_menu_item" onClick={() => toggleMenu('highlight')}>
                    <div className="sidebar_menu_item_title">
                        <i className="bi bi-star-fill"></i>
                        <span>DESTAQUES</span>
                    </div>
                    <i className={OpenMenus['highlight'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                {OpenMenus['highlight'] && (
                    <div className="sidebar_submenu">
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Clientes</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Geral</a>
                        </div>
                    </div>
                )}

                {/* --- SESSÃO MENU - FINANCEIRO --- */}
                <div className="sidebar_menu_item" onClick={() => toggleMenu('financial')}>
                    <div className="sidebar_menu_item_title">
                        <i className="bi bi-currency-dollar"></i>
                        <span>FINANCEIRO</span>
                    </div>
                    <i className={OpenMenus['financial'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                {OpenMenus['financial'] && (
                    <div className="sidebar_submenu">
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Clientes</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Geral</a>
                        </div>
                    </div>
                )}

                {/* --- SESSÃO MENU - GEOGRAFIA --- */}
                <div className="sidebar_menu_item" onClick={() => toggleMenu('geography')}>
                    <div className="sidebar_menu_item_title">
                        <i className="bi bi-globe-americas"></i>
                        <span>GEOGRAFIA</span>
                    </div>
                    <i className={OpenMenus['geography'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                {OpenMenus['geography'] && (
                    <div className="sidebar_submenu">
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Clientes</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Geral</a>
                        </div>
                    </div>
                )}

                {/* Seção de logout no final da sidebar. */}
                <div className="sidebar_logout">
                    <i className="bi bi-box-arrow-left"></i>
                    <a href="#">Sair</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;