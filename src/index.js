import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware } from "redux";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

applyMiddleware.listen(8080, () => {
  console.log("app is running in mode: ", process.env.NODE_ENV);
});
