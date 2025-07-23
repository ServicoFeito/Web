import './style.css';
import { Input } from '../Input';
import { Button } from '../Button';
import logo from '../../assets/logo.png';

export function LoginCard({ onFormSubmit }) {
  return (
    <div className="login-card">
      <img src={logo} alt="Serviço Feito Logo" className="login-logo" />
      <form onSubmit={onFormSubmit} className="login-form">
        <Input type="text" name="usuario" placeholder="Usuário" />
        <Input type="password" name="senha" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
}