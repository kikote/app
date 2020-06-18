import * as actionTypes from "./actions/actionTypes";

const initialState = {
  layers: [],
};

const setLayers = (state, action) => {
  state.layers = state.layers.concat(action.payload);
  return state;
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.SET_LAYERS:
      return setLayers(newState, action);
    default:
      return newState;
  }
};

export default reducer;
