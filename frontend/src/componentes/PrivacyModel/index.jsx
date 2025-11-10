import React from "react";
import './PrivacyModal.css'; // o CSS vem logo abaixo

const PrivacyModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-privacymodel" onClick={onClose}>
      <div className="modal-box-privacymodel" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Política de Privacidade</h2>
        <p>
          Coletamos apenas as informações necessárias para envio da newsletter,
          como nome, e-mail e telefone. Seus dados são armazenados de forma segura e não
          serão compartilhados com terceiros.
        </p>
        <p>
          Você pode cancelar sua inscrição a qualquer momento clicando no link
          de descadastro presente em nossos e-mails.
        </p>
        <p>
          Para dúvidas ou solicitações sobre seus dados, entre em contato pelo
          nosso e-mail de suporte: contato@encontreeconomia.com.br
        </p>
      </div>
    </div>
  );
}

export default PrivacyModel
