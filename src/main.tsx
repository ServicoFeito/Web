import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import { Login } from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

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