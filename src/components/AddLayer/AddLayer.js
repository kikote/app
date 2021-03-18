import React from "react";

import "./AddLayer.scss";

const openModal = () => {
  const modal = document.getElementsByClassName("kikote-modal")[0];
  modal.style.display = "block";
};

const AddLayer = () => {
  return (
    <div className="sidebar-header-addlayer" onClick={openModal}>
      &#x271A; Add Layer
    </div>
  );
};

export default AddLayer;
