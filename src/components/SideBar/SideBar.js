import React from "react";

// import { dropHandler, dragOverHandler } from "../../utils/events";

import LayerList from "./LayersList/LayersList";

import "./SideBar.scss";

const SideBar = (props) => {
  console.log("RENDERING SideBar");
  return (
    <div className="sidebar-container">
      {/* <div
        className="sidebar"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      > */}
      <div className="sidebar-header"></div>
      <div className="sidebar-body">
        <LayerList />
      </div>
      <div className="sidebar-footer">
        Version: {process.env.REACT_APP_VERSION}
      </div>
      {/* </div> */}
    </div>
  );
};

export default SideBar;
