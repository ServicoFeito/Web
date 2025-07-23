import './style.css';

export function Input({ type, placeholder, name }) {
  return (
    <input
      className="custom-input"
      type={type}
      placeholder={placeholder}
      name={name}
      required
    />
  );
}