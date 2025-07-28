import { useState } from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.svg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    // 1. Um único estado para controlar todos os menus.
    const [OpenMenus, setOpenMenus] = useState({});

    // 2. Uma única função para alternar qualquer menu pelo seu nome (ID).
    const toggleMenu = (nomeDoMenu) => {
        setOpenMenus(prevState => ({
            // Copia o estado anterior dos outros menus
            ...prevState,
            // Inverte o estado do menu clicado (se não existir, será 'true')
            [nomeDoMenu]: !prevState[nomeDoMenu] 
        }));
    };

    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
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

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="bi bi-dash-square-fill"></i>
                    <Link to="/">DASHBOARD</Link>
                </div>

                {/* 
                    SESSÃO MENU - USUÁRIOS
                */}

                <div className="sidebar__menu__item" onClick={() => toggleMenu('users')}>
                    <div className="sidebar__menu__item__title">
                        <i className="bi bi-people-fill"></i>
                        <span>USUÁRIOS</span>
                    </div>
                    <i className={OpenMenus['users'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>

                {OpenMenus['users'] && (
                    <div className="sidebar__submenu">
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <Link to="/users/customers">Clientes</Link>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Admin</a>
                        </div>
                    </div>
                )}

                {/* 
                    SESSÃO MENU - SUPPORTS
                */}

                <div className="sidebar__menu__item" onClick={() => toggleMenu('supports')}>
                    <div className="sidebar__menu__item__title">
                        <i className="bi bi-bell-fill"></i>
                        <span>SUPPORTS</span>
                    </div>
                    <i className={OpenMenus['supports'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                
                {OpenMenus['supports'] && (
                    <div className="sidebar__submenu">
                         <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Clientes</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Geral</a>
                        </div>
                    </div>
                )}

                {/* 
                    SESSÃO MENU - DESTAQUES
                */}

                <div className="sidebar__menu__item" onClick={() => toggleMenu('highlight')}>
                    <div className="sidebar__menu__item__title">
                        <i className="bi bi-star-fill"></i>
                        <span>DESTAQUES</span>
                    </div>
                    <i className={OpenMenus['highlight'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                
                {OpenMenus['highlight'] && (
                    <div className="sidebar__submenu">
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Clientes</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Geral</a>
                        </div>
                    </div>
                )}

                {/* 
                    SESSÃO MENU - FINANCEIRO
                */}

                <div className="sidebar__menu__item" onClick={() => toggleMenu('financial')}>
                    <div className="sidebar__menu__item__title">
                        <i className="bi bi-currency-dollar"></i>
                        <span>FINANCEIRO</span>
                    </div>
                    <i className={OpenMenus['financial'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                
                {OpenMenus['financial'] && (
                    <div className="sidebar__submenu">
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Clientes</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Geral</a>
                        </div>
                    </div>
                )}

                {/* 
                    SESSÃO MENU - GEOGGRAFIA
                */}

                <div className="sidebar__menu__item" onClick={() => toggleMenu('geography')}>
                    <div className="sidebar__menu__item__title">
                        <i className="bi bi-globe-americas"></i>
                        <span>GEOGRAFIA</span>
                    </div>
                    <i className={OpenMenus['geography'] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
                </div>
                
                {OpenMenus['geography'] && (
                    <div className="sidebar__submenu">
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Clientes</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Prestadores</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="bi bi-arrow-right"></i>
                            <a href="#">Geral</a>
                        </div>
                    </div>
                )}


                <div className="sidebar__logout">
                    <i className="bi bi-box-arrow-left"></i>
                    <a href="#">Sair</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;