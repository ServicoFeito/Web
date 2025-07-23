import React from 'react';
import './style.css';
import { FaTachometerAlt, FaHeadset, FaDollarSign, FaChevronRight } from 'react-icons/fa';

function Logo() {
  return (
    <div className="logoContainer">
      <span>SERVIÇO FEITO</span>
    </div>
  );
}

function MenuItem({ icon, text, active, hasSubmenu }) {
  return (
    <li className={`menuItem ${active ? 'active' : ''}`}>
      {icon}
      <span>{text}</span>
      {hasSubmenu && <FaChevronRight className="chevron" />}
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo />
      <nav>
        <ul className="menuList">
          <MenuItem icon={<FaTachometerAlt />} text="Dashboard" active />
          {/* <MenuItem icon={<FaHeadset />} text="Suportes" hasSubmenu />
          <MenuItem icon={<FaDollarSign />} text="Financeiro" hasSubmenu /> */}
        </ul>
      </nav>
    </aside>
  );
}