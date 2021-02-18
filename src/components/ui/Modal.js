import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({ showModal, click, quote }) => {
  if (!showModal) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div className="backdrop" onClick={click} />
      <div className="modal flex__row center">{quote}</div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
