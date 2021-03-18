import React from "react";

import "./Modal.scss";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  const modal = document.getElementsByClassName("kikote-modal")[0];
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const closeModal = () => {
  const modal = document.getElementsByClassName("kikote-modal")[0];
  modal.style.display = "none";
};

const Modal = () => {
  return (
    <div className="kikote-modal">
      <div className="kikote-modal-content">
        <span className="kikote-modal-close" onClick={closeModal}>
          &times;
        </span>
        <h2>Generic Modal</h2>
      </div>
    </div>
  );
};

export default Modal;
