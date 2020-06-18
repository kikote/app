import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducer from "./store/reducer";

import store from "./store/store";

import App from "./App.js";

import "../node_modules/leaflet/dist/leaflet.css";
import "./index.scss";

// // eslint-disable-next-line no-underscore-dangle
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   reducer,
//   composeEnhancer(applyMiddleware(thunk))
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
