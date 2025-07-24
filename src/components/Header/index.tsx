import React, { useState } from 'react';
import './style.css';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

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
                <li className="user-menu-item">
                  <FaSignOutAlt />
                  <span>Sair</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}