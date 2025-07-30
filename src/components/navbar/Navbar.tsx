import './Navbar.css';
import avatar from '../../assets/avatar.svg'

// Componente da barra de navegação superior (Navbar).
const Navbar = ({ openSidebar }) => {
    return (
        // Container principal da barra de navegação.
        <nav className="navbar">
            {/* Ícone do menu (hambúrguer) para abrir a sidebar em telas menores. */}
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="bi bi-list" aria-hidden="true"></i>
            </div>

            {/* Seção esquerda da navbar, para links de navegação (atualmente comentados). */}
            <div className="navbar_left">
                {/* <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a> */}
            </div>

            {/* Seção direita da navbar, para ícone do perfil do usuário. */}
            <div className="navbar_right">
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;