import React, { useEffect } from "react";

import L from "leaflet";

import "./Map.scss";

const Map = (props) => {
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

  return <div id="map"></div>;
};

export default Map;
