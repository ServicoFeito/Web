import { useNavigate } from 'react-router-dom';
import { LoginCard } from '../../components/LoginCard'; 
import './style.css';

export function Login() {
  const navigate = useNavigate();

  function handleLoginSubmit(event) {
    event.preventDefault();
    console.log('Tentando fazer login...');
    navigate('/dashboard');
  }

  return (
    <main className="page-container">
      <LoginCard onFormSubmit={handleLoginSubmit} />
    </main>
  );
}