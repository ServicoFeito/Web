import { useState, useEffect } from 'react'; 
import './Sidebar.css';
import {Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.svg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const [OpenMenus, setOpenMenus] = useState({});
    const { pathname } = useLocation();

    // NOVO: Este 'effect' sincroniza o menu com a URL atual
    useEffect(() => {
        if (pathname.startsWith('/users')) {
            // Se a URL for de usuários, garante que o menu esteja aberto
            setOpenMenus(prevState => ({ ...prevState, users: true }));
        }
        if (pathname.startsWith('/supports')) {
            // Exemplo para outros menus...
            setOpenMenus(prevState => ({ ...prevState, supports: true }));
        }
        // Adicione outras condições 'if' para os demais menus que possuem submenus
    }, [pathname]); // O array [pathname] faz com que este código rode sempre que a URL mudar

    const toggleMenu = (nomeDoMenu) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [nomeDoMenu]: !prevState[nomeDoMenu] 
        }));
    };

    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
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

            <div className="sidebar_menu">
                <Link to="/home" className="decoration_none">
                    <div className={`sidebar_link ${pathname === '/home' ? 'active_menu_link' : ''}`}>
                        <i className="bi bi-dash-square-fill"></i>
                        <span>DASHBOARD</span>
                    </div>
                </Link>

                {/* 
                    SESSÃO MENU - USUÁRIOS 
                */}

                <Link to="/users" className="decoration_none">
                    <div 
                        className={`sidebar_link sidebar_menu_item ${pathname.startsWith('/users') ? 'active_menu_link' : ''}`} 
                        onClick={() => toggleMenu('users')}
                    >
                        <div className="sidebar_menu_item_title">
                            <i className="bi bi-people-fill"></i>
                            <span>USUÁRIOS</span>
                        </div>
                        <i className={OpenMenus['users'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                    </div>
                </Link>

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

                {/* 
                    SESSÃO MENU - SUPPORTS
                */}

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

                {/* 
                    SESSÃO MENU - DESTAQUES
                */}

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

                {/* 
                    SESSÃO MENU - FINANCEIRO
                */}

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

                {/* 
                    SESSÃO MENU - GEOGGRAFIA
                */}

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


                <div className="sidebar_logout">
                    <i className="bi bi-box-arrow-left"></i>
                    <a href="#">Sair</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;