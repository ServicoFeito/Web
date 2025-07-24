import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';
import './style.css';

export default function AppLayout() {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  return (
    <div className={`app-layout ${isSidebarClosed ? 'sidebar-closed' : ''}`}>
      <Sidebar isClosed={isSidebarClosed} />
      <div className="main-container">
        <Header onToggleSidebar={toggleSidebar} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}