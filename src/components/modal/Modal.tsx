import React from 'react';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        // A propriedade 'onClick' foi REMOVIDA do overlay. Agora ele não faz nada ao ser clicado.
        <div className="modal_overlay">
            <div className="modal_content">
                {/* Este botão 'X' continua funcionando normalmente */}
                <button className="modal_close_btn" onClick={onClose} aria-label="Fechar">
                    <i className="bi bi-x-lg"></i>
                </button>
                
                <header className="modal_header">
                    <h2>{title}</h2>
                </header>

                <div className="modal_body">
                    {children} 
                </div>
            </div>
        </div>
    );
};

export default Modal;