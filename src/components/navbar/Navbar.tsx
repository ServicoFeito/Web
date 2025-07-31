import { useState } from 'react';
import './Navbar.css';
import avatar from '../../assets/avatar.svg';
import {Link} from 'react-router-dom';

const Navbar = ({ openSidebar }) => {
    // Estado para controlar a visibilidade do menu dropdown
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para obter a saudação correta com base na hora
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Bom Dia";
        } else if (hour < 18) {
            return "Boa Tarde";
        } else {
            return "Boa Noite";
        }
    };

    return (
        // Container principal da barra de navegação.
        <nav className="navbar">
            {/* Ícone do menu (hambúrguer) para abrir a sidebar em telas menores. */}
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="bi bi-list" aria-hidden="true"></i>
            </div>

            {/* Seção esquerda da navbar com saudação dinâmica */}
            <div className="navbar_left">
                <span>{getGreeting()}, Admin!</span>
            </div>

            {/* Seção direita da navbar, com avatar e menu dropdown. */}
            <div className="navbar_right">
                <a href="#!" onClick={toggleMenu}>
                    <img width="30" src={avatar} alt="avatar" />
                </a>

                {/* Renderiza o menu dropdown se isMenuOpen for true */}
                {isMenuOpen && (
                    <div className="dropdown_menu">
                        <a href="#!">Editar Perfil</a>
                        <a href="#!">Configurações</a>
                        <Link to="/">SAIR</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;