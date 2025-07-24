import './style.css';
import { Input } from '../Input';
import { ButtonLogin } from '../ButtonLogin';
import logo from '../../assets/logo.png';

export function LoginCard({ onFormSubmit }) {
  return (
    <div className="login-card">
      <img src={logo} alt="Serviço Feito Logo" className="login-logo" />
      <form onSubmit={onFormSubmit} className="login-form">
        <Input type="text" name="usuario" placeholder="Usuário" />
        <Input type="password" name="senha" placeholder="Senha" />
        <ButtonLogin type="submit">Entrar</ButtonLogin>
      </form>
    </div>
  );
}