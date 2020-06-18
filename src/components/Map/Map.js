import React, { useEffect } from "react";

import L from "leaflet";

import { dropHandler, dragOverHandler } from "../../utils/events";

import "./Map.scss";

const Map = (props) => {
  // Initialiaze map when component is mounted
  useEffect(() => {
    var map = L.map("map").setView([18, 0], 3);
    L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(map);
  }, []);

  return <div id="map" onDrop={dropHandler} onDragOver={dragOverHandler}></div>;
};

export default Map;
