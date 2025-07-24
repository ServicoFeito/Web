import './style.css';

export function ButtonLogin({ children, type = 'button' }) {
  return (
    <button className="custom-button" type={type}>
      {children}
    </button>
  );
}