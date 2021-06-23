//TI imports
import React from "react";

//styles imports
import './styles/Modal.css'

const Modal = props => {
  if (!props.isOpen) {
    return null:
  }

  return (
    <div className="modal">
      <div className="modal-container">
        <button onClick={props.onClose} className="btn btn-danger modal-close-button">X</button>
      </div>
    </div>
  )
}

export default Modal;