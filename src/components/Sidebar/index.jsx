import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import {
  FaTachometerAlt,
  FaUsers,
  FaHeadset,
  FaDollarSign,
  FaChevronRight,
  FaChevronDown,
  FaArrowRight
} from 'react-icons/fa';

const menuData = [
  {
    icon: <FaTachometerAlt />,
    text: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: <FaUsers />,
    text: 'Usuários',
    path: '/usuarios',
  },
  {
    icon: <FaHeadset />,
    text: 'Suportes',
  },
  {
    icon: <FaDollarSign />,
    text: 'Financeiro',
    subItems: [
      { icon: <FaArrowRight />, text: 'Geral' },
      { icon: <FaArrowRight />, text: 'Prestadores' },
      { icon: <FaArrowRight />, text: 'Clientes' },
    ],
  },
];

function Logo() {
  return (
    <div className="logoContainer">
      <span>SERVIÇO FEITO</span>
    </div>
  );
}

function MenuItem({ item, isOpen, onClick }) {
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const location = useLocation();
  const isActive = location.pathname === item.path;

  const content = (
    <div className="menuItem-content">
      {item.icon}
      <span>{item.text}</span>
    </div>
  );

  if (hasSubItems) {
    return (
      <>
        <li
          className={`menuItem ${isOpen ? 'active' : ''}`}
          onClick={onClick}
        >
          {content}
          <span className="chevron-icon">
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </span>
        </li>
        {isOpen && (
          <ul className="submenuList">
            {item.subItems.map((subItem, index) => (
              <li key={index} className="submenuItem">
                {subItem.icon}
                <span>{subItem.text}</span>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }

  return (
    <Link to={item.path || '#'} className={`menuLink ${isActive ? 'active' : ''}`}>
      <li className="menuItem">
        {content}
      </li>
    </Link>
  );
}

export default function Sidebar({ isClosed }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <aside className={`sidebar ${isClosed ? 'closed' : ''}`}>
      <Logo />
      <nav>
        <p className="menu-label">MENU</p>
        <ul className="menuList">
          {menuData.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}