import * as actionTypes from "./actionTypes";

export const setLayers = (data) => {
  console.log(data.name);
  return {
    type: actionTypes.SET_LAYERS,
    payload: data,
  };
};
