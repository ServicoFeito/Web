import React, { useState } from 'react';
import './style.css';
import { FaBars, FaUserCircle, FaSignOutAlt, FaUserEdit, FaCog } from 'react-icons/fa';
export default function Header({ onToggleSidebar }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
<header className="header">
  <div className="header-left">
    <button onClick={onToggleSidebar} className="header-button">
      <FaBars />
    </button>
  </div>
  <div className="header-right">
    <div className="user-menu-container">
      <button onClick={toggleUserMenu} className="header-button">
        <FaUserCircle />
      </button>

      {isUserMenuOpen && (
        <div className="user-menu">
          <ul>
            <li>
              <a href="/profile" className="user-menu-item">
                <FaUserEdit />
                <span>Editar perfil</span>
              </a>
            </li>

            <li>
              <a href="/settings" className="user-menu-item">
                <FaCog />
                <span>Configurações</span>
              </a>
            </li>

            <li className="user-menu-separator">
              <a href="/Login" className="user-menu-item">
                <FaSignOutAlt />
                <span>Sair</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>
</header>
  );
}