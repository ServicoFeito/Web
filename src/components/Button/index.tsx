import './style.css';

export function Button({ children, type = 'button' }) {
  return (
    <button className="custom-button" type={type}>
      {children}
    </button>
  );
}