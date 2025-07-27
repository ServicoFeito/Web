import './Navbar.css';
import avatar from '../../assets/avatar.svg'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="bi bi-list" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                {/* <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a> */}
            </div>

            <div className="navbar__right">
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;