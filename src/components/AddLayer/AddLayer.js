import React from "react";

import "./AddLayer.scss";

const AddLayer = () => {
  return (
    <div
      className="sidebar-header-addlayer"
      onClick={() => console.log("Open modal")}
    >
      &#x271A; Add Layer
    </div>
  );
};

export default AddLayer;
