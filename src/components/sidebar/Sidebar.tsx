import './Sidebar.css';
import logo from '../../assets/logo.svg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Serviço Feito</h1>
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
                    <a href="#">Home</a>
                </div>

                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="bi bi-speedometer2"></i>
                    <a href="#">Administrativa</a>
                </div>

                <div className="sidebar__link">
                    <i className="bi bi-speedometer2"></i>
                    <a href="#">Administrativa</a>
                </div>

                <div className="sidebar__link">
                    <i className="bi bi-speedometer2"></i>
                    <a href="#">Administrativa</a>
                </div>

                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="bi bi-speedometer2"></i>
                    <a href="#">Administrativa</a>
                </div>

                <div className="sidebar__link">
                    <i className="bi bi-speedometer2"></i>
                    <a href="#">Administrativa</a>
                </div>

                <div className="sidebar__logout">
                    <i className="bi bi-box-arrow-left"></i>
                    <a href="#">Sair</a>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;