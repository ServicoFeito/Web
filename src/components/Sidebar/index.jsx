import React, { useState, useEffect } from 'react';
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
    path: '/users',
  },
  {
    icon: <FaHeadset />,
    text: 'Suportes',
    subItems: [
      { icon: <FaArrowRight />, text: 'Geral', path: '/supports/all' },
      { icon: <FaArrowRight />, text: 'Prestadores', path: '/supports/preachers' },
      { icon: <FaArrowRight />, text: 'Clientes', path: '/supports/clients' },
    ],
  },
  {
    icon: <FaDollarSign />,
    text: 'Financeiro',
    subItems: [
      { icon: <FaArrowRight />, text: 'Geral', path: '/financial/all' },
      { icon: <FaArrowRight />, text: 'Prestadores', path: '/financial/preachers' },
      { icon: <FaArrowRight />, text: 'Clientes', path: '/financial/clients' },
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
  const location = useLocation();
  const hasSubItems = !!item.subItems;

  const isActive = location.pathname === item.path;
  const isSubMenuActive = hasSubItems && item.subItems.some(sub => sub.path === location.pathname);

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
          className={`menuItem ${isOpen || isSubMenuActive ? 'active' : ''}`}
          onClick={onClick}
        >
          {content}
          <span className="chevron-icon">
            {isOpen || isSubMenuActive ? <FaChevronDown /> : <FaChevronRight />}
          </span>
        </li>
        {isOpen && (
          <ul className="submenuList">
            {item.subItems.map((subItem, index) => {
              const isSubItemActive = location.pathname === subItem.path;
              return (
                <li key={index} className="submenuItem">
                  <Link 
                    to={subItem.path || '#'} 
                    className={isSubItemActive ? 'active' : ''}
                    onClick={(e) => e.stopPropagation()} 
                  >
                    {subItem.icon}
                    <span>{subItem.text}</span>
                  </Link>
                </li>
              );
            })}
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
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const activeMenuIndex = menuData.findIndex(item =>
      item.subItems?.some(subItem => subItem.path === location.pathname)
    );
    
    if (activeMenuIndex !== -1) {
      setOpenIndex(activeMenuIndex);
    }
  }, [location.pathname]);

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
              onClick={() => item.subItems && handleItemClick(index)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}