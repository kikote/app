import React, { useEffect } from "react";
// import { connect } from "react-redux";
import L from "leaflet";

// import * as actions from "../../store/actions/actions";

import { dropHandler, dragOverHandler } from "../../utils/events";

import "./Map.scss";

const Map = (props) => {
  // Initialiaze map when component is mounted
  useEffect(() => {
    const map = L.map("map").setView([18, 0], 3);

    // L.control
    //   .zoom({
    //     position: "bottomright",
    //   })
    //   .addTo(map);

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

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     // onSetSelectedStation: (data) => {
//     //   dispatch(actions.setSelectedStation(data));
//     // },
//     // onSetActiveLayerName: (data) => {
//     //   dispatch(actions.setActiveLayerName(data));
//     // },
//     // onSetChartData: (data) => {
//     //   dispatch(
//     //     actions.setProperty({
//     //       type: ownProps.fileType,
//     //       key: "chartData",
//     //       value: data,
//     //     })
//     //   );
//     // },
//     // onSetLevel: (data) => {
//     //   dispatch(actions.setLevel(data));
//     // },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Map);
export default Map;
