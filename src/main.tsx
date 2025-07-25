/**
 * Ponto de entrada principal da aplicação.
 * Configura o roteamento global, separando rotas públicas (Login)
 * de rotas privadas que utilizam um layout com Sidebar e Header.
 */
import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { Login } from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

import './layouts-global.css';

// O Layout é definido aqui, uma única vez.
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

// O render da aplicação acontece aqui.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usuarios" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);