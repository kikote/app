import React from "react";

import Toolbar from "../SideBar/SideBar";
import Map from "../Map/Map";

import "./Container.scss";

const Container = (props) => {
  return (
    <div className="container">
      <Toolbar />
      <Map />
    </div>
  );
};

export default Container;
