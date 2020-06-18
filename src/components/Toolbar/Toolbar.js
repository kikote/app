import React from "react";

import "./Toolbar.scss";

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <div className="toolbar-header"></div>
      <div className="toolbar-body"></div>
      <div className="toolbar-footer">
        Version: {process.env.REACT_APP_VERSION}
      </div>
    </div>
  );
};

export default Toolbar;
