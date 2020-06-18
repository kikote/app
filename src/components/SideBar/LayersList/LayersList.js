import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./LayersList.scss";

const LayersList = (props) => {
  console.log("RENDERING LayersList");
  //   useEffect(() => {
  //     console.log("New layer!");
  //   }, [props.layers]);
  console.log(props.layers);
  const layersElement = props.layers.map((l, i) => <li key={i}>{l.name}</li>);
  return <ul>{layersElement}</ul>;
};

const mapStateToProps = (state) => {
  return {
    layers: state.layers,
  };
};

export default connect(mapStateToProps)(LayersList);
