import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/supports" element={<Dashboard />} /> Fazer a parte das outras rotas depois */}
    </Routes>
  );
}