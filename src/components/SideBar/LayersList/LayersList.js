import React from "react";
import { connect } from "react-redux";

import "./LayersList.scss";

const LayersList = (props) => {
  console.log("RENDERING LayersList");

  const layersElement = props.layers.map((l, i) => (
    <li key={i} draggable="true">
      {l.name}
    </li>
  ));
  return <ul>{layersElement}</ul>;
};

const mapStateToProps = (state) => {
  return {
    layers: state.layers,
  };
};

export default connect(mapStateToProps)(LayersList);
