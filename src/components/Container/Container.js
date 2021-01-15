import React from "react";

import SideBar from "../SideBar/SideBar";
import Map from "../Map/Map";

import "./Container.scss";

const Container = (props) => {
  return (
    <div className="container">
      <SideBar />
      <Map />
    </div>
  );
};

export default Container;
