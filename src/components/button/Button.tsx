import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <button className="reusable_button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;