import React from "react";

import Toolbar from "../Toolbar/Toolbar";
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
