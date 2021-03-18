import React from "react";

import SideBar from "../SideBar/SideBar";
import Map from "../Map/Map";
import Modal from "../Modal/Modal";

import "./Container.scss";

const Container = (props) => {
  return (
    <div className="container">
      <SideBar />
      <Map />
      <Modal />
    </div>
  );
};

export default Container;
